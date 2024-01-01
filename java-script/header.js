
    function changeContent() {
      document.getElementById("dynamicContent").innerHTML = "Content changed!";
    }

    // Move the text from right to left without disappearing
    let position = 400; // Initial position
    let direction = -0.5; // Direction (right to left)
    const movingText = document.getElementById("movingText");

    function moveText() {
      position += direction;
      movingText.style.left = position + "px";

      // Reset position when text reaches the left edge
      if (position <= -movingText.clientWidth ) {
        position = window.innerWidth ;
      }

      // Repeat the animation
      requestAnimationFrame(moveText);
      
    }

    // Start the animation instantly
    moveText();
    moveText();