<template>
    <header></header>
    <loginform></loginform>
    <footer></footer>
   </template>
   
   <script>
   import header from '@/components/header.vue'
   import footer from '@/components/customFooter.vue'
   import loginform from '@/components/LoginForm.vue'
   
     export default {
       name: "LoginView",
       components: {
              header,
              footer,
              loginform
       }
     }
   </script>
   