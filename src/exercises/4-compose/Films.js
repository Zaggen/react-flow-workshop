// @flow
// TODO: Use type inference
import React from 'react'
import { compose, withProps } from 'recompose'

type Props = {|
  films: $ReadOnlyArray<{ name: string, age: number }>,
|}

class Films extends React.PureComponent<Props> {
  componentDidMount() {
    // do something
  }

  render() {
    return (
      <ul>{this.props.films.map((film, i) => <li key={i}>{film.name}</li>)}</ul>
    )
  }
}

const enhancer = compose(
  withProps({
    films: [{ name: 'Pulp Fiction' }],
  }),
)

export default enhancer(Films)
