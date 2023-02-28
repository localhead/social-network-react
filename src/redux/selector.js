// Header Selectors
import { createSelector } from "reselect";

export const headerGetAuthDataSimple = (state) => {
  return state.authData;
};

export const headerGetAuthDataReSelector = createSelector(
  headerGetAuthDataSimple,
  (authData) => {
    return authData;
  }
);
