
// This file is intentionally blank
// Use this file to add JavaScript to your project

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")
const submitButton = document.getElementById("submitButton")


const goToTop = () => {
    debugger;
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};


backToTopButton.addEventListener("click", goToTop)

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }

})

const submitDetails = () => {

    var toemail = document.getElementById("email");
    var message = document.getElementById("message");
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");

    var body = "<html><body>" +
        + "<p>'" + "Dear AurusTek Team," + "'</p>" +
        +  "<br/>" +
        +   "<p>Hope you are fine.</p>" +
        +   "<p>Please find details and waiting for you reply further.</p>" +
        +   "<p>Query:'" + message.value + "'</p>" +
        +   "<p>Thanking you</p>" +
        +  "<p>Name:'" + name.value + "' </p>" +
        +  "<p>Phone:'" + phone.value + "'</p>" +
        +  "<p>Emai:'" + toemail.value + "'</p>" +
        +  "<br/>" +
        +  "<br/>" +
        +  "<p>Regards,</p>" +
        +  "<p>AurusTek.</p>" +
        +  "<p><img src='/assets/Aurustek.jpeg' alt='AurusTek'/></p>" +
        +   "</br>" +
        +  "</body></html>";

    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: body,
    };

    $.ajax({
        type: "POST",
        url: "email.php",
        data: data,
        success: function () {
            $('.success').fadeIn(1000);
            alert("We have received your details and appreciate you reaching out to us!");
        },
        error: function (error) {
            alert(error);
        }
    });

    //Email.send({
    //    Host: "smtp.gmail.com",
    //    Username: "info@aurustek.ai",
    //    Password: "Aurus@2028",
    //    To: toemail.value,
    //    From: "info@aurustek.ai",
    //    Subject: "Get in touch",
    //    Body: text,
    //}).then(
    //    message => alert("We have received your details and appreciate you reaching out to us!")
    //).catch(
    //    message => message
    //);
};


//submitButton.addEventListener("click", submitDetails)

$(document).ready(function () {
    $("#contactForm").submit(function (e) {
        var toemail = document.getElementById("email");
        var message = document.getElementById("message");
        var name = document.getElementById("name");
        var phone = document.getElementById("phone");
        if (toemail.value != "" && message.value != "" && name.value != "") {

            var body = "<html><body>" +
                + "<p>'" + "Dear AurusTek Team," + "'</p>" +
                +  "<br/>" +
                +   "<p>Hope you are fine.</p>" +
                +   "<p>Please find details and waiting for you reply further.</p>" +
                +   "<p>Query:'" + message.value + "'</p>" +
                +   "<p>Thanking you</p>" +
                +  "<p>Name:'" + name.value + "' </p>" +
                +  "<p>Phone:'" + phone.value + "'</p>" +
                +  "<p>Emai:'" + toemail.value + "'</p>" +
                +  "<br/>" +
                +  "<br/>" +
                +  "<p>Regards,</p>" +
                +  "<p>AurusTek.</p>" +
                +  "<p><img src='/assets/Aurustek.jpeg' alt='AurusTek'/></p>" +
                +   "</br>" +
                +  "</body></html>";

            var data = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: body,
            };

            $.ajax({
                type: "PUT",
                url: "email.php",
                data: data,
                success: function () {
                    $('.success').fadeIn(1000);
                    alert("We have received your details and appreciate you reaching out to us!");
                    resetForm();
                },
                error: function (error) {
                    resetForm();
                    alert("An error occurred while handling your request.");
                }
            });
        }
        else {
            alert("Please provide the below details to get in touch with us.");
        }
        e.preventDefault();
    });

});

function resetForm() {
    var toemail = document.getElementById("email");
    if (toemail) toemail.value = "";
    var message = document.getElementById("message");
    if (message) message.value = "";
    var name = document.getElementById("name");
    if (name) name.value = "";
    var phone = document.getElementById("phone");
    if (phone) phone.value = "";

}
