const handleNavigate = () => {
  const nameValue = document.getElementById("user-name").value;
  const passWordValue = document.getElementById("password").value;

  if (nameValue && passWordValue) {
    window.location.href = "home.html";
  }
};
