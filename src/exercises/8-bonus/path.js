// @flow
// TODO: Do types for path with 1 element in the tuple and 2 elements in the tuple
type Path = (<O, K1: $Keys<O>>(path: [K1], obj: O) => $ElementType<O, K1>) &
  (<O, K1: $Keys<O>, K2: $Keys<$ElementType<O, K1>>>(
    path: [K1, K2],
    obj: O,
  ) => $ElementType<$ElementType<O, K1>, K2>)

declare var path: Path

const data = {
  vector: { x: 3, y: 6 },
}

const vector = path(['vector'], data)
const val = path(['vector', 'x'], data)
