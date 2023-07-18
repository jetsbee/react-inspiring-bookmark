import { StoreApi, useStore } from "zustand";
import { createStore } from "zustand/vanilla";

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

export const addResetter = <T extends unknown>(
  store: StoreApiOrPersistedStoreApi<T>,
  resetFn?: () => void
) => {
  const hasPersist = (
    s: StoreApiOrPersistedStoreApi<T>
  ): s is PersistedStoreApi<T> => {
    return s.hasOwnProperty("persist");
  };

  const initialState = store.getState();
  if (hasPersist(store) && resetFn) {
    resetters.push(resetFn);
  } else {
    // for store with context provider or without persistency
    resetters.push(() => {
      store.setState(initialState, true);
    });
  }
};

type StoreApiOrPersistedStoreApi<T> = StoreApi<T> | PersistedStoreApi<T>;

type PersistedStoreApi<T> = ReturnType<
  typeof createStore<T, [["zustand/persist", T]]>
>;

export const resetStores = () => {
  for (const resetter of resetters) {
    resetter();
  }
}; // Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/how-to-reset-state.md
