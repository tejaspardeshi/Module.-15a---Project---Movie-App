Movie Discovery App
A lightweight, client-side web application that displays a curated catalog of movies with robust search, rating, and genre filters. Built entirely with plain HTML, CSS, and JavaScript—requiring no build tools—this project serves as a clean demonstration of DOM manipulation, debounced input handling, and dynamic data filtering using an in-memory dataset.

✨ Features
Smart Search: Quickly find movies by title, director, writer, or actors utilizing a debounced search input for optimal browser performance.

Dynamic Filtering: Isolate movies by IMDB rating thresholds (e.g., 7 & Above, 8 & Above) or by genres that are automatically populated from the dataset.

Responsive UI: A clean, card-based layout that elegantly displays movie posters, titles, genres, ratings, and runtimes across all device sizes.

🛠️ Technologies Built With
HTML5 for semantic structure.

CSS3 for styling, utilizing Google Fonts and Material Icons.

JavaScript (ES6+) for all logic, filtering, and DOM updates.

🚀 Setup & Execution
Because this application is completely static, no build step is required.

Option 1: Direct Execution
Simply double-click index.html to open it directly in any modern web browser (Chrome, Edge, Firefox).

Option 2: Local Server (Recommended)
Running a local server ensures all assets and scripts load exactly as they would in production.

Using VS Code: Install the "Live Server" extension and click "Go Live" at the bottom of your editor.

Using Node.js:

Bash
npx serve .
Using Python 3:

Bash
python -m http.server 8000
Then open http://localhost:8000 in your browser.

📂 Project Structure
index.html — The main entry point that mounts the application interface.

style.css — Contains all styling rules for the layout, header, and movie cards.

index.js — The core logic file housing the in-memory movie dataset and all interactive functions.

package.json — (Optional) Included for dependency management if you choose to expand the project later.

🧠 How It Works Under the Hood
Data Management: The movie dataset is stored as an in-memory array (movies) within index.js.

Genre Extraction: The populateGenres() function dynamically extracts unique genres from the dataset to build the dropdown menu options.

Performance Optimization: Typing in the search bar triggers a debounce() function, preventing the search logic from firing on every single keystroke and improving application performance.

Rendering: The Rating and Genre selectors filter the active dataset using getFilteredData(), which then passes the results to createMovieCard() to update the DOM.

✏️ Customizing the Dataset
You can easily modify the movie catalog by editing the movies array in index.js. Add, remove, or update objects using the following structure:

JavaScript
{
    Title: "Movie Title",
    Year: "2024",
    Genre: "Action, Drama",
    Director: "Director Name",
    Writer: "Writer Name",
    Actors: "Actor 1, Actor 2",
    imdbRating: "7.5",
    Runtime: "120 min",
    Poster: "https://link-to-image.jpg"
}
Note: The app will automatically detect and extract new genres from the comma-separated Genre string.

♿ Accessibility Notes
This application is designed to be simple and keyboard-navigable. Future iterations could improve accessibility by adding descriptive alt text for missing posters and enhanced focus states for screen readers. Currently, if a remote poster URL fails to load, the template falls back to an empty image source.

🤝 Contributing
Pull requests are welcome! Whether it's improving documentation, enhancing accessibility, or refactoring the app to fetch data from a live remote API (like TMDB), feel free to contribute.

📄 License
This project is provided as-is for educational and demonstration purposes. You are free to use and modify it for personal projects.

👨‍💻 Author
Tejas Pardeshi

