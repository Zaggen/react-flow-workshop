// @flow
type GetActions<Interfaces> = $ReadOnly<
  $ObjMap<
    Interfaces,
    <I: { state: any, actions: Object }>(I) => $PropertyType<I, 'actions'>,
  >,
>

type GetStates<Interfaces> = $ReadOnly<
  $ObjMap<
    Interfaces,
    <I: { state: any, actions: Object }>(I) => $PropertyType<I, 'state'>,
  >,
>

type Return<T> = () => T
type Fn<A> = A => void

export type GetDispatch<Interfaces> = $ReadOnly<
  $ObjMap<
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
  >,
>

export type GetState<Interfaces> = $ReadOnly<
  $ObjMap<GetStates<Interfaces>, <S>(S) => S>,
>

type Model<S, A, D, RootState> = {
  +state: $Call<Return<S>>,
  +reducers: $ObjMap<
    $ElementType<A, 'pure'>,
    <V>(val: V) => (state: S, payload: V) => $Call<Return<S>>,
  >,
  +effects: (
    dispatch: $ReadOnly<D>,
  ) => $ObjMap<
    $ElementType<A, 'effects'>,
    <V>(
      val: V,
    ) => (payload: V, rootState: $ReadOnly<RootState>) => Promise<void>,
  >,
}

export type GetModels<Interfaces, Dispatch, RootState> = $Exact<
  $ObjMap<
    Interfaces,
    <I: { state: any, actions: Object }>(
      I,
    ) => Model<
      $PropertyType<I, 'state'>,
      $PropertyType<I, 'actions'>,
      Dispatch,
      RootState,
    >,
  >,
>
