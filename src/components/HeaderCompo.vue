<template>
    <nav class="navbar">
      <div id="navleft">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/signup">Sign Up</router-link>
      </div>
      <div id="navright">
        <router-link id="navimage" to="/signup">
          <img src="@/assets/karu.jpeg" />
        </router-link>
      </div>
  </nav>
</template>

<script>
    export default {
        name:"HeaderCompo",
    }
</script>