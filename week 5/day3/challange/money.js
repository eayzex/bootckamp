// API key - you should sign up for your own key at exchangerate-api.com
const API_KEY = 'YOUR_API_KEY_HERE';
let currencies = [];

document.addEventListener('DOMContentLoaded', function() {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const amount = document.getElementById('amount');
    const convertBtn = document.getElementById('convert-btn');
    const switchBtn = document.getElementById('switch-btn');
    const result = document.getElementById('result');

    // Fetch supported currencies
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                currencies = data.supported_codes;
                populateCurrencyDropdowns();
            }
        })
        .catch(error => {
            console.error('Error fetching currency codes:', error);
        });

    // Convert button click handler
    convertBtn.addEventListener('click', function() {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amt = parseFloat(amount.value);

        if (isNaN(amt) || amt <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        if (from === 'PSE' || to === 'PSE') {
            // Special handling for Palestinian Solidarity Token (symbolic)
            result.textContent = `Conversion result: ${amt.toFixed(2)} ${from} = ${(amt * 3.67).toFixed(2)} ${to}`;
            result.style.display = 'block';
            return;
        }

        // Regular currency conversion
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amt}`)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    result.textContent = `Conversion result: ${amt.toFixed(2)} ${from} = ${data.conversion_result.toFixed(2)} ${to}`;
                    result.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error converting currencies:', error);
                result.textContent = 'Error converting currencies. Please try again.';
                result.style.display = 'block';
            });
    });

    // Switch currencies button
    switchBtn.addEventListener('click', function() {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
    });

    // Populate currency dropdowns
    function populateCurrencyDropdowns() {
        currencies.forEach(currency => {
            const [code, name] = currency;
            
            if (code !== 'PSE') { // Skip adding PSE again as it's already in HTML
                const option1 = document.createElement('option');
                option1.value = code;
                option1.textContent = `${code} - ${name}`;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = code;
                option2.textContent = `${code} - ${name}`;
                toCurrency.appendChild(option2);
            }
        });
    }
});