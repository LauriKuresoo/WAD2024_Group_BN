<template>
    <div class="signup-form">
        <div class="email-div">
            <span>Email:</span>
            <input type="text" placeholder="Email here">
        </div>
        <div class="password-div">
            <span>Password:</span>
            <input type="text" placeholder="Password here" v-model="password" @input="checkPassword">
        </div>
        <p class="errorMsg" v-if="IsError">{{ passwordError }}</p>


        <div style="display: flex; justify-content: center; align-items: center; gap: 1em;">
            <button class="button-class">Login</button>
            <p>Or</p>
            <button class="button-class">Signup</button>
        </div>
    </div>
</template>



<script>
export default {
    name: "LoginForm",

    data() {
        return {
            password: '',
            passwordError: '',
            IsError: true
        }
    },
    methods: {
        checkPassword(){
            this.passwordError = '';
            if(this.password === ''){
                this.passwordError = "No password entered"
            }
            else if(this.password.length < 8){
                this.passwordError = "password cant be shorter than 8 characters";
            }
            else if(this.password.length > 15){
                this.passwordError = "password cant be bigger than 15 characters";
            }
            else if(!/[A-Z].*/.test(this.password)){
                this.passwordError = "password needs to have at least one uppercase letter as the first letter";
            }
            else if(!/.*[a-z].*[a-z].*/.test(this.password)){
                this.passwordError = "password must have at least 2 lowercase letters";
            }
            else if(!/[.\d.*]/.test(this.password)){
                this.passwordError = "password needs to have atleast one number";
            }
            else if(!/.*_.*/.test(this.password)){
                this.passwordError = "password needs to have atleast one '_' character";
            }

            if(this.passwordError != ''){
                this.IsError = true;
            }
            else{
                this.IsError = false;

            }

        }
    }
}

</script>


<style>
.signup-form {
    
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 60vw;
    font-size: 30px;
    align-items: center;
    
}

.email-div,
.password-div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 60%;
    margin-top: 50px;
    
}

.email-div span,
.password-div span {
    margin-bottom: 10px; 
}

.errorMsg {
    font-size: 0.5em; /* Adjust font size for readability */
    color: red;
    max-width: 60%; /* Keep the error message within the container */
    text-align: center; /* Center the text */
    line-height: 1; /* Improve readability */
    margin-top: 5px;

}



.signup-form span {
    margin-right: 1em;
    font-weight: 600;
}

.signup-form input {
    width: 100%;
    text-align: center;
    border-radius: 10px;
}

.button-class {
    font-family: inherit;
    font-size: 1em;
    width: 100%; /* Ensure buttons are consistent in size */
    max-width: 15vh;
    margin: 0.5em;
    background-color: orange;
    color: #000;
    border: none;
    padding: 0.8em;
    border-radius: 20px;
    cursor: pointer;
}

.button-class:hover {
    background-color: #ff9900;
    border-radius: 20px;
    transform: scale(1.1);
    transition: all 0.1s ease-in;
    
}

.signup-form p {
    margin: 1em 0;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
}

</style>