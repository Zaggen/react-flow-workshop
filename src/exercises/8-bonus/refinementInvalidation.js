// @flow
// TODO: Fix issue
function otherMethod() {
  /* ... */
}

type Props = {
  users?: {
    name: string,
  }[],
}

function method(props: Props) {
  if (props.users) {
    otherMethod()
    // $ExpectError
    return props.users[0]
  }
  return true
}
