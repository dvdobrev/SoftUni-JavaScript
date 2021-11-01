window.addEventListener('load', solve);

function solve() {
    const model = document.querySelector('#model');
    const year = document.querySelector('#year');
    const description = document.querySelector('#description');
    const price = document.querySelector('#price');
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addToTable);
    const tbody = document.querySelector('#furniture-list')

    function addToTable(e) {
        e.preventDefault();
        if (inputsOK()) {
            let info = document.createElement('tr');
            info.className = "info";
            info.innerHTML = `<td>${model.value}</td>
<td>${Number(price.value).toFixed(2)}</td>
<td><button class="moreBtn">More Info</button>
<button class="buyBtn">Buy it</button></td>`;
            let hide = document.createElement('tr');
            hide.className = "hide";
            hide.innerHTML = `<tr class="hide">
<td>Year: ${year.value}</td>
<td colspan="3">Description: ${description.value}</td></tr>`;

            tbody.appendChild(info);
            tbody.appendChild(hide);
            
            let [moreBtn, buyBtn] = Array.from(info.querySelectorAll('button'));
            moreBtn.addEventListener('click', showMoreOrLess);
            buyBtn.addEventListener('click', buyProduct);

            [model, year, description, price].forEach(el => el.value = '');
        }
    } 

    function buyProduct(e) {
        let price = e.target.parentElement.previousElementSibling.textContent;
        price = Number(price);
        let total = document.querySelector('.total-price').textContent;
        total = Number(total);
        document.querySelector('.total-price').textContent = (total + price).toFixed(2);
        e.target.parentElement.parentElement.nextElementSibling.remove();
        e.target.parentElement.parentElement.remove();
    }

    function showMoreOrLess(e) {
        if (e.target.textContent == 'More Info') {
            e.target.textContent = 'Less Info';
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'contents';
        }else {
            e.target.textContent = 'More Info';
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
        }
    }

    function inputsOK() {
        const [y, p, m, d] = [Number(year.value), Number(price.value), model.value.trim(), description.value.trim()]
        if (m != '' && d != '' && y > 0 && p > 0) {
            return true;
        }
        return false;
    }
}