// @flow
export type List<+T> = $ReadOnlyArray<T>
export type Map<+T> = $ReadOnly<T>

export type $User = Map<{
  id: number,
  name: string,
  status: 'active' | 'inactive',
}>

type $ExtractAction = <A, D>(action: A) => $Call<A, D>

export type $ExtractActions<A> = $Values<$ObjMap<A, $ExtractAction>>
