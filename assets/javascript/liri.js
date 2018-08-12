require("dotenv").config();
var request = require("request");

//Add here code required to import the leus.js file and stor it in a vairaib;e

//var spotify = new Spotify(MediaKeySession.spotify);
//var client = new Twitter(MediaKeySession.twitter);

/**
 * Make it so liri.js can take in one of the following commands:
 * 'my-tweets
 * spotify this sont
 * 
 * 
 */
var liri = {
    my_tweets: function () {

    },
    spotify_this_song: function(song_name) {

    },
    movie_this: function(movie_name) {
        var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

    },
    do_what_it_says: function() {

    }
}
console.log(liri[process.argv[2]](process.argv[3]))
