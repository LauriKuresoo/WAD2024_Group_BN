<template>
    <div class="post-header">
        <img v-if="post.authorImg" :src="post.authorImg">
        <img v-else :src="require('@/assets/karu.jpeg')">
        <h3>{{ post.date }}</h3>
    </div>
    <div class="post-content">
        <div class="post-text">
            <p>{{ post.text }}</p>
        </div>
        <img v-if="post.image" :src="post.image" class="img-container">
    </div>
    <div class="post-footer">
        <button class="like-button" @click="likePost(post.id)">
            <img src="@/assets/like.png">
        </button>
        <span class="like-count">{{ post.likes }}</span>
    </div>
</template>

<script>
    export default {
        name: "PostCompo",
        props: {
            post: {
                type: Object, // Specify the expected type
                required: true, // Ensure the prop is passed
            }
        },
        methods:{
            likePost(postId){
                console.log('Post likes before dispatch:', this.post.likes);
                this.$store.dispatch("likePost", postId);
            }
        }

    }

</script>

<style>

.post{
    padding: 10px;
    margin: 0px 20px 20px 20px;
    background-color: rgb(255, 239, 252);
    border-radius: 10px;
}

.post-header{
    padding:10px 10px 0px 10px ;
    display: flex;
    justify-content: space-between;
    height: 80px;
    background-color: rgb(255, 222, 255);
    border-radius: 10px;

}

.post-header > img{
    max-height: 90%; /* Slightly smaller than navbar height */
    width: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensure the image fits without distortion */
    border-radius: 8px;
}
img ~ h3{
    font-size: 20px;
}


.post-content{
    display: flex;
    padding: 15px 70px 15px 70px;
    flex-direction: column;
    align-items: center;
}

.post-text{
    width: 100%;
    align-items: start;
    font-size: 20px;
}

.post-text + .img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    
}
.img-container {
    width: 60%;
    border-radius: 8px;
}

.post-footer{
    height: 60px;
    padding-left: 50px;
    display: flex;
    align-items: center;
    position: relative;
}
.post-footer button{
    height: 100%;
    background:local;
    border: none;
}

.post-footer img:hover{
    background-color: rgb(145, 172, 83);;
}

.post-footer img{      
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
    top: -2px;
    left: -15px; /* Positions it right next to the button */
    background-color: rgb(98, 112, 65);;
    color: rgb(255, 255, 255);
    padding: 0px 15px 0px 35px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 15px;
    font-weight: bold;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    overflow: hidden; /* Ensures it stays within bounds */
}

/* Hover effect to reveal the like count */
.like-button:hover + .like-count {
    transform: scaleX(1);
}


</style>