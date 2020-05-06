import { createSelector } from 'reselect'

const selectSession = (state) => state.session

export const selectLocations = createSelector(
  [selectSession],
  (session) => session.locations
)
