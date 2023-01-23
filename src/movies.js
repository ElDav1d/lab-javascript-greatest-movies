// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(movie => {
    const isSpielberg = movie.director === "Steven Spielberg";
    const isDrama = movie.genre.includes("Drama");

    if (isSpielberg && isDrama) return movie;
  });

  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((acc, movie) => {
    if (movie.score) return acc + movie.score;
    return acc;
  }, 0);

  const average = Number((totalScore / moviesArray.length).toFixed(2));

  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => {
    const isDrama = movie.genre.includes("Drama");
    if (isDrama) {
      return movie;
    }
  });

  if (dramaMovies.length === 0) return 0;

  const dramaScore = dramaMovies.reduce((acc, movie) => {
    if (movie.score) return acc + movie.score;
    return acc;
  }, 0);

  const average = Number((dramaScore / dramaMovies.length).toFixed(2));
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = structuredClone(moviesArray).sort((next, prev) => {

    if (next.year === prev.year) {
    
      if (next.title > prev.title) {
        return 1;
      } else if (next.title < prev.title) {
        return -1;
      } else {
        return 0;
      }
    } else {
        return next.year - prev.year;
    }
  });
  console.log(orderedMovies);
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
