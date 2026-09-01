const loginForm = document.getElementById("botton");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      
      let password = document.getElementById("tokenInput");
      let tekenErr = document.getElementById("tokenErr")

    

      // Example authentication
      if (password.value === "1234") {

        // Session duration: 30 minutes
        const sessionDuration = 1 * 60 * 1000;

        const expiresAt = Date.now() + sessionDuration;

        // Save login information

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("sessionExpiry", expiresAt);

        // Redirect to dashboard
        window.location.href = "./index.html";

      } else {
        tekenErr.textContent="Invalid Token"
      }
    });