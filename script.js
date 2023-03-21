// imports elements for login-rutan
const userNameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

// imports elements for signup-rutan
const signUpBtn = document.getElementById('signUpBtn');
const newUserName = document.getElementById('newUserName');
const newPassword = document.getElementById('newPassword');

// div that prints messages to page
const demo = document.getElementById('demo');

if(localStorage.getItem('users')) {
    console.log('');
} else {
    let users = [ 
        {id: 0, userName: "janne", password: "test"},
        {id: 1, userName: "mirr", password: "123"},
        {id: 2, userName: "cheri", password: "skinka"}
     ]
    localStorage.setItem('users', JSON.stringify(users));
}

if(localStorage.getItem('loggedInUser')) {
    printUserName();
}

 loginBtn.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.userName === userNameInput.value && user.password === passwordInput.value); 
  //  console.log("janne", user)

     if (user) {

        let loggedInUser = userNameInput.value;
        localStorage.setItem('loggedInUser', loggedInUser);

        printUserName();

    } else {
       userDoesNotExist();
       console.log('vill inte visa sig');
    } 
}); 

//////////////
// FUNCTIONS
function printUserName() {

    let loggedInUser = localStorage.getItem('loggedInUser');
    demo.innerText = 'Välkommen! Du är inloggad som: ' + loggedInUser + ' ';

    // creates logout-button
    let logoutBtn = document.createElement("button")
    logoutBtn.innerText = "Logga ut!";
    demo.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); 
      demo.innerText = 'Du är nu utloggad ';
    })
}

function userDoesNotExist() {
    demo.innerText = 'Användarnamn eller lösenord stämmer inte ';
}

// to save new users:
signUpBtn.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users'));

    let newUser = {
        id: users.length + 1,
        userName: newUserName.value,
        password: newPassword.value

    }
    demo.innerText = 'Grattis till ditt nya medlemsskap! ' + 
    ' Prova att logga in nu, ' + newUser.userName + ' ;) ';

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
});