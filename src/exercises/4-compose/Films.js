// @flow
// TODO: Use type inference
import * as React from 'react'
import { compose, withProps } from 'recompose'

class Films<P: *> extends React.PureComponent<P> {
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

export default (enhancer(Films): React.ComponentType<{}>)
