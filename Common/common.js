var firebaseRoot = "https://lifepoints-90176.firebaseio.com/",
    usersRef = new Firebase(firebaseRoot + "/users"),
    usersRefDescription = new Firebase(firebaseRoot + "/users"),
    usersRefRewards = new Firebase(firebaseRoot + "/users");


function addCompanyInfo() {
    $("#accountSettingsModal").modal()

    usersRef.once('value', function (snap) {
        document.getElementById("usr-Name").value = snap.val().Name;
        document.getElementById("usr-Address").value = snap.val().Address;
        document.getElementById("usr-WebSite").value = snap.val().WebSite;

    });

    document.getElementById('accountSettingsSave').onclick = function () {

        var testUpdate = {
            Name: document.getElementById("usr-Name").value,
            Address: document.getElementById("usr-Address").value,
            WebSite: document.getElementById("usr-WebSite").value
        };

        usersRef.update(testUpdate, function (err) {
            if (err) {
                console.log(err);
            } else {

            }
        });

        $('#accountSettingsModal').modal('hide');
    }
}

function addCompanyLogo(link) {
    var companyLogo = {
        Logo: link
    };
    usersRef.update(companyLogo, function (err) {
        if (err) {
            console.log(err);
        } else {

        }
    });
}

function addCompanyBanner(link) {
    var companyBanner = {
        Banner: link
    };
    usersRef.update(companyBanner, function (err) {
        if (err) {
            console.log(err);
        } else {

        }
    });
}


function readURL(input, location) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(location)
                .attr('src', e.target.result)
                .width(125)
                .height(125);
        };

        reader.readAsDataURL(input.files[0]);
    }
}