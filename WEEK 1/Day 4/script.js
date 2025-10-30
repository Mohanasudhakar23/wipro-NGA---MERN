// RESTful API demo using Fetch API + Async Await

// API endpoints explanation:
// GET /users       → Retrieve all users
// POST /users      → Create a new user
// PUT /users/:id   → Update an existing user
// DELETE /users/:id→ Delete a user

const userList = document.getElementById("user-list");
const loadUsersBtn = document.getElementById("loadUsers");
const addUserBtn = document.getElementById("addUser");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// ------------------ GET USERS ------------------
async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Network response was not ok");

        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Display users in the webpage
function displayUsers(users) {
    userList.innerHTML = ""; // Clear old data
    users.forEach(user => {
        const userItem = document.createElement("div");
        userItem.className = "user-item";
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(userItem);
    });
}

// ------------------ ADD USER (POST) ------------------
async function addUser() {
    const newUser = {
        name: "New User",
        email: "newuser@example.com"
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const createdUser = await response.json();
        console.log("User added successfully:", createdUser);
        fetchUsers(); // refresh list after adding
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

// ------------------ EDIT USER (PUT) ------------------
async function editUser(userId) {
    const updatedUser = {
        name: "Updated User",
        email: "updateduser@example.com"
    };

    try {
        // ✅ Fixed Template Literal Syntax
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser)
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        console.log("User updated successfully:", result);
        fetchUsers(); // Refresh list
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

// ------------------ DELETE USER (DELETE) ------------------
async function deleteUser(userId) {
    try {
        // ✅ Fixed Template Literal Syntax
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Network response was not ok");

        console.log("User deleted successfully");
        fetchUsers(); // Refresh list
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

// ------------------ BUTTON EVENT LISTENERS ------------------
loadUsersBtn.addEventListener("click", fetchUsers);
addUserBtn.addEventListener("click", addUser);
