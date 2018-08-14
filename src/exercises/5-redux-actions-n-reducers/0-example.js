// @flow
type Vector = {
  x: number,
  y: number,
  z: number,
}

// TODO: Show how to map all properties to string
//type StringVector = $ObjMap...

type LettersObj = {
  a: 'A',
  b: 'B',
  c: 'C',
}

// TODO: Show how to get a Union Type from Obj
//type Letters = $Values...

const fn = (val: number) => val * val

// TODO: Get return type of function
//type ReturnType = $Call<typeof fn>

// TODO: Get string value (Use literal)
const FETCH_USER: 'FETCH_USER' = 'FETCH_USER'

const action = { type: FETCH_USER }

// TODO: Get return type of function
//type ActionType = $Values<typeof action>
