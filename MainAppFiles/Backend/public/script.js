let apiKey = "";//add your api key here


function searchMovie(name) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(name)}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        return data;
      } else {
        return null;
      }
    });
}

// function delayedSearch() {
//   setTimeout(searchMovie, 3000);
// }

function showMovie() {
  let name = document.getElementById("movieName").value;

  searchMovie(name).then((movie) => {
    if (movie) {
      let message = `
      <div class='containerr'>
      <div class='image available_space'>
      <img class="rounded" src = ${movie.Poster} alt ="movie image"/>
      </div>
      <div class="available_space centering"> 
      <div class='info'>
      <p>Name: ${movie.Title}</p>
      <p>Year: ${movie.Year}</p>
      <p>Rating: ${movie.imdbRating}</p>
      <p>Runtime: ${movie.Runtime}</p>
      <p>Languages: ${movie.Language}</p>
      </div>
      </div>
      </div>
  
      `;
      document.getElementById("movieInfo").innerHTML = message;
    } else {
      document.getElementById("movieInfo").innerHTML = "Movie not found.";
    }
  });
}

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => { 
      func.apply(this, args);
    }, timeout);
  };
}
const processChange = debounce(() => showMovie());











// // Fetch data from the OMDB API
// $.ajax({
//   url: `http://www.omdbapi.com/?s=${name}&apikey=4085dcbd`,
//   success: function(data) {
//     // Extract the list of movies from the API response
//     var movies = data.Search;

//     // Loop through the movies and display them in cards
//     for (var i = 0; i < movies.length; i++) {
//       var movie = movies[i];
//       var card = `
//         <div class="col-md-4">
//           <div class="card mb-4">
//             <img src="${movie.Poster}" class="card-img-top">
//             <div class="card-body">
//               <h5 class="card-title">${movie.Title}</h5>
//               <p class="card-text">${movie.Year}</p>
//             </div>
//           </div>
//         </div>
//       `;
//       $("#trendingMovies").append(card);
//     }
//   }
// });
