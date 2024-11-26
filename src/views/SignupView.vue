<template>
 <header></header>
 <signupform></signupform>
 <footer></footer>
</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/customFooter.vue'
import signupform from '@/components/SignUpForm.vue'

  export default {
    name: "SignupView",
    components: {
           header,
           footer,
           signupform
    }
  }
</script>
