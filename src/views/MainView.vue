<template>
  <header-compo></header-compo>
  <main>
    <div class="left-sidebar"></div>
    <div class="posts">
      <div v-for="post in postsList" :key="post.id" class="post">
        <post-compo :post="post"></post-compo>
      </div>
    </div>
    <div class="right-sidebar"></div>
  </main>
  <FooterCompo></FooterCompo>
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
import PostCompo from '@/components/PostCompo.vue';
import HeaderCompo from '@/components/HeaderCompo.vue';
import FooterCompo from '@/components/FooterCompo.vue';


export default {
  name: 'MainView',
  components: { PostCompo, HeaderCompo, FooterCompo},
  computed: {
      postsList(){
          return this.$store.getters.getPostsList;
      } 
  },

  mounted(){
      this.$store.dispatch("fetchPosts");
  }

}
</script>

<style>
.posts{
    flex: 3;
    margin: 0 20 20 20px
}

main {
    margin-top: 10px;
    height: 100%;
    display: flex;
    flex-direction: row;
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