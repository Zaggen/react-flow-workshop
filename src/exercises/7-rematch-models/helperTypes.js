// @flow
export type GetDispatch<Actions> = $ObjMap<
  Actions,
  <A: { pure: Object, effects: Object }>(
    action: A,
  ) => {|
    ...$Exact<
      $ObjMap<
        $ElementType<A, 'pure'>,
        <V>(val: V) => ($ElementType<V, 'payload'>) => void,
      >,
    >,
    ...$Exact<
      $ObjMap<
        $ElementType<A, 'effects'>,
        <V>(val: V) => ($ElementType<V, 'payload'>) => void,
      >,
    >,
  |},
>

export type Model<S, A, D, RootState> = {
  state: S,
  reducers: $ObjMap<
    $ElementType<A, 'pure'>,
    <V>(val: V) => (state: S, payload: $ElementType<V, 'payload'>) => S,
  >,
  effects: (
    dispatch: D,
  ) => $ObjMap<
    $ElementType<A, 'effects'>,
    <V>(
      val: V,
    ) => (
      payload: $ElementType<V, 'payload'>,
      rootState: RootState,
    ) => Promise<void>,
  >,
}
