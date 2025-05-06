// Get users from localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];

// Get the element where users will be displayed
const userList = document.getElementById("userList");

// Check if users exist
if (users.length === 0) {
  userList.innerHTML = "<li>No users registered yet.</li>";
} else {
  // Loop through each user and create a list item
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. Name: ${user.name}, Email: ${user.email}`;
    userList.appendChild(li);
  });
}
