const express = require("express");
const path = require("path");
const morgan = require("morgan");

const { Client, Config, CheckoutAPI } = require("@adyen/api-library");
const { uuid } = require("uuidv4");

// init app
const app = express();
// setup request logging
app.use(morgan("dev"));
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Serve client from build folder
app.use(express.static(path.join(__dirname, "/public")));

// Adyen Node.js API library boilerplate (configuration, etc.)
const config = new Config();
config.apiKey = process.env.ADYEN_API_KEY;
const client = new Client({ config });
client.setEnvironment("TEST");  // change to LIVE for production
const checkout = new CheckoutAPI(client);

app.post("/api/sessions", async (req, res) => {
  try {
    // unique ref for the transaction
    const orderRef = uuid();
    // Allows for gitpod support
    const localhost = req.get('host');
    // const isHttps = req.connection.encrypted;
    const protocol = req.socket.encrypted? 'https' : 'http';
    // Ideally the data passed here should be computed based on business logic
    const response = await checkout.sessions({
      amount: { currency: "EUR", value: 1000 }, // value is 10€ in minor units
      countryCode: "NL",
      merchantAccount: process.env.ADYEN_MERCHANT_ACCOUNT, // required
      reference: orderRef, // required: your Payment Reference
      returnUrl: `${protocol}://${localhost}/api/handleShopperRedirect?orderRef=${orderRef}` // set redirect URL required for some payment methods
    });

    res.json(response);
  } catch (err) {
    console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
    res.status(err.statusCode).json(err.message);
  }
});

app.get("/", (req, res) => res.render("index"));

function getPort() {
  return process.env.PORT || 9000;
}

// Start server
app.listen(getPort(), () => console.log(`Server started -> http://localhost:${getPort()}`));
