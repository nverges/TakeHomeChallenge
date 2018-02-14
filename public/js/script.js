// Pull a gif from GIPHY API
function giphy(gif) {

    // Search Parameters
    let searchTerm = gif;
    let numResults = 5;
    let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC&limit=' + numResults;

    // AJAX Request
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        console.log(response);

        // Clear fields
        $('#bonus').empty();

        // Create a div to display gifs
        var gifDiv = $("<div class='gifs'>");

        // Loop through the ajax responses
        for (i = 0; i < response.data.length; i++) {
            
            // Shorthand
            var imgPath = response.data[i].images

            // Create html for individual div
            var image = $('<img>');
            image.attr('class', 'gif');
            image.attr('src', imgPath.fixed_height.url);

            // Push each gif to div
            gifDiv.append(image);
        };

        // Push all gifs to DOM
        $('#bonus').append(gifDiv);
    });
};

// SEE DETAILS button click event
const details = function() {
    let answer = confirm('Just for fun.... do you like my coding challenge?!');
    if (!answer) {
        giphy('boo');
    } else {
        giphy('woo-hoo');
    }
}

// Vanilla event listener 
document.getElementById('submit').addEventListener('click', details);