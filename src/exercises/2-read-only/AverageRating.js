// @flow
import React from 'react'

type Films = Array<{
  id: number,
  rating: number,
}>

type Props = {| films: Films |}

const AverageRank = ({ films }: Props) => <span>{getAvg(films)}</span>

function getAvg(films: Films): number {
  return (
    films.reduce((sum, { rating }) => {
      sum += rating
      return sum
    }, 0) / films.length
  )
}

export default AverageRank
