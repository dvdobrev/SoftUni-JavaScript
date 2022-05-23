window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let descriptionField = document.getElementById('description');
    let clientNameField = document.getElementById('client-name');
    let clientPhoneField = document.getElementById('client-phone');

    let sendButton = document.querySelector('#right > form > button');
    let clearButton = document.querySelector('#completed-orders > button');


    let recievedOrderSection = document.getElementById('received-orders');
    let completedOrdersSection = document.getElementById('completed-orders');

    sendButton.addEventListener('click', handler);

    function handler(e) {
        e.preventDefault();

        if (descriptionField.value != "" && clientNameField.value != "" && clientPhoneField.value != '') {
        
            let div = document.createElement('div');
            div.className = 'container'

            let h2 = document.createElement('h2');
            h2.textContent = `Product type for repair: ${productType.value}`;
            div.appendChild(h2);

            let h3 = document.createElement('h3');
            h3.textContent = `Client information: ${clientNameField.value}, ${clientPhoneField.value}`;
            div.appendChild(h3);

            let h4 = document.createElement('h4');
            h4.textContent = `Description of the problem: ${descriptionField.value}`;
            div.appendChild(h4);

            let startBtn = document.createElement('button');
            startBtn.className = 'start-btn';
            startBtn.textContent = `Start repair`;
            div.appendChild(startBtn);

            let finishButton = document.createElement('button');
            finishButton.className = 'finish-btn';
            finishButton.textContent = `Finish repair`;
            finishButton.disabled = true;
            div.appendChild(finishButton);

            recievedOrderSection.appendChild(div);

            startBtn.addEventListener('click', startBtnHandler)
            finishButton.addEventListener('click', finishButtonHandler)
            clearButton.addEventListener('click', clearHandler)


            descriptionField.value = '';
            clientNameField.value = '';
            clientPhoneField.value = '';

            function startBtnHandler() {
                startBtn.disabled = true;
                finishButton.disabled = false;
            }

            function finishButtonHandler() {
                div.removeChild(startBtn);
                div.removeChild(finishButton);

                completedOrdersSection.appendChild(div)
            }

            function clearHandler() {
                completedOrdersSection.removeChild(div);
            }

        }
    }
}