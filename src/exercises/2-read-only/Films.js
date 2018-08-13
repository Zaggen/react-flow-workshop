// @flow
// TODO: Fix types
import React from 'react'
import AverageRank from './AverageRank'

type Props = {|
  films: Array<{ id: number, name: string, rank: number }>,
|}

const Films = ({ films }: Props) => (
  <div>
    <AverageRank films={films} />
    <ul>{films.map((film, i) => <li key={i}>{film.name}</li>)}</ul>
  </div>
)

export default Films
