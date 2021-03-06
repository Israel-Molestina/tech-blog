//function to handle the login form
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#user-password").value.trim();
  
    if (username && password) {
      // Send the e-mail and password to the server
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to log in");
      }
    }
  };
  
  //function to handle go to login page
  const goToSignup = async (event) => {
    event.preventDefault();
    document.location.replace("/signup");
  };
  
  //add eventlisteners to submit buttons
  document.querySelector("#signupInstead").addEventListener("click", goToSignup);
  
  document.querySelector("#login").addEventListener("click", loginFormHandler);
  