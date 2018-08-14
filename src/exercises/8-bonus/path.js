// @flow
// TODO: Do types for path with 1 element in the tuple and 2 elements in the tuple
// Note: Use Tuples, $Keys and $ElementType to types
type Path = Function

declare var path: Path

const data = {
  vector: { x: 3, y: 6 },
}

const vector = path(['vector'], data)
const val = path(['vector', 'x'], data)
