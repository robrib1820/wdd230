const formBtn = document.querySelector(".submitBtn")
formBtn.addEventListener("click", getFormSubmitionDateAndTime
)

function getFormSubmitionDateAndTime() {
    const date = new Date()
    const submitionDateAndTime = document.querySelector("#currentDateAndTime")
    submitionDateAndTime.value = date
}

