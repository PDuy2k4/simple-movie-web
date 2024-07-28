export default function getMovieNames(allMovies) {
  const allNames = [];
  for (const key in allMovies) {
    allMovies[key].forEach((movie) => {
      allNames.push({
        id: movie.id,
        name: movie.title,
        category: movie.category,
      });
    });
  }
  return allNames;
}
