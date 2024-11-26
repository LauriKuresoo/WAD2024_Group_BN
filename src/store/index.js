import { createStore } from 'vuex'

export default createStore({
  state: {
    postsList: [],
    POSTS_URI: "resources/data/posts.json"

  },
  getters: {
    getPostsList: (state) => state.postsList,
  },
  mutations: {
    setPostsList: (state, posts) => state.postsList = posts,
    IncreaseLike(state, postId) {
      const post = state.postsList.find(p => p.id === postId);
      if (post) {
        post.likes++;
      }
    },
    NullifyLikes(state) {
      state.postsList.forEach(post => {
        post.likes = 0;
    })
    }

  },
  actions: {
    async fetchPosts({ commit, state }) {
      fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(posts => {
          console.log(posts);
          commit("setPostsList", posts)
        })
        .catch(error => console.error("Error loading posts:", error));

    }, IncreaseLikeAct({ commit }, postId) {
      commit('IncreaseLike', postId);
    },
    NullifyAct({ commit }) {
      commit('NullifyLikes')
    }
  },
  modules: {
  }
})
