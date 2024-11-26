<template>
    <div class="signup-form">
        <div class="email-div">
        <span>Email:</span>    
        <input type="text" placeholder="email here">
        </div>
        <div class="password-div">
        <span>Password:</span>
        <input type="text" placeholder="password here" v-model="password" @input="checkPassword">
        <p class="errorMsg" v-if="IsError">{{passwordError}}</p>
        </div>
        <button class="signup" :disabled="IsError">
            signup
        </button>
    </div>
</template>



<script>
export default {
    name: "SignUpForm",

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
.errorMsg{
    font-size: 1vh;
}
.signup-form{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    margin:auto;
    margin-top: 10px;
    padding:10vh;
    background-color: #07eea1;
    border-radius: 4vh;
    max-width: fit-content;
    font-size: 3em;
    margin-top:4vh;
    margin-bottom: 4vh;
}

.email-div{
    max-width: 40vh;

    margin:inherit;
    font-family: inherit;
    font-size: inherit;
    margin-bottom: 5vh;
}
.email-div span{
    margin-left: 2em;
}
.password-div{

    margin:inherit;
    font-family: inherit;
    font-size: inherit;
    margin-bottom: 5vh;
    max-width: 50vh;
}
.signup-form span{
    margin-right: 5px;
    font-weight: 600;
}
.signup-form input{
    font-family: inherit;
    font-size: inherit;
    font-size: 2vh;
    max-width: 20vh;
    text-align: center;
    border:none;
    padding: 1vh;
    align-self: center;
    border-radius: 10px;
}
.signup{
    font-family: inherit;
    font-size: inherit;
    max-width: inherit;
    margin: auto;
    background-color: orange;
    border: none;
    padding: 1vh;
    border-radius: 20px;
}
.signup:hover{
    background-color: orange;
    border-radius: 8px;
    transform: scale(1.1);
    transition: all 0.1s ease-in;
    font-weight: 600;
    
}



</style>