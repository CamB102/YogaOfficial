const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const address = document.getElementById('address');
const suburb = document.getElementById('suburb');
const state = document.getElementById('state');
const postcode = document.getElementById('postcode');



form.addEventListener('submit', event => {
    
    event.preventDefault(); 
    validateInputs();
    alert('Thank you for submitting the form! Please check your email, we sent you a discount code! Happy Yoga :)')
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    inputControl.classList.add('success');
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const firstNameValue = firstname.value.trim();
    const lastNameValue = lastname.value.trim();
    const addressValue = address.value.trim();
    const suburbValue = suburb.value.trim();
    const stateValue = state.value.trim();
    const postcodeValue = postcode.value.trim();

    if(usernameValue === ''){
        console.log(usernameValue);
        setError(username, 'Username is required');
    } else{
        console.log("Success")
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    } else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character')
    } else{
        setSuccess(password);
    }

    if(firstNameValue === ''){
        setError(firstname, 'First Name is required');
    } else{
        setSuccess(firstname);
    }

    if(lastNameValue === ''){
        setError(lastname, 'Last Name is required');
    } else{
        setSuccess(lastname);
    }

    if(addressValue === ''){
        setError(address, 'Address is required');
    } else{
        setSuccess(address);
    }

    if(suburbValue === ''){
        setError(suburb, 'Suburb is required');
    } else{
        setSuccess(suburb);
    }

    if(stateValue === ''){
        setError(state, 'State is required');
    } else{
        setSuccess(state);
    }

    if(postcodeValue === ''){
        setError(postcode, 'Postcode is required');
    } else{
        setSuccess(postcode);
    }

};