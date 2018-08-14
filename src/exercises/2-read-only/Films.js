// @flow
// TODO: Fix types
import React from 'react'
import AverageRating from './AverageRating'
import type { List, Map } from './types'

type Props = Map<{|
  films: List<{ id: number, name: string, rating: number }>,
|}>

const Films = ({ films }: Props) => (
  <div>
    <AverageRating films={films} />
    <ul>{films.map((film, i) => <li key={i}>{film.name}</li>)}</ul>
  </div>
)

export default Films
