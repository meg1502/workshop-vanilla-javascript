function ready(callback) {
    if (document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

ready(function () {
    document.querySelector("#events-box").style.backgroundColor = "peachPuff";
    document.querySelectorAll(".advertisement").forEach(adBox => {
        adBox.style.display = "none";
    });

    document.querySelector("#profile").querySelectorAll(".fa").forEach(icon => {
        icon.classList.add("w3-text-theme");
    });

    document.addEventListener("click", function (event) {
        if (event.target.matches(".close-button")) {
            event.target.parentElement.style.display = "none";
        }
    });

    fetch("https://oxomi.com/service/json/references/random?includedTags=%23top&limit=1").then(response => response.json()).then(json => {
        const oxomiBox = document.querySelector("#oxomi");
        const reference = json.providers[0];
        oxomiBox.textContent = reference.name;
        let img = document.createElement("img");
        img.src = reference.logo;
        oxomiBox.prepend(document.createElement("br"))
        oxomiBox.prepend(img);
    });


});
