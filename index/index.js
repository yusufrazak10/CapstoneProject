// Function to save content and hide button
const saveButton = (event, info) => { 
    // Initialize a variable to store the content to be saved
    let content = '';
    // Switch statement to determine the content based on the 'info' parameter
    switch (info) {
      case 'background':
        content = document.getElementById('background').innerHTML;
        break;
      case 'positions':
        content = document.querySelector('.img1').outerHTML;
        break;
      case 'positionsTable':
        content = document.querySelector('.t1').outerHTML;
        break;
      case 'generalInfo':
        content = document.getElementById('generalInfo').innerHTML;
        break;
      case 'bestAccoladesImage':
        content = document.querySelector('.img2').outerHTML;
        break;
      case 'bestAccolades':
        content = document.querySelector('.ul1').innerHTML;
        break;
      case 'quote':
        content = document.getElementById('quote').innerHTML;
        break;
      case 'footballIsLife':
        content = document.getElementById('footballIsLife').innerHTML;
        break;
      case 'finalImage':
        content = document.querySelector('.img5').outerHTML;
    }
  
    // Retrieve saved items from sessionStorage or initialize an empty array
    let savedItems = JSON.parse(sessionStorage.getItem('savedDisplay')) || [];
    // Add the new content to the array of saved items
    savedItems.push(content);
    // Store the updated saved items back into sessionStorage
    sessionStorage.setItem('savedDisplay', JSON.stringify(savedItems));
    // Display an alert message indicating the number of saved items
    alert(`You have saved ${savedItems.length} item(s) successfully.`);
    // Hide the clicked save button using jQuery
    $(event.target).hide();
};
  
// Function to display saved items on the "Save for Later" page
const displaySavedInfo = () => {
    // Retrieve saved items from sessionStorage and parse them as JSON
    let savedItems = JSON.parse(sessionStorage.getItem('savedDisplay'));
    
    // Check if there are saved items
    if (savedItems) {
        // Get the container element where saved items will be displayed
        let container = document.getElementById('savedDisplay');
        // Clear any existing content inside the container
        container.innerHTML = "";
        
        // Loop through each saved item and create a div element to display it
        savedItems.forEach((item, index) => {
            let div = document.createElement('div'); // Create a new <div> element
            // Set the innerHTML of the div to the saved item content
            div.innerHTML = item;
        
        // Create a "like" button for each saved item
        let likeButton = document.createElement('button');
        // Name the like button.
        likeButton.textContent = 'Like';
        likeButton.className = 'likeButton';

        // Add a click event listener for like button.
        likeButton.onclick = function() {
          alert('Item added to likes');
          // Save liked item's index in sessionStorage
          let likedItems = JSON.parse(sessionStorage.getItem('likedItems')) || [];
          // Add the to the array.
          likedItems.push(index);
          sessionStorage.setItem('likedItems', JSON.stringify(likedItems));
          // Hide the like button after clicking.
          $(likeButton).hide();
        };

        // Append the like button to the item container
        div.appendChild(likeButton);
        // Append the item container to the main display container
        container.appendChild(div);
      });
      
      // Get button elements.
      let buttons = document.querySelectorAll('.button');
      buttons.forEach(button => {
        // Hide the button after displaying items.
        button.style.display = 'none';
      });
    }
}
  
// Call displaySavedInfo() when the page loads
window.onload = displaySavedInfo;

$(document).ready(function() {
    // Add click event listener.
    $(".accordion").on('click', function() {
        // Toggle the 'active' class on the clicked .accordion element.
        $(this).toggleClass("active");
        // Find the next element after .accordion.
        let options = $(this).next(".options");
        // Toggle the visibility of the next element.
        options.slideToggle();
    });
})

$(document).ready(function() {
    // Set repetitive interval of 5 seconds.
    setInterval(function() {
        // Change the background color at different intervals.
        setTimeout(function() {
            $('body').css('background-color', '#f0f0f0');
        }, 1000);
        setTimeout(function() {
            $('body').css('background-color', '#e0eaf0');
        }, 2000);
        setTimeout(function() {
            $('body').css('background-color', '#fafafa');
        }, 3000);
}, 5000);
});



