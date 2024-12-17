<template>
     <div class="container">
        <div class="login-form">
            <div class="email-div">
                <span>Email:</span>
                <input type="text" v-model="email">
            </div>
            <div class="password-div">
                <span>Password:</span>
                <input type="text" v-model="password">
            </div>
            <div class="error-container">
                <p class="errorMsg" v-if="IsError">{{ passwordError }}</p>
            </div>
        


            <div style="display: flex; justify-content: space-around; margin-top: -40px; align-items: center; gap: 1em;">
                <button class="button-class" @click="LogIn">Login</button>
                <p>Or</p>
                <button class="button-class" @click="$router.push('/signup')">Signup</button>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "LoginForm",

    data() {
        return {
            email:'',
            password: '',
            passwordError: '',
            IsError: true
        }
    },
    methods: {
        LogIn() {
            var data = {
                email: this.email,
                password: this.password
            };
          
            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: 'include', //  Don't forget to specify this if you need cookies
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            //this.$router.push("/");
            location.assign("/");
            })
            .catch((e) => {
                console.log(e);
                console.log("error");
            });
        }
    }
}

</script>


<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
 
  
}


.login-form {
    margin: 20px;
    height: auto;
    width: auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.login-form span {
    margin-right: 1em;
    font-weight: 600;
}

.login-form input {
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



.login-form p {
    margin: 1em 0;
    font-size: 0.7em;
    font-weight: 600;
    text-align: center;
}

</style>