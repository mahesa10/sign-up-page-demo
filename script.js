const pwdField = document.querySelector('#pwd');
const confirmPwdField = document.querySelector('#confirm-pwd');
const confirmPwdError = document.querySelector('#confirm-pwd + span')

const checkPwd = () => {
  if (pwdField.value !== confirmPwdField.value) {
    confirmPwdError.classList.add('confirm-pwd-error');
    confirmPwdField.classList.add('confirm-pwd-mismatch');
  } else {
    if (confirmPwdError.classList.contains('confirm-pwd-error')) {
      confirmPwdError.classList.remove('confirm-pwd-error');
      confirmPwdField.classList.remove('confirm-pwd-mismatch');
    }
  }

};

confirmPwdField.addEventListener('keyup', () => { checkPwd() });