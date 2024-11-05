POSTS_URI = "https://api.jsonbin.io/v3/qs/672a1ea2e41b4d34e44edcb5"
AUTHORS_URI = "https://api.jsonbin.io/v3/qs/672a259fe41b4d34e44ee17d"

async function getAuthorImg(name) {
    const response = await fetch(AUTHORS_URI);
    const authors_json = await response.json();
    const authors = authors_json.record;
    const author = authors.find(author => author.name === name);
    return author ? author.img : "/src/resources/images/karu.jpeg";
};

function addLike(id){
    const likes = parseInt(document.getElementById(`like-${id}`).textContent) + 1;
    document.getElementById(`like-${id}`).textContent = likes;
}



fetch(POSTS_URI)
    .then(response => response.json())
    .then(async result => {
        const posts = result.record;
        const postList = document.querySelector(".posts");
        //console.log("posts: " + posts)
        for (const [index, post] of posts.entries()) {
            post.id = index;
            
            const authorImg = await getAuthorImg(post.author);
            const postImage = post.image ? post.image : null;

            let div = document.createElement("div");
            div.classList.add("post");
            
            let postHeader = document.createElement("div");
            postHeader.classList.add("post-header");
            postHeader.innerHTML = `
                <img src="${authorImg}" alt="${post.post_author}">
                <h3>${post.date}</h3>
            `;

            let postContent = document.createElement("div");
            postContent.classList.add("post-content");
            postContent.innerHTML = `
                    <p>${post.text}</p>
                `;
            if(postImage){
                let img = document.createElement("img");
                img.src = postImage;
                img.classList.add("img-container");
                postContent.appendChild(img);
            }
            
            let postFooter = document.createElement("div");
            postFooter.classList.add("post-footer");
            postFooter.innerHTML = `
                        <button class="like-button" onclick="addLike(${post.id})">
                            <img src="/src/resources/images/like.png" alt="like">
                        </button>
                        <span class="like-count" id="like-${post.id}">${post.likes}</span>
                        `;
            
            
            
            div.append(postHeader, postContent, postFooter);
            //div.appendChild(postHeader);
            
            postList.appendChild(div);
          
        }
    })
    .catch(error => console.error("Error loading posts:", error));
 
          


    /*<div class="post" id="1"> 
        <div class="post-header">
          <img src="karu.jpeg">
          <h3>Oct 22, 2024</h3>
        </div>
        <div class="post-content">
          <p>Pls give us max points. We have Robin in the hood. Robin Hood</p>
        </div>
        <div class="post-footer">
            <button>  
              <img id="like" src="like.png">
            </button>
        </div>
      </div>*/