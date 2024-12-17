<template>
    <div class="posts">
        <div class="button-container-top">
            <button   @click="Logout" class="center">Logout</button>
        </div>
        
        <div v-for="post in posts" :key="post.id" class="post">
            <router-link class="singlepost" :to="{ path: '/apost/' + post.id }">
                <div class="post-header">
                    <h3>{{ post.date }}</h3>
                </div>
                <div class="post-content">
                    <p>{{ post.body }}</p>
                </div>
            </router-link>
        </div>
        
        <div class=" button-container-bottom">
            <button class="addPost" @click="goToAddPost">Add post </button>
            <button class="deleteAll" @click="deletePosts">Delete all </button>
        </div>
    </div>

</template>

<script>
export default {
    name: "PostsCompo",

    data() {
    return {
      posts: [],
    };
  },

    methods: {
        Logout() {
            fetch("http://localhost:3000/auth/logout", {
                credentials: 'include', //  Don't forget to specify this if you need cookies
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log('jwt removed');
                //console.log('jwt removed:' + auth.authenticated());
                this.$router.push("/login");
                //location.assign("/");
            })
            .catch((e) => {
                console.log(e);
                console.log("error logout");
            });
            },
        
        goToAddPost() {
            this.$router.push('/addpost');
        },
        deletePosts() {
            fetch(`http://localhost:3000/api/posts/`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then(() => {
                this.fetchPosts();

            })
            .catch((e) => {
            console.log(e);
            });
        },
        fetchPosts(){
            fetch(`http://localhost:3000/api/posts/`)
            .then((response) => response.json())
            .then((data) => (this.posts = data))
            .catch((err) => console.log(err.message)); 
        }

    },
    mounted() {
        this.fetchPosts();
    },
}



</script>

<style>

.button-container-top{
    flex-direction: column;
}
.button-container-bottom{
    margin-top: auto;
    display: flex;
    justify-content: space-between;
}
.button-container-top, .button-container-bottom{
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-left: 20px;
    margin-right: 20px;


}
button {
    display: inline-block;
    padding: 10px 20px;
    background-color: lightskyblue;
    color: white;
    border: none;
    border-radius: 12px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;

}
button:hover{
    background-color: orange;
        border-radius: 8px;
        transform: scale(1.1);
        transition: all 0.1s ease-in;
        padding: 5 30 5 30px;
        font-size: 1.3em;
        font-weight: 600;
        
}

.posts {
    display: flex;
    flex-direction: column;
    width: 80%;            
    margin: 0 auto;        
    height: auto;          
    padding: 0px;         
    box-sizing: border-box;

}

.post {
    padding: 10px;
    margin: 0px 20px 20px 20px;
    background-color: rgb(255, 239, 252);
    border-radius: 10px;
    min-height: 10vh;
}

.post-header {
    
    display: flex;
    justify-content: right;
    background-color: rgb(255, 222, 255);
    border-radius: 10px;

}

.post-header>h3 {
    padding-right: 20px;
}



.post-content {
    display: flex;
    justify-content: center;
    flex-direction: column;


}
.post-content>p {
    padding: 0%;
    margin: 10px;


}













</style>