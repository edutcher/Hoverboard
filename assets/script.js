// Create three constants.  Constants are close to variables; the main
// difference is that constants can not be changed after being declared.
// that works perfectly for us here:
// 1. document.getElementById() is a DOM method that allows us to refer to
// an HTML element inside javascript by using the ID we gave it in the 
// HTML.  The container constant allows us to create a 'shorthand' to access
// the main container div on our HTML page.
const container = document.getElementById('container');
// 2. This is the array that lets us decide on the possible colors for
// our squares to turn into.  We don't need to change this so a constant
// works well for us
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
// 3. This will set the number of squares we put in our container.  Once
// again we don't need to change this, it gives us an easy way to if we
// want to change the code in the future
const numSquares = 500;

// Generate a random number from 0 to the length of the colors array, 
// then return the value of the array at that random index.
function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// This function will change the background color of a square to a random
// color chosen by the getColor() function, it also adds a shadow.
function setColor(element) {
    // Call the getColor function and assign the value returned to a
    // constant named color.
    const color = getColor();

    // Element is the parameter that was sent to our function, in this
    // case we know it is a square we have created.
    // Here we change the background color, .style. is used to change CSS
    // properties of HTML elements in javascript.
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// This function will change a square back to it's default color and
// remove the shadow.
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

// This is not in a function and will load when our script loads at the
// bottom of the page.
// This for loop will run until numSquares times.
for (var i = 0; i < numSquares; i++) {
    // document.createElement is a DOM method that creates new elements
    // on our page.  We are creating a new div element and assigning a
    // constant reference to it named square.
    const square = document.createElement('div');
    // Here we add the square CSS class to our newly created div.  This will
    // apply the CSS styling we have set for our square class to the new
    // div we created.
    square.classList.add('square');

    // This adds an 'event listener' to our created div, this will 
    // allows us to detect when the things happen to the HTML element.
    // This particular listener is going to happen when the mouse is
    // moved over the HTML element (our newly created square).
    // When that happens, we are going to call the setColor function
    // and send our newly created square as an arguement.
    square.addEventListener('mouseover', () => setColor(square));

    // Creates a listener that calls the removeColor function(with our
    // sqaure as an arguement) when the mouse leaves the HTML elemment.  
    square.addEventListener('mouseout', () => removeColor(square));

    // Add the square div element we created inside our container on the
    // HTML page.
    container.appendChild(square);
}
// Go back and add the rest of the squares till done.