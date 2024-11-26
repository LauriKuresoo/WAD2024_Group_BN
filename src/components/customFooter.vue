<template>
    <footer class="footer">
        <div class="left-side">
            <div class="logo">
                <h2><span>Group BN</span></h2>
                <p> all rights reserved</p>
                <img src="@/assets/karu.jpeg" alt="@/assets/logo.png">
            </div>
        </div>
        <div class="right-side">
            <p>About: <a href="https://github.com/LauriKuresoo/WAD2024_Group_BN">Github</a></p>
            <p>contact us: <a href="https://github.com/LauriKuresoo/WAD2024_Group_BN/graphs/contributors">Github Insights</a></p>
            <p>address: Narva mnt 18, Tartu, Tartu, 51009 Tartumaa, Estonia</p>
        </div>
    </footer>
</template>


<script>
export default {
    name: "customFooter"
    }

</script>

<style>
    .footer{
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        background-color: rgb(238, 187, 92);
        border-radius: 10px;
        position: relative;
        margin-top: 1vh;
        
    }
    .right-side{
        align-items:center;
        text-align: left;
        margin-right: 4em;
        margin-top: 3vh;
    }
    .left-side{
        align-items: center;
        margin-right: 4em;
    }

    .left-side > p{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 3em;
        text-align: center;
        margin-top: 1vh;
    }

    p{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 2em;
        text-align: left;
        margin-top: 1vh;
    }
    h2{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 3em;

    }
    a{
        text-decoration: none;
        color: inherit;

    }
    a:hover{
        background-color: orange;
        border-radius: 8px;
        transform: scale(1.1);
        transition: all 0.1s ease-in;
        padding: 5 30 5 30px;
        font-size: 1.3em;
        font-weight: 600;
    }
    img{
        max-height: 90%;
        width: 15vh; 
        object-fit: contain;
        margin: 1vh; 
        border-radius: 20px;
    }
</style>