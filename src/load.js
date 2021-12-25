document.onreadystatechange = function() {
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
        mainContent.style.animation = "fadeInPage 1s ease-in-out";

        document.querySelector("body").style.overflowY = "auto";
        document.querySelector("body").style.overflowX = "hidden";
    }
};