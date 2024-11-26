<template>
    <div class="signup-form">
        <div class="email-div">
        <span>Email:</span>    
        <input type="text" placeholder="email here">
        </div>
        <div class="password-div">
        <span>Password:</span>
        <input type="text" placeholder="password here">
        </div>
        <button class="signup">
            signup
        </button>
    </div>
</template>



<script>
export default {
    name: "SignUpForm"
    }

</script>


<style>
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