$(function () {
  $(".reservation").datepicker();
});

const noteOnline = document.querySelector(".note-online");
const noteVenue = document.querySelector(".note-venue");
const radioList = document.querySelectorAll("input[type='radio']");
radioList.forEach((radio) => {
  radio.addEventListener("change", () => {
    const checkRadio = document
      .querySelector("input[name='your-lesson']:checked")
      .getAttribute("value");
    if (checkRadio === "online") {
      noteOnline.style.display = "block";
      noteVenue.style.display = "none";
    } else if (checkRadio === "venue") {
      noteOnline.style.display = "none";
      noteVenue.style.display = "block";
    }
  });
});

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
  const name = document.querySelector("input[name='your-name']");

  const tel1 = document.querySelector("input[name='your-tel1']");
  const tel2 = document.querySelector("input[name='your-tel2']");
  const tel3 = document.querySelector("input[name='your-tel3']");

  const reservation = document.querySelector("input[name='your-reservation']");
  if (name.value === "") {
    document.querySelector(".name-error").innerHTML = "名前は必須項目です";
  }

  if (tel1.value === "" || tel2.value === "" || tel3.value === "") {
    document.querySelector(".tel-error").innerHTML = "電話番号は必須項目です";
  }

  if (reservation.value === "") {
    document.querySelector(".reservation-error").innerHTML =
      "予約日は必須項目です";
  }
});
