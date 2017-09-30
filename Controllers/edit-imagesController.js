function readURLBanner(input, location) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(location)
                .attr('src', e.target.result)
                .width(375)
                .height(135);
                $(location + '-Slider')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
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

function addCompanyImages(link, imageNumber) {
    var companyLogo = {
        imageNumber: link
    };
    usersRef.update(companyLogo, function (err) {
        if (err) {
            console.log(err);
        } else {

        }
    });
}

function uploadBannerImages(name, image){
    console.log(name);
    console.log('usr-'+image);
    name.getDownloadURL().then(function (url) {
        document.getElementById('usr-'+image).src = url;
        document.getElementById('usr-'+image+'-Slider').src = url;
    }).catch(function (error) {
        console.error(error);
    });
}

var getJsonFromTable = function () {
    var rows = [];
    $('#permiison tbody tr').each(function (i, n) {
        var $row = $(n);
        rows.push({
            day: $row.find('td:eq(0)').text(),
            from: $row.find('td:eq(1) input').val(),
            to: $row.find('td:eq(2) input').val(),
            closed: $row.find('td:eq(3) input[type=checkbox]').prop('checked'),
        });
    });
    //return JSON.stringify(rows);
    return rows;
};

function EnableTextBox(thing){

    console.log(thing);
};
