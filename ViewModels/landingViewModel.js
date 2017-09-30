$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            usersRef = new Firebase(firebaseRoot + '/Partners/' + user.uid);
            usersRef.once('value', function (snap) {
                var companyName = document.getElementById("companyName");
                var companyAddress = document.getElementById("companyAddress");
                companyNameDoc.innerHTML = snap.val().Name;
                companyAddress.innerHTML = snap.val().Address;
            });


            var fileButton = document.getElementById("fileButton");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/logo.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.getDownloadURL().then(function (url) {
                    addCompanyLogo(url);
                    console.log(url);

                });

                storageRef.put(file);

            });

            var fileButton = document.getElementById("fileButtonBanner");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/banner.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.getDownloadURL().then(function (url) {
                    addCompanyBanner(url);
                    console.log(url);
                });

                storageRef.put(file);


            });


            var storage = firebase.storage();
            var storageRef2 = storage.ref();
            var tangRef = storageRef2.child('images/' + user.uid + "/logo.jpg");
            tangRef.getDownloadURL().then(function (url) {
                document.getElementById('usr-Logo').src = url;
            }).catch(function (error) {
                console.error(error);
            });


            var storage = firebase.storage();
            var storageRef2 = storage.ref();
            var tangRef = storageRef2.child('images/' + user.uid + "/banner.jpg");
            tangRef.getDownloadURL().then(function (url) {
                document.getElementById('usr-Banner').src = url;
            }).catch(function (error) {
                console.error(error);
            });
        }
        else {
            window.location.replace("sign-in.html");
        }
    });
});