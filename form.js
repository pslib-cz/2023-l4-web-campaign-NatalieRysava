  const form = document.getElementById("form");
  const result = document.getElementById("result");
  const checkbox = document.getElementById("souhlas-s-gdpr");

  form.addEventListener("submit", function (e) {
    if (!checkbox.checked) {
      e.preventDefault();
      result.classList.remove("text--grey");
      result.classList.add("text--red");
    } else {
      const formData = new FormData(form);
      e.preventDefault();
      var object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text--gray");
            result.classList.add("text--green");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text--gray");
            result.classList.add("text--red");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 5000);
        });
    }
  });
