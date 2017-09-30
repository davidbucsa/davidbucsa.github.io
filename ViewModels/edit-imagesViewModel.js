$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            var fileButton = document.getElementById("profileUploadBtn");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/logo.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.put(file);
                addCompanyLogo(imgUrl);
            });

            var fileButton = document.getElementById("image1Btn");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/image1.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.put(file);
                addCompanyLogo(imgUrl);

            });
            var fileButton = document.getElementById("image2Btn");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/image2.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.put(file);
                addCompanyLogo(imgUrl);

            });
            var fileButton = document.getElementById("image3Btn");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/image3.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.put(file);
                addCompanyLogo(imgUrl);

            });
            var fileButton = document.getElementById("image4Btn");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/image4.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.put(file);
                addCompanyLogo(imgUrl);

            });
            var fileButton = document.getElementById("image5Btn");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/image5.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.put(file);
                addCompanyLogo(imgUrl);

            });


            var deleteButton1 = document.getElementById("deleteImage1");
            deleteButton1.addEventListener('click', function (e) {
                var storageRef = firebase.storage();
                var storageRef2 = storage.ref();
                var desertRef = storageRef2.child('images/' + user.uid + '/' + deleteButton1.name);
                alert(desertRef);
                desertRef.delete().then(function () {
                    document.getElementById('usr-Image1').src = "";
                    document.getElementById('usr-Image1-Slider').src = "";
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                });
            });

            var deleteButton2 = document.getElementById("deleteImage2");
            deleteButton2.addEventListener('click', function (e) {
                var storageRef = firebase.storage();
                var storageRef2 = storage.ref();
                var desertRef = storageRef2.child('images/' + user.uid + '/' + deleteButton2.name);
                alert(desertRef);
                desertRef.delete().then(function () {
                    document.getElementById('usr-Image2').src = "";
                    document.getElementById('usr-Image2-Slider').src = "";
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                });
            });

            var deleteButton3 = document.getElementById("deleteImage3");
            deleteButton3.addEventListener('click', function (e) {
                var storageRef = firebase.storage();
                var storageRef2 = storage.ref();
                var desertRef = storageRef2.child('images/' + user.uid + '/' + deleteButton3.name);
                alert(desertRef);
                desertRef.delete().then(function () {
                    document.getElementById('usr-Image3').src = "";
                    document.getElementById('usr-Image3-Slider').src = "";
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                });
            });

            var deleteButton4 = document.getElementById("deleteImage4");
            deleteButton4.addEventListener('click', function (e) {
                var storageRef = firebase.storage();
                var storageRef2 = storage.ref();
                var desertRef = storageRef2.child('images/' + user.uid + '/' + deleteButton4.name);
                alert(desertRef);
                desertRef.delete().then(function () {
                    document.getElementById('usr-Image4').src = "";
                    document.getElementById('usr-Image4-Slider').src = "";
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                });
            });
            var deleteButton5 = document.getElementById("deleteImage5");
            deleteButton5.addEventListener('click', function (e) {
                var storageRef = firebase.storage();
                var storageRef2 = storage.ref();
                var desertRef = storageRef2.child('images/' + user.uid + '/' + deleteButton5.name);
                alert(desertRef);
                desertRef.delete().then(function () {
                    document.getElementById('usr-Image5').src = "";
                    document.getElementById('usr-Image5-Slider').src = "";
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                });
            });



            var storage = firebase.storage();
            var storageRef2 = storage.ref();
            var tangRef = storageRef2.child('images/' + user.uid + "/logo.jpg");
            tangRef.getDownloadURL().then(function (url) {
                document.getElementById('usr-Logo-Main').src = url;
            }).catch(function (error) {
                console.error(error);
            });

            var tangRef1 = storageRef2.child('images/' + user.uid + "/image1.jpg");
            uploadBannerImages(tangRef1, 'Image1');

            var tangRef2 = storageRef2.child('images/' + user.uid + "/image2.jpg");
            uploadBannerImages(tangRef2, 'Image2');

            var tangRef3 = storageRef2.child('images/' + user.uid + "/image3.jpg");
            uploadBannerImages(tangRef3, 'Image3');

            var tangRef4 = storageRef2.child('images/' + user.uid + "/image4.jpg");
            uploadBannerImages(tangRef4, 'Image4');

            var tangRef5 = storageRef2.child('images/' + user.uid + "/image5.jpg");
            uploadBannerImages(tangRef5, 'Image5');



            usersRef = new Firebase(firebaseRoot + '/Partners/' + user.uid);
            usersRef.once('value', function (snap) {
                var companyName = document.getElementById("companyName");
                var companyAddress = document.getElementById("companyAddress");
                var companyNameDoc = document.getElementById("usr-Name");
                var companyAddressDoc = document.getElementById("usr-Address");
                var companyWebsiteDoc = document.getElementById("usr-WebSite");
                companyWebsiteDoc.value = snap.val().WebSite;
                companyAddressDoc.value = snap.val().Address;    
                companyNameDoc.value = snap.val().Name;
                companyName.innerHTML = snap.val().Name;
                companyAddress.innerHTML = snap.val().Address;
            });

            usersRef = new Firebase(firebaseRoot + '/Partners/' + user.uid + '/Hours/');
            var hoursOfOp = document.getElementById("accountSave");
            hoursOfOp.addEventListener('click', function (e) {

                var companyTime = getJsonFromTable();
                usersRef.set(companyTime, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                    }
                });
            });

            usersRef.once('value',function(snap){
                var hours = snap.val();
                $('#permiison tbody tr').each(function (i, n) {
                    var $row = $(n);
                        $row.find('td:eq(0)').val();
                        $row.find('td:eq(1) input').val(hours[i].from);
                        $row.find('td:eq(2) input').val(hours[i].to);
                        $row.find('td:eq(3) input[type=checkbox]').prop('checked',hours[i].closed)
                });

            });


            var fileButton = document.getElementById("fileButton");
            fileButton.addEventListener('change', function (e) {
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref("images/" + user.uid + "/logo.jpg");
                var imgUrl = storageRef.location.bucket + "/" + storageRef.location.path

                storageRef.getDownloadURL().then(function (url) {
                    addCompanyLogo(url);

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



    $('#imageShowButton').click(function () {
        document.getElementById('imageContainer').style.display = "block";
        document.getElementById('accountContainer').style.display = "none";
    });


    $('#accountShowButton').click(function () {
        document.getElementById('accountContainer').style.display = "block";
        document.getElementById('imageContainer').style.display = "none";
    });

    $('#timepicker').timepicki();

});

$('.input-a').each(function(){
    $(this).clockpicker({
        autoclose: true
    });
});

