


import { loadUsers, addUser } from './user_service.js'


function init() {
    renderUsersTable();
}


async function renderUsersTable(users) {
    var strHTML = '';
    var users = await loadUsers();

    strHTML = users.map(user => {
        return `
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
        </tr>
        `
    });
    document.querySelector('.users-container').innerHTML = strHTML.join('');
}


async function onAddUser(event) {
    event.preventDefault();
    let user = {
        firstName: document.querySelector('#first-name').value,
        lastName: document.querySelector('#last-name').value,
        age: document.querySelector('#age').value,
        email: document.querySelector('#email').value,
        address: document.querySelector('#address').value
    }
    console.log(user);
    await addUser(user);
    init();
    clearInputFields();
}


function clearInputFields() {
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#address').value = '';
}


export {
    init,
    onAddUser
}