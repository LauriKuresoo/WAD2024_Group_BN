//POSTS_URI = "https://api.jsonbin.io/v3/qs/672a1ea2e41b4d34e44edcb5"
//POSTS_URI = "resources/data/posts.json"
POSTS_URI = "https://api.jsonbin.io/v3/qs/6734b04facd3cb34a8a7f62f"
//AUTHORS_URI = "https://api.jsonbin.io/v3/qs/672a259fe41b4d34e44ee17d"
//AUTHORS_URI = "resources/data/posts.json"
AUTHORS_URI = "https://api.jsonbin.io/v3/qs/6734b093e41b4d34e453bcc7"

async function getAuthorImg(name) {
    const response = await fetch("/src/resources/data/authors.json");
    const authors = await response.json();
    const author = authors.find(author => author.name === name);
    return author ? author.img : "resources/images/karu.jpeg";
};
function addLike(id){
    const likes = parseInt(document.getElementById(`like-${id}`).textContent) + 1;
    document.getElementById(`like-${id}`).textContent = likes;
}

fetch(POSTS_URI)
    .then(response => response.json())
    .then(data => data.record)
    .then(async posts => {
        const postList = document.querySelector(".posts");
        
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
                            <img src="resources/images/like.png" alt="like">
                        </button>
                        <span class="like-count" id="like-${post.id}">${post.likes}</span>
                        `;



            div.append(postHeader, postContent, postFooter);
            //div.appendChild(postHeader);

            postList.appendChild(div);

        }
    })
    .catch(error => console.error("Error loading posts:", error));