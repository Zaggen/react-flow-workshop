// @flow
// TODO: Fix types
import React from 'react'
import AverageRating from './AverageRating'

type Props = {|
  films: Array<{ id: number, name: string, rating: number }>,
|}

const Films = ({ films }: Props) => (
  <div>
    <AverageRating films={films} />
    <ul>{films.map((film, i) => <li key={i}>{film.name}</li>)}</ul>
  </div>
)

export default Films
