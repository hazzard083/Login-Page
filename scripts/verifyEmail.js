function validarEmail() {
  var email = document.querySelector('#email')
  var error = document.querySelector('#error')

  if (!email.checkValidity()) {
    error.innerHTML = "Digite um e-mail válido";
  }
}

function redefinirMsg() {
  var error = document.querySelector('#error')

  if ((error.innerHTML == "Digite um e-mail válido")) {
    error.innerHTML = ""
  }
}
