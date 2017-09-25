$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            user.emailVerified = true;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            usersRef = new Firebase(firebaseRoot + '/Partners/' + user.uid);

            usersRefRewards = new Firebase(firebaseRoot + '/Partners/' + user.uid + '/Rewards');
            usersRefDescription = new Firebase(firebaseRoot + '/Partners/' + user.uid + '/Description');

            usersRefRewards.on("child_added", function (snap) {
                document.querySelector('#userHtml').innerHTML += (contactHtmlFromObject(snap.val(), snap.key()));
            });

            usersRefDescription.on("child_added", function (snap) {
                document.querySelector('#userHtmlDetail').innerHTML += (contactHtmlFromObjectDescription(snap.val(), snap.key()));
            });

            usersRef.once('value', function (snap) {
                var companyName = document.getElementById("companyName");   
                var companyAddress = document.getElementById("companyAddress");
                companyName.innerHTML = snap.val().Name;
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

        } else {
            window.location.replace("sign-in.html");
        }
    });

    $(document).on('change', '#usr-RewardTier', changetextbox)
    $(document).on('change', '#usr-RewardTier-Edit', changetextboxEdit)

    function changetextbox() {
        if (document.getElementById("usr-RewardTier").value === 'Bronze') {
            document.getElementById("usr-LPValue").value = '420';
        } else if (document.getElementById("usr-RewardTier").value === 'Silver') {
            document.getElementById("usr-LPValue").value = '600';
        } else if (document.getElementById("usr-RewardTier").value === 'Gold') {
            document.getElementById("usr-LPValue").value = '900';
        } else if (document.getElementById("usr-RewardTier").value === 'Platinum') {
            document.getElementById("usr-LPValue").value = '1320';
        }
    }

    function changetextboxEdit() {
        if (document.getElementById("usr-RewardTier-Edit").value === 'Bronze') {
            document.getElementById("usr-LPValue-Edit").value = '420';
        } else if (document.getElementById("usr-RewardTier-Edit").value === 'Silver') {
            document.getElementById("usr-LPValue-Edit").value = '600';
        } else if (document.getElementById("usr-RewardTier-Edit").value === 'Gold') {
            document.getElementById("usr-LPValue-Edit").value = '900';
        } else if (document.getElementById("usr-RewardTier-Edit").value === 'Platinum') {
            document.getElementById("usr-LPValue-Edit").value = '1320';
        }
    }

});






