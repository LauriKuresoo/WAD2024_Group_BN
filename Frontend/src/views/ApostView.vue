<template>
  <div class="Post">
    <div id="form">
      <h3>A post id: {{ this.$route.params.id }}</h3>
      <div class="body-content">
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
      </div>
    
    <div class="options-div">
      <button @click="updatePost" class="updatePost">Update Post</button>
      <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "ApostView",
  data() {
    return {
      post: {
        id: "",
        body: "",
        urllink: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      console.log(id + "siin");
      console.log("ALERT TEST")
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push("/")
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push("/")
    },
  },
  mounted() {
    console.log(this.$route.params.id)
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style>
.Post {
  
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 90%;
  background-color: lightgoldenrodyellow;
  border-radius:20px ;
  margin: 20px;


}

label {
  padding: 10px;
}
input {

  border-radius: 20px;
  border: 1px;
  text-align: center;
  padding: 10px;
}
.body-content {
  display: flex;
  width: 70%;
  justify-content: space-around;
  margin-bottom: 20px;
}

#form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;
  width: 50%;
  background-color: rgb(238, 187, 92);
  border-radius: 20px;
  margin: 20px;
}

.options-div {
  display: flex;
  margin-top: 20px 20px 20px 20px;
  border-radius: 20px;
  justify-content: center;
}
h3 {
  text-align: center;
}
button {
  min-width: 20vh;
  min-height: 5vh;
  margin: auto 10px;
}
</style>