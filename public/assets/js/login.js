$(document).ready(function() {
    var emailInput = $("#username");
    var passwordInput = $("#password");
  
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var user = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!user.email || !user.password) {
        return;
      }
  
      login(user.email, user.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function login(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/");
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });