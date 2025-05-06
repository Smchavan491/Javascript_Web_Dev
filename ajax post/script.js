//Creating the heading
const heading = document.createElement('h2');
heading.textContent = "Regestration Form";
document.body.appendChild(heading);

//creating form
const form = document.createElement("form");

//create name label
const namelabel = document.createElement('label');
namelabel.textContent = "Name : ";
form.appendChild(namelabel);

//name input
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter name";
nameInput.required = true;
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));

//create mail label
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email: ";
form.appendChild(emailLabel);

//mail input 
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter mail";
emailInput.required = true;
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));

//submit button
const submitbttn = document.createElement("button");
submitbttn.type = "submit";
submitbttn.textContent = "Register";
form.appendChild(submitbttn);

//add from to document body
document.body.appendChild(form);

//Handle the form submission
form.addEventListener("submit", function(event){
    event.preventDefault();

    //create the user object
    const user = {
        name : nameInput.value,
        email : emailInput.value
    };

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User registered successfully!");

    //Ajax post
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://httpbin.org/post", true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(user));

    // Redirect to view page
   window.location.href = "data.html";
})

