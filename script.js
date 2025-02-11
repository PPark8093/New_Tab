window.onload = () => {
    document.querySelectorAll(".goto_button").forEach(button => {
        button.addEventListener("click", function() {
            onClick(this.dataset.site);
        });
    });
}

function onClick(site) {
    switch (site.toLowerCase()) {
        case "youtube":
            location.href = "https://www.youtube.com";
            break;
        case "instagram": {
            location.href = "https://www.instagram.com";
            break;
        }
        case "google": {
            location.href = "https://www.google.com";
            break;
        }
        case "github": {
            location.href = "https://github.com";
            break;
        }
        case "chatgpt": {
            location.href = "https://chatgpt.com";
            break;
        }
    }

    console.log(site)
}

function goto_fullscreen() {
    const body = document.getElementById("real_body");
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { // Firefox
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { // Chrome, Safari
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { // IE/Edge
        body.msRequestFullscreen();
    }
}