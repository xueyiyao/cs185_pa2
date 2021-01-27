// function from https://www.w3resource.com/javascript/form/email-validation.php
function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

function emailSubmit() {
  var form = document.getElementById("email-form");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);

  const email = document.getElementById("email-input").value;
  if (ValidateEmail(email)) {
    document.getElementById("email-success").style.display = "block";
    document.getElementById("email-failure").style.display = "none";
  } else {
    document.getElementById("email-failure").style.display = "block";
    document.getElementById("email-success").style.display = "none";
  }
}

function popupOn(src) {
  document.getElementById("popup-overlay").style.display = "block";
  console.log(src);
  document.getElementById("popup-img").src = src;
}

function popupOff() {
  document.getElementById("popup-overlay").style.display = "none";
  document.getElementById("popup-overlay-video").style.display = "none";
  document.getElementById("popup-img").src = "";
  document.getElementById("popup-video").src = "";
}

function popupVideo(id) {
  document.getElementById("popup-overlay-video").style.display = "block";
  let src;
  switch (id) {
    case "video-overlay-1":
      src = "https://www.youtube.com/embed/S77A_7w7LYk";
      break;
    case "video-overlay-2":
      src = "https://www.youtube.com/embed/KMc3vL_MIeo";
      break;
    case "video-overlay-3":
      src = "https://www.youtube.com/embed/8qRZcXIODNU";
      break;
    case "video-overlay-4":
      src = "https://www.youtube.com/embed/-QlxCQThAI8";
      break;
    case "video-overlay-5":
      src = "https://www.youtube.com/embed/H1KP4ztKK0A";
      break;
  }
  document.getElementById("popup-video").src = src;
}
