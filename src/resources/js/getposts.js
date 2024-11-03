async function getAuthorImg(name) {
    const response = await fetch("/src/resources/data/authors.json");
    const authors = await response.json();
    const author = authors.find(author => author.name === name);
    return author ? author.img : "/src/resources/images/karu.jpeg";
}

fetch("/src/resources/data/posts.json")
    .then(response => response.json())
    .then(async posts => {
        const postList = document.querySelector(".posts");
        for (const post of posts) {
            const authorImg = await getAuthorImg(post.author);
            
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
            postContent.innerHTML = 
                `<p>${post.text}</p>
                 <img src="${post.image}
                `;
            
            let postFooter = document.createElement("div");
            postFooter.classList.add("post-footer");
            postFooter.innerHTML = `<button>  
                                    <img id="like" src="/src/resources/images/like.png">
                                    <p>${post.likes}</p>
                                  </button>`;

            
            
            
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