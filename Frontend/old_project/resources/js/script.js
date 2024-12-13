function validateForm() {
    let email = document.forms["loginForm"]["fEmail"].value.trim();
    let password = document.forms["loginForm"]["fPassowrd"].value.trim();
    console.log({email}, {password})
    if (email == "" || password == "") {
      alert("Both forms must be filled out");
      return false;
    } else {
      location.href='/src/index.html'
      return true;
    }
  }

   // Bubbles logic
  const bubblesContainer = document.getElementById('bubbles-container');
  // Function to generate bubbles
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 350 + 30; // Random size between 10px and 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                               ${Math.floor(Math.random() * 255)}, 
                               ${Math.floor(Math.random() * 255)})`;

    bubble.addEventListener('click', function() {
      bubble.remove(); // Removes the bubble when clicked
    });
    bubblesContainer.appendChild(bubble);

    // Bubble rise animation
    setTimeout(() => {
      bubble.remove(); // Remove the bubble after animation completes
    }, 8000); // Bubbles last for 8 seconds
  }

  // Generate bubbles at intervals
  setInterval(createBubble, 350); // Creates a bubble every 500ms


let persona = document.getElementById("navimage");

persona.addEventListener("click", function(e) {
        persona.classList.toggle('hide')
      });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }