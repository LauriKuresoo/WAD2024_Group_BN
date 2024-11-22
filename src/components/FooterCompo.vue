<template>
    <footer>
        <p>2023 PostIt. All rights reserved.</p>
    </footer>
</template>

<script>
  export default {
    name: 'FooterCompo'
  }
</script>

<style>
    footer{
        bottom: 0;
        height: 100px;
        width: 100%;
        background-color: rgb(241,  189, 119);
        border-radius: 10px;
    }

    footer > p {
        margin: 0;
        text-align: center;
        padding: 20px;
        color: rgb(0, 0, 0);
        font-size: 25px;
    }
</style>