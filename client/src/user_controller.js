


import { loadUsers } from './user_service.js'


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


export { init }