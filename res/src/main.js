/**
 * Created by jack on 1/26/22.
 */

window.onload = function() {
    var id_name = $("#id-segment-name");
    var id_at = $("#id-segment-at");
    var id_domain = $("#id-segment-domain");
    var id_tld = $("#id-segment-tld");

    var twitter = [id_at, id_domain];
    var email = [id_name, id_at, id_domain, id_tld];
    var site = [id_domain, id_tld];

    var social_link_twitter = $("#social-twitter");

    social_link_twitter.hover(function () {
        twitter.map(function (elem) {
            elem.css('color', '#1DA1F2')
        });
    }, function () {
        twitter.map(function (elem) {
            elem.css('color', 'black')
        });
    });

    console.log(social_link_twitter);
};

function changeColor(elem) {
    elem.css('color', 'blue')
};



