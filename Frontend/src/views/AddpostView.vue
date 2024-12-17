<template>
  <div class="form">
    <div class="container">
      <h3>Add a Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <div class=" button-container">
        <button @click="addPost" class="addPost">Add Post</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AddpostView",
  data() {
    return {
      post: {
        body: "",
        date: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        body: this.post.body,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
};
</script>

<style>
.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;

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

.container {
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