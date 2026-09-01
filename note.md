```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>

<body>

    <h1>Welcome to Dashboard</h1>

    <p id="countdown"></p>

    <button onclick="logout()">Logout</button>

    <script>

        // 30 days in milliseconds
        const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000;

        // Check login status
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "login.html";
        }

        // Get login time
        const loginTime = Number(localStorage.getItem("loginTime"));

        function checkSession() {

            const currentTime = Date.now();

            // Calculate how long the user has been logged in
            const elapsedTime = currentTime - loginTime;

            // Calculate remaining time
            const remainingTime = SESSION_DURATION - elapsedTime;

            // 30 days have passed
            if (remainingTime <= 0) {
                logout();
                return;
            }

            // Convert milliseconds to days/hours/minutes/seconds
            const days = Math.floor(
                remainingTime / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) /
                (1000 * 60)
            );

            const seconds = Math.floor(
                (remainingTime % (1000 * 60)) /
                1000
            );

            document.getElementById("countdown").textContent =


            console.log(`Session expires in: ${days} days, ${hours} hours, ` +
                `${minutes} minutes, ${seconds} seconds`;)
                
        }

        // Check every second
        setInterval(checkSession, 1000);

        // Check immediately
        checkSession();

        function logout() {

            // Remove login information
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("loginTime");

            // Redirect to login
            window.location.href = "login.html";
        }

    </script>

</body>
</html>
```
