window.addEventListener('load', solution);


function solution() {
  const [name, email, phone, address, postal] = Array.from(document.querySelectorAll('#form div input'));
  const subBtn = document.querySelector('#submitBTN');
  subBtn.addEventListener('click', previewInfo);

  const prInfo = document.querySelector('#infoPreview');
  const editBtn = document.querySelector('#editBTN');
  const contBtn = document.querySelector('#continueBTN');
  editBtn.addEventListener('click', edit);
  contBtn.addEventListener('click', finish);

  function previewInfo() {
    if (name.value != '' && email.value != '') {
      prInfo.innerHTML = `<li>Full Name: ${name.value}</li>
<li>Email: ${email.value}</li>
<li>Phone Number: ${phone.value}</li>
<li>Address: ${address.value}</li>
<li>Postal Code: ${postal.value}</li>`;
      
      subBtn.disabled = true;
      editBtn.disabled = false;
      contBtn.disabled = false;

      [name, email, phone, address, postal].forEach(el => el.value = '');
    }
    
  }
  function edit() {
    let [na, em, ph, ad, po] = Array.from(prInfo.children).map(el => el.textContent.split(': ')[1]);
    [name.value, email.value, phone.value, address.value, postal.value] = [na, em, ph, ad, po];
    prInfo.innerHTML = '';
    subBtn.disabled = false;
    editBtn.disabled = true;
    contBtn.disabled = true;
  }
  function finish() {
    document.querySelector('#block').innerHTML = '<h3>Thank you for your reservation!</h3>';
  }
}