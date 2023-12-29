function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validare e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Introduceți o adresă de e-mail validă.';
        return false;
    } else {
        emailError.textContent = '';
    }

    // Validare parolă
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    if (!password.match(passwordPattern)) {
        passwordError.textContent = 'Parola trebuie să conțină cel puțin 8 caractere, cel puțin o literă mică, o literă mare și un număr.';
        return false;
    } else {
        passwordError.textContent = '';
    }

    // Confirmare parolă
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Parolele nu coincid.';
        return false;
    } else {
        confirmPasswordError.textContent = '';
    }

    return true; // Returnează true dacă toate validările sunt trecute cu succes
}
