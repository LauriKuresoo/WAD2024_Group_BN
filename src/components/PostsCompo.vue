<template>
    <div class="posts">
        <div v-for="post in postsList" :key="post.id" class="post">
            <div class="post-header">
                <img v-if="post.authorImg" :src="post.authorImg">
                <img v-else :src="require('@/assets/karu.jpeg')">
                <h3>{{ post.date }}</h3>
            </div>
            <div class="post-content">
                <p>{{ post.text }}</p>
                <img v-if="post.image" :src="post.image" class="img-container">
            </div>
            <div class="post-footer">
                <button class="like-button" v-on:click="IncreaseLike(post.id)">
                    <img src="@/assets/like.png">
                </button>
                <p id="likes">{{ post.likes }}</p>
            </div>
        </div>
        <div class=" button-container">
            <button class="toZero" v-on:click="Nullify">Delete all likes</button>
        </div>
    </div>

</template>

<script>
export default {
    name: "PostsCompo",
    computed: {
        postsList() {
            return this.$store.getters.getPostsList;
        }
    },

    mounted() {
        this.$store.dispatch("fetchPosts");
    },
    methods: {
        IncreaseLike(postId) {
            this.$store.dispatch("IncreaseLikeAct", postId)
        },
        Nullify() {
             this.$store.dispatch("NullifyAct")
        }

    }
}



</script>

<style>
#likes {
    margin: 0px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-bottom: 10px;
  
}
.toZero {
    display: inline-block;
    padding: 10px 20px;
    background-color:aquamarine;
    color: white;
    border: none;
    border-radius: 12px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;

}

.posts {
    flex: 3;
    margin: 0 20 20 20px;
    min-height: 100vh;

}

.post {
    padding: 10px;
    margin: 0px 20px 20px 20px;
    background-color: rgb(255, 239, 252);
    border-radius: 10px;
    min-height: 10vh;
}

.post-header {
    padding: 10 10 0 10px;
    display: flex;
    justify-content: space-between;
    height: 80px;
    background-color: rgb(255, 222, 255);
    border-radius: 10px;

}

.post-header>img {
    max-height: 90%;
    /* Slightly smaller than navbar height */
    width: auto;
    /* Maintain aspect ratio */
    object-fit: contain;
    /* Ensure the image fits without distortion */
    border-radius: 8px;
}

img~h3 {
    font-size: 20px;
}


.post-content {
    display: flex;
    padding: 15 70 15 70px;
    flex-direction: column;


}

p+.img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

}

.img-container {
    width: 60%;
    border-radius: 8px;
}

.post-footer {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 30px;
}

.post-footer button {
    height: 100%;
    background: local;
    border: none;
}

.post-footer img:hover {
    background-color: rgb(145, 172, 83);
    ;
}

.post-footer img {
    padding: 3px;
    max-height: 70%;
    width: auto;
    object-fit: contain;
    background-color: rgb(169, 196, 107);
    border-radius: 15px;
}


.post-footer {
    position: relative;
    display: inline-flex;
    align-items: center;
}

.like-button {
    width: 40px;
    height: 40px;
    background-color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 1;
}

/* Like count style */
.like-count {
    z-index: 0;
    position: relative;
    top: 0;
    left: -15px;
    /* Positions it right next to the button */
    background-color: rgb(98, 112, 65);
    ;
    color: rgb(255, 255, 255);
    padding: 0 15 0 35px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-weight: bold;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    overflow: hidden;
    /* Ensures it stays within bounds */
}

/* Hover effect to reveal the like count */
.like-button:hover+.like-count {
    transform: scaleX(1);
}
</style>