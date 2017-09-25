function createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function contactHtmlFromObject(contact, key) {
    var html = '';
    html += '<tbody>';
    html += '<tr id=td' + key + '>';
    html += '<th>' + contact.Reward + '</th>';
    html += '<th>' + contact.RewardDescription + '</th>';
    html += '<th>' + contact.RewardTier + '</th>';
    html += '<th>' + contact.LPValue + '</th>';
    html += '<th><button onclick="editStuff(\'' + key + '\')" type="submit" class="glyphicon glyphicon-edit"></button></th>';
    html += '<th><button onclick="deleteItem(\'' + key + '\')" type="delete" class="glyphicon glyphicon-remove"></button></th>';
    html += '<tr>';
    html += '</tbody>';
    return html;
}

function contactHtmlFromObjectDescription(contact, key) {
    var html = '';
    html += '<tbody>';
    html += '<tr id=td' + key + '>';
    html += '<th>' + contact.Keyword + '</th>';
    html += '<th>' + contact.Definition + '</th>';
    html += '<th><button onclick="editStuffDescription(\'' + key + '\')" type="submit" class="glyphicon glyphicon-edit"></button></th>';
    html += '<th><button onclick="deleteItemDescription(\'' + key + '\')" type="delete" class="glyphicon glyphicon-remove"></button></th>';
    html += '<tr>';
    html += '</tbody>';
    return html;
}


function deleteItem(key) {
    usersRefRewards.child(key).remove();
    updateAfterDelete(key);
}

function deleteItemDescription(key) {
    usersRefDescription.child(key).remove();
    updateAfterDelete(key);
}

function updateAfterDelete(key) {
    var list = document.getElementById("td" + key);
    list.remove();
}

function deleteList() {
    document.querySelector('#userHtml').innerHTML = "";
    usersRefRewards.on("child_added", function (snap) {
        document.querySelector('#userHtml').innerHTML += (contactHtmlFromObject(snap.val(), snap.key()));
    });
}

function deleteListDescription() {
    document.querySelector('#userHtmlDetail').innerHTML = "";
    usersRefDescription.on("child_added", function (snap) {
        document.querySelector('#userHtmlDetail').innerHTML += (contactHtmlFromObjectDescription(snap.val(), snap.key()));
    });
}

function addingStuff() {
    var testUpdate = {
        Reward: document.getElementById("usr-Reward").value,
        RewardDescription: document.getElementById("usr-RewardDescription").value,
        RewardTier: document.getElementById("usr-RewardTier").value,
        LPValue: document.getElementById("usr-LPValue").value
    };

    usersRefRewards.push(testUpdate, function (err) {
        if (err) {
            console.log(err);
        } else {

        }
    });

    $('#myModal').modal('hide');
    document.getElementById("usr-RewardDescription").value = "";
    document.getElementById("usr-Reward").value = "";
    document.getElementById("usr-RewardTier").value = "";
    document.getElementById("usr-LPValue").value = "";

}

function addingStuffDescription() {
    var testUpdate = {
        Keyword: document.getElementById("usr-Keyword").value,
        Definition: document.getElementById("usr-Definition").value,
    };

    usersRefDescription.push(testUpdate, function (err) {
        if (err) {
            console.log(err);
        } else {

        }
    });

    $('#myModal').modal('hide');
    //document.getElementById("usr-RewardNumber").value = "";
    document.getElementById("usr-Keyword").value = "";
    document.getElementById("usr-Definition").value = "";
}

function editStuff(key) {
    $("#myModalEdit").modal()
    user = usersRefRewards.child(key);
    user.once('value', function (snap) {
        document.getElementById("usr-RewardDescription-Edit").value = snap.val().RewardDescription;
        document.getElementById("usr-Reward-Edit").value = snap.val().Reward;
        document.getElementById("usr-RewardTier-Edit").value = snap.val().RewardTier;
        document.getElementById("usr-LPValue-Edit").value = snap.val().LPValue;
    });

    document.getElementById('saveEditBtn').onclick = function () {
        var reward = document.getElementById("usr-Reward-Edit").value;
        var rewardDescription = document.getElementById("usr-RewardDescription-Edit").value;
        var rewardTier = document.getElementById("usr-RewardTier-Edit").value;
        var lPValue = document.getElementById("usr-LPValue-Edit").value;

        user.update({
            Reward: reward,
            RewardDescription: rewardDescription,
            RewardTier: rewardTier,
            LPValue: lPValue
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                deleteList();
            }
        });
        $('#myModalEdit').modal('hide');
    };
}

function editStuffDescription(key) {
    $("#descriptionModal-Edit").modal()
    user = usersRefDescription.child(key);
    user.once('value', function (snap) {
        document.getElementById("usr-Keyword-Edit").value = snap.val().Keyword;
        document.getElementById("usr-Definition-Edit").value = snap.val().Definition;
    });

    document.getElementById('editStuffDescription').onclick = function () {
        var keyword = document.getElementById("usr-Keyword-Edit").value;
        var definition = document.getElementById("usr-Definition-Edit").value;

        user.update({
            Keyword: keyword,
            Definition: definition
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                deleteListDescription();
            }
        });
        $('#descriptionModal-Edit').modal('hide');
    };
}

