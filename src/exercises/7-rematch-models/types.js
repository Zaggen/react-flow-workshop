// @flow

export type GetState<Models> = $ObjMap<
  Models,
  <M>(model: M) => $ElementType<M, 'state'>,
>

export type GetDispatch<Models> = $ObjMap<
  Models,
  <M>(
    model: M,
  ) => {
    ...$ObjMap<$ElementType<M, 'reducers'>, <R>(reducer: R) => $Call<R, any>>,
    ...$ObjMap<
      $Call<$ElementType<M, 'effects'>, <I, R>(I) => R>,
      () => (payload: any) => void,
    >,
  },
>
