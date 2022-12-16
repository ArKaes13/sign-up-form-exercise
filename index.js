alert('Create an account for a hidden message.')

// Creates copyright year in the footer
var copyRightElement = document.querySelector('.copyright');
var currentYear = new Date().getFullYear();

copyRightElement.innerHTML = `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' style='text-decoration:none; color:white;'><i class="fa-brands fa-github"></a></i>`

//Handles the transitions after clicking submit button
const button = document.querySelector('button');
const img = document.querySelector('.image-container');
const logoContainer = document.querySelector('.logo-container');
const formContainer = document.querySelector('.form-container');

button.addEventListener('click', () => {
    logoContainer.setAttribute('style', 'visibility: hidden');
    img.classList.add('active');
    img.setAttribute('style', "background-image: url('./images/1984.jpg')");
    formContainer.innerHTML = '<h1 class="active" style="margin: 25rem 0 0 0;">Thank you for your compliance. Remain where you are, the party will be in contact.</h1>';
})