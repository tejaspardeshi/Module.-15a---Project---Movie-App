const parentElement = document.querySelector(".main");
const searchInput = document.querySelector("#search-input");
const movieRatings = document.querySelector("#rating-select");
const movieGenres = document.querySelector("#genre-select");

let searchValue = "";
let ratings = 0;
let genre = "";
let movies = [];
let allGenres = new Set();

// Top 15 Bollywood movies data
movies = [
  {
    Title: "Fighter",
    Year: "2024",
    Genre: "Action, Thriller",
    Director: "Siddharth Anand",
    Writer: "Ramon Chibb, Siddharth Anand",
    Actors: "Hrithik Roshan, Deepika Padukone, Anil Kapoor",
    imdbRating: "7.0",
    Runtime: "166 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg",
  },
  {
    Title: "Merry Christmas",
    Year: "2024",
    Genre: "Crime, Drama, Thriller",
    Director: "Sriram Raghavan",
    Writer: "Sriram Raghavan, Arijit Biswas",
    Actors: "Katrina Kaif, Vijay Sethupathi",
    imdbRating: "7.5",
    Runtime: "144 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Merry_Christmas_film_poster.jpg",
  },
  {
    Title: "Bhool Bhulaiyaa 3",
    Year: "2024",
    Genre: "Comedy, Horror",
    Director: "Anees Bazmee",
    Writer: "Aakash Kaushik, Farhad Samji",
    Actors: "Kartik Aaryan, Tabu, Kiara Advani",
    imdbRating: "7.2",
    Runtime: "150 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Bhool_Bhulaiyaa_3_poster.jpg",
  },
  {
    Title: "Metro... In Dino",
    Year: "2024",
    Genre: "Drama, Romance",
    Director: "Anurag Basu",
    Writer: "Anurag Basu",
    Actors: "Aditya Roy Kapur, Sara Ali Khan, Anupam Kher",
    imdbRating: "7.1",
    Runtime: "138 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Metro..._In_Dino_poster.jpg",
  },
  {
    Title: "Chandu Champion",
    Year: "2024",
    Genre: "Biography, Drama, Sport",
    Director: "Kabir Khan",
    Writer: "Kabir Khan, Sumit Arora",
    Actors: "Kartik Aaryan",
    imdbRating: "7.8",
    Runtime: "155 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Chandu_Champion_film_poster.jpg",
  },
  {
    Title: "Stree 2",
    Year: "2024",
    Genre: "Comedy, Horror",
    Director: "Amar Kaushik",
    Writer: "Niren Bhatt, Raj Nidimoru",
    Actors: "Shraddha Kapoor, Rajkummar Rao",
    imdbRating: "7.0",
    Runtime: "140 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg",
  },
  {
    Title: "Singham Again",
    Year: "2024",
    Genre: "Action, Crime, Drama",
    Director: "Rohit Shetty",
    Writer: "Yunus Sajawal",
    Actors: "Ajay Devgn, Kareena Kapoor, Deepika Padukone",
    imdbRating: "7.3",
    Runtime: "158 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Singham_Again_poster.jpg",
  },
  {
    Title: "The Crew",
    Year: "2024",
    Genre: "Comedy, Drama",
    Director: "Rajesh Krishnan",
    Writer: "Nidhi Mehra, Mehul Suri",
    Actors: "Tabu, Kareena Kapoor, Kriti Sanon",
    imdbRating: "7.0",
    Runtime: "134 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Crew_2024_film_poster.jpeg",
  },
  {
    Title: "Bade Miyan Chote Miyan",
    Year: "2024",
    Genre: "Action, Comedy",
    Director: "Ali Abbas Zafar",
    Writer: "Ali Abbas Zafar",
    Actors: "Akshay Kumar, Tiger Shroff",
    imdbRating: "6.9",
    Runtime: "150 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Bade_Miyan_Chote_Miyan_film_poster.jpg",
  },
  {
    Title: "Mr. and Mrs. Mahi",
    Year: "2024",
    Genre: "Drama, Romance, Sport",
    Director: "Sharan Sharma",
    Writer: "Sharan Sharma, Nikhil Mehrotra",
    Actors: "Rajkummar Rao, Janhvi Kapoor",
    imdbRating: "7.2",
    Runtime: "138 min",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/Mr._%26_Mrs._Mahi_poster.jpg",
  }
];

function populateGenres(movies) {
  allGenres.clear();
  movies.forEach((movie) => {
    if (movie.Genre) {
      movie.Genre.split(",").forEach((g) => allGenres.add(g.trim()));
    }
  });
  movieGenres.innerHTML = '<option class="option" value="">Genre</option>';
  allGenres.forEach((g) => {
    const option = document.createElement("option");
    option.classList.add("option");
    option.value = g;
    option.innerText = g;
    movieGenres.appendChild(option);
  });
}

// Render movie cards
const createMovieCard = (movies) => {
  parentElement.innerHTML = "";
  for (let movie of movies) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "shadow");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-container");

    const imageEle = document.createElement("img");
    imageEle.classList.add("card-image");
    imageEle.setAttribute("src", movie.Poster !== "N/A" ? movie.Poster : "");
    imageEle.setAttribute("alt", movie.Title);
    imageContainer.appendChild(imageEle);

    cardContainer.appendChild(imageContainer);

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("movie-details");

    const titleEle = document.createElement("p");
    titleEle.classList.add("title");
    titleEle.innerText = movie.Title;
    cardDetails.appendChild(titleEle);

    const genreEle = document.createElement("p");
    genreEle.classList.add("genre");
    genreEle.innerText = `Genre: ${movie.Genre}`;
    cardDetails.appendChild(genreEle);

    const movieRating = document.createElement("div");
    movieRating.classList.add("ratings");

    const ratingsDiv = document.createElement("div");
    ratingsDiv.classList.add("star-rating");

    const starIcon = document.createElement("span");
    starIcon.classList.add("material-icons-outlined");
    starIcon.innerText = "star";
    ratingsDiv.appendChild(starIcon);

    const ratingValue = document.createElement("span");
    ratingValue.innerText = movie.imdbRating;
    ratingsDiv.appendChild(ratingValue);

    movieRating.appendChild(ratingsDiv);

    const length = document.createElement("p");
    length.innerText = movie.Runtime;
    movieRating.appendChild(length);

    cardDetails.appendChild(movieRating);
    cardContainer.appendChild(cardDetails);

    parentElement.appendChild(cardContainer);
  }
};

// Filter movies
function getFilteredData() {
  let filtered = movies;

  // Search filter
  if (searchValue.length > 0) {
    filtered = filtered.filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchValue) ||
        (movie.Director &&
          movie.Director.toLowerCase().includes(searchValue)) ||
        (movie.Writer && movie.Writer.toLowerCase().includes(searchValue)) ||
        (movie.Actors && movie.Actors.toLowerCase().includes(searchValue)),
    );
  }

  // Rating filter
  if (ratings > 0) {
    filtered = filtered.filter(
      (movie) => Number(movie.imdbRating) >= Number(ratings),
    );
  }

  // Genre filter
  if (genre.length > 0) {
    filtered = filtered.filter(
      (movie) =>
        movie.Genre && movie.Genre.toLowerCase().includes(genre.toLowerCase()),
    );
  }

  return filtered;
}

function handleSearch(event) {
  searchValue = event.target.value.toLowerCase();
  const filterBySearch = getFilteredData();
  createMovieCard(filterBySearch);
}

function debounce(callback, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function handleRatingSelector(event) {
  ratings = event.target.value;
  const filterByRating = getFilteredData();
  createMovieCard(ratings ? filterByRating : movies);
}

function handleGenreSelect(event) {
  genre = event.target.value;
  const filteredMoviesByGenre = getFilteredData();
  createMovieCard(genre ? filteredMoviesByGenre : movies);
}

// Initial load
(function () {
  populateGenres(movies);
  createMovieCard(movies);
})();

const debounceInput = debounce(handleSearch, 500);
searchInput.addEventListener("keyup", debounceInput);
movieRatings.addEventListener("change", handleRatingSelector);
movieGenres.addEventListener("change", handleGenreSelect);
