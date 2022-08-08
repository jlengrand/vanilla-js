import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

async function callServer(url, data) {
    const res = await fetch(url, {
      method: "POST",
      body: data ? JSON.stringify(data) : "",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return await res.json();
  }

const checkoutSessionResponse = await callServer("/api/sessions");

const configuration = {
    environment: 'test',
    clientKey: 'test_LETB6D7TMZCIZFSNMDRGMEPJ3UVB2TYP', 
    session: checkoutSessionResponse,
    onPaymentCompleted: (result, component) => {
        console.info(result, component);
    },
    onError: (error, component) => {
        console.error(error.name, error.message, error.stack, component);
    },
    paymentMethodsConfiguration: {
        card: {
        hasHolderName: true,
        holderNameRequired: true,
        billingAddressRequired: true
        }
    }
};

console.log(configuration.clientKey);

try{
// Create an instance of AdyenCheckout using the configuration object.

const checkout = await AdyenCheckout(configuration);
 
// Create an instance of Drop-in and mount it to the container you created.
checkout.create('dropin').mount('#dropin-container');

}catch(error){
    console.log(error);
}