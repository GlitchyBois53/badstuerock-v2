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

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      let count = 0;

      if (!params.from_name == "") {
        count += 1;
        errorName.classList.remove("error-active");
        console.log(count + " Name success");
      } else {
        // Error
        errorName.classList.add("error-active");
        errorName.innerHTML = "type something in name";
        console.log("type something in name");
      }
      // WE COULD BREAK UP THE IF-STATEMENT TO BE ABLE TO DELIVER ERROR MESSAGES FOR EVERY POSSIBLE ERROR

      if (
        params.from_email.includes("@") &&
        params.from_email.includes(".") &&
        !params.from_email.includes(" ")
      ) {
        count += 1;
        errorEmail.classList.remove("error-active");
        console.log(count + " Email success");
      } else {
        // Error
        errorEmail.classList.add("error-active");
        errorEmail.innerHTML = "Email must include @ '.' and no spaces";
        console.log("enter valid email");
      }
      // if (params.from_email.includes("@")) {
      //   count += 1
      //   errorEmail.classList.remove("error-active")
      //   console.log(count + " @ success")
      // } else {
      //   // Error
      //   errorEmail.classList.add("error-active")
      //   errorEmail.innerHTML += "@"
      //   console.log("Must contain @")
      // }
      // // .
      // if (params.from_email.includes(".")) {
      //   count += 1
      //   errorEmail.classList.remove("error-active")
      //   console.log(count + " . success")
      // } else {
      //   // Error
      //   errorEmail.classList.add("error-active")
      //   errorEmail.innerHTML += "."
      //   console.log("Must contain .")
      // }
      // // ' '
      // if (!params.from_email.includes(" ")) {
      //   count += 1
      //   errorEmail.classList.remove("error-active")
      //   console.log(count + " ' ' success")
      // } else {
      //   // Error
      //   errorEmail.classList.add("error-active")
      //   errorEmail.innerHTML += "' '"
      //   console.log("Mustn't contain ' '")
      // }

      if (!params.message == "") {
        count += 1;
        errorMessage.classList.remove("error-active");
        console.log(count + " Message success");
      } else {
        // Error
        errorMessage.classList.add("error-active");
        errorMessage.innerHTML = "Message can't be empty";
        console.log("Message can't be empty");
      }

      if (count === 3) {
        console.log(count);
        success();
      }
    })
    .catch((err) => console.log(err));
}

function closesuccess() {
  successWindow.classList.add("success-not-active");
  successWindow.classList.remove("success-active");
}

function success() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  successWindow.classList.remove("success-not-active");
  successWindow.classList.add("success-active");
}

var wordCount = document.getElementById("word-count")

const textarea = document.getElementById("message");

textarea.addEventListener("input", ({ currentTarget: target }) => {
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;
  
  wordCount.classList.remove("word-count-max")
  console.log(`max: ${maxLength}, current: ${currentLength}`)

  if (currentLength == maxLength) {
    wordCount.classList.add("word-count-max")
  }

  wordCount.innerHTML = `${currentLength}/${parseInt(maxLength)}`;
});