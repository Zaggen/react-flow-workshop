// @flow
type GetActions<Interfaces> = $ObjMap<
  Interfaces,
  <I: { state: any, actions: Object }>(I) => $PropertyType<I, 'actions'>,
>

type GetStates<Interfaces> = $ObjMap<
  Interfaces,
  <I: { state: any, actions: Object }>(I) => $PropertyType<I, 'state'>,
>

type Return<T> = () => T
type Fn<A> = A => void

export type GetDispatch<Interfaces> = $ObjMap<
  GetActions<Interfaces>,
  <A: { pure: Object, effects: Object }>(
    action: A,
  ) => {|
    ...$Exact<
      $ObjMap<$PropertyType<A, 'pure'>, <V>(V) => Fn<$Call<Return<V>>>>,
    >,
    ...$Exact<
      $ObjMap<$PropertyType<A, 'effects'>, <V>(V) => Fn<$Call<Return<V>>>>,
    >,
  |},
>

export type GetState<Interfaces> = $ObjMap<GetStates<Interfaces>, <S>(S) => S>

type Model<S, A, D, RootState> = {
  state: S,
  reducers: $ObjMap<
    $ElementType<A, 'pure'>,
    <V>(val: V) => (state: S, payload: V) => S,
  >,
  effects: (
    dispatch: D,
  ) => $ObjMap<
    $ElementType<A, 'effects'>,
    <V>(val: V) => (payload: V, rootState: RootState) => Promise<void>,
  >,
}

export type GetModels<Interfaces, Dispatch, RootState> = $ObjMap<
  Interfaces,
  <I: { state: any, actions: Object }>(
    I,
  ) => Model<
    $PropertyType<I, 'state'>,
    $PropertyType<I, 'actions'>,
    Dispatch,
    RootState,
  >,
>
