// @flow
// TODO: Fix issue and explain why is happenning (use indexer first)
// TODO: Create List/Map helpers
// TODO: Mention incompatibility issues

type Films = Array<{
  id: number,
  name: string,
  year: string,
  genre: Array<string>,
  rating: number,
}>

function parseFilms(films: Films) {
  const bestFilms = getHighestRankedFilms(films)
  return {
    bestFilms,
    films,
  }
}

type FilmsToRank = Array<{
  id: number,
  rating: number,
}>

function getHighestRankedFilms(films: FilmsToRank): Array<number> {
  return films
    .sort((a, b) => (a.rating > b.rating ? -1 : 1))
    .map(film => film.id)
}
