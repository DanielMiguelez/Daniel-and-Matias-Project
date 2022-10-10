//Datos en localStorage
//variables
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const contraseña1 = document.getElementById("password");
const contraseña2 = document.getElementById("password2");
const boton = document.getElementById("submit");
const msg = document.querySelector(".msg");
const msg1 = document.querySelector(".msg1");
const msg2 = document.querySelector(".msg2");

function onSubmit(e) {
  e.preventDefault();

  // si son usuarios, lo nombraria usuario
  // const person = {
  //   name: firstName.value,
  //   email: email.value,
  //   contra1: contraseña1.value,
  //   contra2: contraseña2.value,
  // };

  const user = {
    name: firstName.value,
    email: email.value,
    contra1: contraseña1.value,
    contra2: contraseña2.value,
  };

  //Validacion RELLENA CAMPOS

  if (
    firstName.value === "" ||
    email.value === "" ||
    contraseña1.value === "" ||
    contraseña2.value === ""
  ) {
    msg.innerHTML = "<p class= 'alert alert-primary' role='alert'> Por favor, rellena todos los campos</p> ";
    
  } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) == false) {

    msg.innerHTML ="<p class= 'alert alert-primary' role='alert'> Por favor mete un email correcto, tiiiio </p> ";
  } 
  else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/.test(
      contraseña1.value && contraseña2.value
     ) === false
  ) {
    msg1.innerHTML = 
      "<p class=  'alert alert-warning' role='alert'>No cumple los requisitos la contraseña, tiiio </p>";
    
  } else if (contraseña1.value !== contraseña2.value) {
    msg2.innerHTML = "<p class='alert alert-warning' role='alert'> Las contraseñas deben ser iguales.</p>";
  } else {
    msg.innerHTML = 
      "<p class='alert alert-success' role='alert'>Muy bien todo correcto, a dormir!</p>";
  }


//guardamos muchos datos en el local storage
  let users = JSON.parse(localStorage.getItem("users"));
  if (users == null) {
    users = [];
  }

  // de esta forma agrego uno al arreglo.
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  
  //Borrar cuando pasen 3 segundos

  firstName.value= ""
  email.value =""
  contraseña1.value =""
  contraseña2.value =""
  setTimeout(function () {
    msg.innerHTML = "";
    msg1.innerHTML = "";
    msg2.innerHTML = "";

  }, 2000);
}
submit.addEventListener("click", onSubmit);