const form = document.getElementById("form");
const inputName = document.getElementById("input-name");
const errorMsg = document.getElementById("error-msg");

form.onsubmit = (e) => {
  e.preventDefault();
  errorMsg.style.display = "none";
  if(inputName.value === "" || inputName.value === undefined){
    errorMsg.style.display = "block";
  }
  else{
    localStorage.setItem("Name", inputName.value);
    window.open("/TP-UTN-2023/pages/home/home.html", "_self");
  }
};

