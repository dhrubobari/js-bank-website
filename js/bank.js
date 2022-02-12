document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value; // .value dawa hoise jate ami text korle text ta dekhte pari
    
    // get user password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;
    // if (jodi, shorto)
    if(userEmail == 'ehsantanvir@gmail.com' && userPassword == 'secret') // gmail and password ek matro eta hoilei nibe.
    {
        window.location.href = 'banking.html';
    } // eta diye onno ekta website e nie jabe.
}) // but these systems ain't standard