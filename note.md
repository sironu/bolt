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

    <p id="timer"></p>

    <button id="logoutBtn">Logout</button>

    <script>
        const FIVE_MINUTES = 5 * 60 * 1000;

        // Check if user is logged in
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "login.html";
        }

        // Get login time
        const loginTime = Number(localStorage.getItem("loginTime"));

        // Calculate remaining time
        const elapsedTime = Date.now() - loginTime;
        const remainingTime = FIVE_MINUTES - elapsedTime;

        // If 5 minutes have already passed
        if (remainingTime <= 0) {
            logout();
        } else {

            // Automatically logout after remaining time
            setTimeout(logout, remainingTime);

            // Display countdown
            updateTimer(remainingTime);
        }

        function updateTimer(time) {
            const timer = document.getElementById("timer");

            const interval = setInterval(() => {
                const loginTime = Number(localStorage.getItem("loginTime"));
                const remaining = FIVE_MINUTES - (Date.now() - loginTime);

                if (remaining <= 0) {
                    clearInterval(interval);
                    logout();
                    return;
                }

                const minutes = Math.floor(remaining / 60000);
                const seconds = Math.floor((remaining % 60000) / 1000);

                timer.textContent =
                    `Automatic logout in ${minutes}:${seconds
                        .toString()
                        .padStart(2, "0")}`;
            }, 1000);
        }

        // Manual logout
        document.getElementById("logoutBtn").addEventListener("click", logout);

        function logout() {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("loginTime");

            window.location.href = "login.html";
        }
    </script>

</body>
</html>
```
