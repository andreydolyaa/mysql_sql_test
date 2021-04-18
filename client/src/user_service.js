
const BASE_URL = `http://localhost:3001/users`



async function loadUsers() {
    const users = await axios.get(BASE_URL);
    return users.data;
}

async function addUser(user) {
    const newUser = await axios.post(BASE_URL, user);
    return newUser.data;
}



export {
    loadUsers,
    addUser
};