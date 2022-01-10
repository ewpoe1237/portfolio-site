document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(".main-content").style.visibility = "hidden";
        document.querySelector(".center-load").style.visibility = "visible";

        document.querySelector("body").style.overflow = "hidden";
    } else {
        //Post-page load

        //Fade out loader
        var loadingIcon = document.getElementById("loading-page");
        loadingIcon.classList.add("fade-out-loader");

        loadingIcon.addEventListener("transitionend", () => {
            document.querySelector(".center-load").style.display = "none";
        })

        //Load animations
        var animations = document.getElementById("main");
        animations.classList.remove("js-loading");

        //Set visibility and launch short fade-in animation
        document.querySelector(".main-content").style.visibility = "visible";

        var mainContent = document.getElementById("main");
        mainContent.style.animation = "fadeInPage 1.3s ease-in-out";

        document.querySelector("body").style.overflowY = "auto";
        document.querySelector("body").style.overflowX = "hidden";
    }
};

//form validation code from MDBootstrap docs
document.getElementById('status').innerHTML = "Sending...";
formData = {
    'name': $('input[name=name]').val(),
    'email': $('input[name=email]').val(),
    'subject': $('input[name=subject]').val(),
    'message': $('textarea[name=message]').val()
};


$.ajax({
    url: "mail.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
            $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown) {
        $('#status').text(jqXHR);
    }
});