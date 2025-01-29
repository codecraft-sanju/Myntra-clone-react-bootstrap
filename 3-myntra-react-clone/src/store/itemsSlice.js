import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ITEMS } from '../data/items';
const itemsSlice = createSlice({
  name: 'items', // The name of the slice, used for identification in actions and debugging.
  initialState: DEFAULT_ITEMS, // The initial state for this slice, an empty array in this case.
  reducers: {
    // Reducers define how the state can be modified.
    addInitialItems: (store, action) => {
      return store; // This reducer doesn't currently modify the state; it just returns it as-is.
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice




