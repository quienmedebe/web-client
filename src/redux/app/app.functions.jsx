/***
 * Caveats: https://daveceddia.com/access-redux-store-outside-react/
 */
export function getCurrentAppState(store) {
  return store.getState().app;
}
