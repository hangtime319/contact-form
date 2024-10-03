// Select Elements
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-button');
const successMsg = document.querySelector('.success-msg');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    let isValid = true; // Flag to track validation status

    // Check name fields
    const firstName = document.getElementById('first-name-input');
    const lastName = document.getElementById('last-name-input');
    
    // Error name fields
    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');

    if(!firstName.value.trim()) {
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstNameError.style.display = 'none';
    }

    if(!lastName.value.trim()) {
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastNameError.style.display = 'none';
    }

    // Check email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim() || !emailRgx.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    //Check Query type selection
    const queryRadio = document.querySelectorAll('input[name="query"]');
    const queryError = document.getElementById('query-type-error');

    let isQuerySelected = false;
    for (const radio of queryRadio) {
        if(radio.checked) {
            isQuerySelected = true;
            break;
        }
    }

    if(!isQuerySelected) {
        queryError.style.display = 'block';
        isValid = false;
    } else {
        queryError.style.display = 'none'
    }

    // Check message content
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');

    if(!message.value.trim()) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Check terms selected
    const termsCheckbox = document.getElementById('terms');
    const termsError = document.getElementById('terms-error');

    if(!termsCheckbox.checked) {
        termsError.style.display = 'block';
        isValid = false;
    } else {
        termsError.style.display = 'none';
    }

    // Submit form if all fields are valid.
    if(isValid) {
        console.log('Form submitted successfully!');        
        successMsg.classList.remove('display-none'); // Show success message
        form.reset(); // Reset form after submission
    }
})