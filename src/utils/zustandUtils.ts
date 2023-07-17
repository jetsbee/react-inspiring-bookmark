import { StoreApi, useStore } from "zustand";
import { StateCreator, createStore as _createStore } from "zustand/vanilla";

export const createBoundedUseStore = ((store) => (selector, equals) =>
  useStore(store, selector as never, equals)) as <S extends StoreApi<unknown>>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(
    selector: (state: ExtractState<S>) => T,
    equals?: (a: T, b: T) => boolean
  ): T;
};

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#bounded-usestore-hook-for-vanilla-stores

const resetters: (() => void)[] = [];

export const createStore = (<T extends unknown & { reset?: () => void }>(
  f: StateCreator<T> | undefined
) => {
  if (f === undefined) return createStore;
  const store = _createStore(f);
  const initialState = store.getState();
  resetters.push(() => {
    initialState.reset
      ? initialState.reset() // supports persist middleware
      : store.setState(initialState, true);
  });
  return store;
}) as typeof _createStore;

export const resetAllStores = () => {
  for (const resetter of resetters) {
    resetter();
  }
}; // Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/how-to-reset-state.md
