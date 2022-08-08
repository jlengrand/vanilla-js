import  AdyenCheckout  from '@adyen/adyen-web';
// import '@adyen/adyen-web/dist/adyen.css';

const configuration = {
    environment: 'test', // Change to 'live' for the live environment.
    clientKey: 'test_LETB6D7TMZCIZFSNMDRGMEPJ3UVB2TYP', // Public key used for client-side authentication: https://docs.adyen.com/development-resources/client-side-authentication
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