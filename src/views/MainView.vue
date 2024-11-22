<template>
  <main>
    <div class="left-sidebar"></div>
    <posts-compo></posts-compo>
    <div class="right-sidebar"></div>
  </main>
</template>

<!--
<main>
  <div class="left-sidebar"></div>
    <div class="posts"></div>
    <div class="right-sidebar"></div>
  </div>
</main>
-->

<script>
import PostsCompo from '@/components/PostsCompo.vue';

export default {
  name: 'MainView',
  components: { PostsCompo },

}
</script>

<style>
main {
    margin-top: 10px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex: 1;
}

.left-sidebar{
    flex: 1;
    margin-bottom: 10px;
}

.right-sidebar{
    flex: 1;
    margin-bottom: 10px;

}

.left-sidebar, .right-sidebar{
    background-color: rgb(240, 226, 197);
    border-radius: 10px;

}
</style>