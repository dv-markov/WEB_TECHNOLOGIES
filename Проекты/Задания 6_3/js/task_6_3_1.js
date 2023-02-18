btn.addEventListener("click", function() {
    let nameTxt = userName.value
    let surnameTxt = userSurname.value
    if (nameTxt && surnameTxt) {
        answer.textContent = `Здравствуйте, ${nameTxt} ${surnameTxt}!`;
    }
    else {
        answer.textContent = "";
    }
});

