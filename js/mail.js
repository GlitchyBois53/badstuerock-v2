

var successWindow = document.getElementById("success-window");

function sendMail() {
  var params = {
    to_name: "BadstueRock",
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_nv574by";
  const templateID = "template_diujrac";

  var errorName = document.getElementById("error-name");
  var errorEmail = document.getElementById("error-email");
  var errorMessage = document.getElementById("error-textarea");

  // A count that keeps track of validated input fields
  let count = 0;

  // Name validation
  if (!params.from_name == "") {
    count += 1;
    errorName.classList.remove("error-active");
  } else {
    // Error
    errorName.classList.add("error-active");
    errorName.innerHTML = "Skriv navn";
  }
  
  // WE COULD BREAK UP THE IF-STATEMENT TO BE ABLE TO DELIVER ERROR MESSAGES FOR EVERY POSSIBLE ERROR

  // Email validation
  if (
    params.from_email.includes("@") &&
    params.from_email.includes(".") &&
    !params.from_email.includes(" ")
  ) {
    count += 1;
    errorEmail.classList.remove("error-active");
  } else {
    // Error
    errorEmail.classList.add("error-active");
    errorEmail.innerHTML = "Skal inkluderer @, '.' & intet mellemrum";
  }

  // Message validation
  if (!params.message == "") {
    count += 1;
    errorMessage.classList.remove("error-active");
  } else {
    // Error
    errorMessage.classList.add("error-active");
    errorMessage.innerHTML = "Besked kan ikke være tom";
  }

  // Sends email and runs succes screen if all input fields is succesfully validated
  if (count === 3) {
    success();

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Reset efter sendt form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch((err) => console.log(err));
  }
}

// Event accessible by a DOM element on the succes screen
function closesuccess() {
  successWindow.classList.add("success-not-active");
  successWindow.classList.remove("success-active");
}

// Function that runs on line 61.
function success() {
  // Pop-up der fortæller brugeren at mailen er sendt
  successWindow.classList.remove("success-not-active");
  successWindow.classList.add("success-active");
}

var wordCount = document.getElementById("word-count");

const textarea = document.getElementById("message");

textarea.addEventListener("input", ({ currentTarget: target }) => {
  const maxLength = target.getAttribute("maxlength");
  let currentLength = target.value.length;

  wordCount.classList.remove("word-count-max");

  if (currentLength == maxLength) {
    wordCount.classList.add("word-count-max");
  }

  wordCount.innerHTML = `${currentLength}/${maxLength}`;
});
