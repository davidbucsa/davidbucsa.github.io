function signInUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            window.open('landing.html','_self',false);
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}