
const BASE_URL = `http://localhost:3001/users`



async function loadUsers() {
    const users = await axios.get(BASE_URL);
    return users.data;
}



export { loadUsers };