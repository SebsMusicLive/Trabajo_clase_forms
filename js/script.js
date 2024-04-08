const form = document.forms['loginForm'];

form.addEventListener('submit', function handleFormSubmit(event){
    event.preventDefault();

    const email = form['email'].value;
    const password = form['password'].value;

    //console.log(email);
    //console.log(password);
});

function loginUser(email, password){
    console.log('login user '+email);

    firebase,auth().singInWithEmailAndPassword(email, password)
    .then(function(user))
}