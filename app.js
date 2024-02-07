document.getElementById('userNameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const isValidUsername = /^[a-zA-Z0-9]{5,}$/.test(username);

    if (isValidUsername) {
        alert('Success! Username is valid.');
    } else {
        alert('Error! Username should be at least 5 characters long and contain only alphanumeric characters.');
    }
});

btn2.addEventListener('click', function(){
    if(innerdiv.style.visibility=='hidden'){
        innerdiv.style = "visibility:visible";
        btn2.innerHTML = "Hide Div";
    }
    else {
        innerdiv.style = "visibility:hidden";
        btn2.innerHTML = "Show Div";
    }
})