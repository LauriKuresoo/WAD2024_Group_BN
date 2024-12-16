<template>
    <div class="container">
        <div class="signup-form">
            <div class="email-div">
            <span>Email:</span>    
            <input type="text" v-model="email">
            </div>
            <div class="password-div">
            <span>Password:</span>
            <input type="text" v-model="password" @input="checkPassword">
            <p class="errorMsg" v-if="IsError">{{passwordError}}</p>
            </div>
            <button class="button-class" :disabled="IsError" @click="SignUp">
                Signup
            </button>
        </div>
    </div>
</template>



<script>
export default {
    name: "SignUpForm",

    data() {
        return {
            email: '',
            password: '',
            passwordError: '',
            IsError: true,
            errorMessage: '',
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

        },

        SignUp() {
            if (!this.email || !this.password) {
                this.errorMessage = "Please enter both email and password";
                return;
            }

            var data = {
                email: this.email,
                password: this.password,
            };

            fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                console.log("Server response:", data);

                if (data.error) {
                    console.log("Error message:", data.error);

                    // Adjust the condition based on the actual error message structure
                    if (data.error.includes("email")) {
                    this.errorMessage = "Email address is already in use";
                    } else {
                    this.errorMessage = "An error occurred during sign up";
                    }
                } else {
                    console.log("Successful sign up:", data);
                    this.$router.push("/");
                }
                })
                .catch((e) => {
                console.log("Error during fetch:", e);
                this.errorMessage = "This email address has already been used";
                });
        },
    }
}

</script>


<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh; /* Ensures vertical centering */   
}


.signup-form {
    margin-top: -15vh;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 50vw;
    font-size: 30px;
    background-color: #07eea1;
    border-radius: 4vh;
}

.email-div,
.password-div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 60%;
    margin-top: 70px;
    
}

.email-div span,
.password-div span {
    margin-bottom: 10px; 
}

.error-container {
    width: 100%; /* Let the container span fully within the parent */
    height: 3em;
    text-align: center; /* Center the content */
}

.errorMsg {
    display: inline-block; /* Allows the element to shrink to fit and wrap properly */
    max-width: 50ch; /* Restrict line length by character count, ensuring wrapping */
    color: red;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.2;
    margin-top: 5px;
    text-align: center;
}

.signup-form span {
    margin-right: 1em;
    font-weight: 600;
}

.signup-form input {
  width: 100%;
  text-align: center;
  border-radius: 10px;
  font-family: inherit;
  font-size: inherit;
  border: none;      /* Removes border */
  outline: none;     /* Removes outline on focus */
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
    font-size: 0.7em;
    font-weight: 600;
    text-align: center;
}

</style>