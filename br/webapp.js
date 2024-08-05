document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const phone = document.getElementById('phone').value;
  const errorElement = document.getElementById('error');
  
  // Check if passwords match
  if (password !== confirmPassword) {
      errorElement.textContent = 'Passwords do not match';
      return;
  }
  
  // Check if phone number is exactly 9 digits and does not start with zero
  const phoneRegex = /^[1-9]\d{8}$/;
  if (!phoneRegex.test(phone)) {
      errorElement.textContent = 'Incorrect phone number';
      return;
  }

  errorElement.textContent = '';
  
  // Show successful registration message
  const successMessage = document.createElement('div');
  successMessage.textContent = 'Registered successful!';
  successMessage.style.position = 'fixed';
  successMessage.style.top = '50%';
  successMessage.style.left = '50%';
  successMessage.style.transform = 'translate(-50%, -50%)';
  successMessage.style.backgroundColor = 'green';
  successMessage.style.color = 'white';
  successMessage.style.padding = '10px';
  successMessage.style.borderRadius = '5px';
  document.body.appendChild(successMessage);
  
  // Remove the message after 2 seconds and display the new content
  setTimeout(() => {
      document.body.removeChild(successMessage);
      document.body.innerHTML = `
          <div class="container">
              <h1>Welcome to SMART</h1>
              <button onclick="chooseInvestmentPlan()">Choose Investment Plan</button>
          </div>
      `;
  }, 2000);
});

// Function to handle the button click
function chooseInvestmentPlan() {
  // Create a container for the divisions
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.marginTop = '20px';

  // Define the labels for each division
  const labels = ['PLATINUM', 'GOLD', 'SILVER', 'PALLADIUM', 'DIAMOND'];

  // Create 5 divisions with increasing color sharpness
  for (let i = 0; i < 5; i++) {
      // Create the outer division
      const outerDiv = document.createElement('div');
      outerDiv.style.width = '50%'; // Width: 50% of the container
      outerDiv.style.height = '200px'; // Fixed height
      outerDiv.style.margin = '10px 0';
      outerDiv.style.display = 'flex';
      outerDiv.style.flexDirection = 'row';
      outerDiv.style.alignItems = 'center';
      outerDiv.style.border = '1px solid black'; // Optional border for clarity
      outerDiv.style.boxSizing = 'border-box'; // Include border in total width/height

      // Create the two inner divisions
      for (let j = 0; j < 2; j++) {
          const innerDiv = document.createElement('div');
          innerDiv.style.flex = '1'; // Flex-grow to take up available space
          innerDiv.style.height = '100%'; // Full height of the outer div
          innerDiv.style.backgroundColor = `hsl(200, 100%, ${80 - i * 15}%)`; // Increasing color sharpness
          innerDiv.style.marginRight = j === 0 ? '0.5px' : '0'; // Margin between inner divs
          
          // Add label text to the first inner division of each outer division
          if (j === 0) {
              innerDiv.textContent = labels[i];
              innerDiv.style.display = 'flex';
              innerDiv.style.alignItems = 'center';
              innerDiv.style.justifyContent = 'center';
              innerDiv.style.fontSize = '24px';
              innerDiv.style.color = 'white';
              innerDiv.style.fontWeight = 'bold';
          }

          outerDiv.appendChild(innerDiv);
      }

      container.appendChild(outerDiv);
  }

  // Clear existing content and add the new content
  document.body.innerHTML = '';
  document.body.appendChild(container);
}
