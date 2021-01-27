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
