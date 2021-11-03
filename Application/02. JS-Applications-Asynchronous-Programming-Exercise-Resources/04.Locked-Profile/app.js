async function lockedProfile() {
    const mainSection = document.querySelector('main');
    const userProfile = document.querySelector('#main div');
    const fetchedData = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await (fetchedData.json());
    
    Object.values(data).forEach(d => {
        let newProfile = userProfile.cloneNode(true);
        mainSection.appendChild(newProfile);

        const [lock, unlock, name, email, age] = Array.from(newProfile.querySelectorAll('input'));
        name.value = d.username;
        email.value = d.email;
        age.value = d.age;
        lock.name = d.username;
        lock.checked = true;
        unlock.name = d.username;

        newProfile.querySelector('button').addEventListener('click', (e) => {
            if (e.target.parentElement.children[4].checked) {
                if (e.target.textContent == 'Show more') {
                    e.target.textContent = 'Show less';
                    e.target.previousElementSibling.style.display = 'block';
                } else {
                    e.target.textContent = 'Show more';
                    e.target.previousElementSibling.style.display = 'none';
                }
            }
        })
    });
    userProfile.style.display = 'none';
}
