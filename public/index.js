const faildIcons = document.querySelectorAll("input + svg");
const faildMsgs = document.querySelectorAll("svg + span");
function handleForm(e) {
    e.preventDefault();

    let firstName = e.target["fname"].value;
    let lastName = e.target["lname"].value;
    let email = e.target["email"];
    let password = e.target["password"].value;

    let validEmail = email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (firstName === "") {
        faildIcons[0].classList.remove("hidden");
        faildMsgs[0].classList.remove("hidden");
    } else {
        faildIcons[0].classList.add("hidden");
        faildMsgs[0].classList.add("hidden");
    }

    if (lastName === "") {
        faildIcons[1].classList.remove("hidden");
        faildMsgs[1].classList.remove("hidden");
    } else {
        faildIcons[1].classList.add("hidden");
        faildMsgs[1].classList.add("hidden");
    }

    if (email.value !== "" && validEmail) {
        faildIcons[2].classList.add("hidden");
        faildMsgs[2].classList.add("hidden");
        email.style.color = "hsl(249, 10%, 26%)";
    } else {
        faildIcons[2].classList.remove("hidden");
        faildMsgs[2].classList.remove("hidden");
        email.style.color = "hsl(0, 100%, 74%)";
    }

    if (password === "") {
        faildIcons[3].classList.remove("hidden");
        faildMsgs[3].classList.remove("hidden");
    } else {
        faildIcons[3].classList.add("hidden");
        faildMsgs[3].classList.add("hidden");
    }

}
