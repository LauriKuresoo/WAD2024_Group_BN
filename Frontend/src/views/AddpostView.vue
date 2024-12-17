<template>
  <div class="form">
    <div class="container-addPost">
      <h3>Add a Post</h3>
      <div class="body-content">
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" placeholder="body" required v-model="post.body" />
      </div>
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
  padding:10px;
  

}
.body-content {
  display: flex;
  width: 70%;
  justify-content: space-around;
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

.container-addPost {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 20px auto 20 px auto;
  justify-content: center;
  height: auto;
  padding: 0px;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;
  border-radius: 20px;

}
.form {
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 90%;
  background-color: rgb(238, 187, 92);
  border-radius:20px ;
  margin: 20px;
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

  background-color: rgb(255, 222, 255);
  border-radius: 10px;
  justify-content: right;

}

.container-addPost>h3 {
  padding-right: 20px;
  text-align: center;
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