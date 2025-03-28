// código do PayPal como desenvolvedor
function initPayPalButton() {
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{"amount":{"currency_code":"USD","value":"0.99"}}]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                // Detalhes completos disponíveis
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                // Mostra uma mensagem de sucesso nesta página, por exemplo:
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Ou vá para outra URL: actions.redirect('thank_you.html');
            });
        },
        onError: function(err) {
            console.log(err);
        }
    }).render('#paypal-button-container');
}

// Inicializar o botão do PayPal
initPayPalButton();
