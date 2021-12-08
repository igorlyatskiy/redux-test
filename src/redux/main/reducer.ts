import { createReducer } from "@reduxjs/toolkit";

import { changeColor } from "./actions";


const defaultState = {
  colors: {
    green: false,
    red: false,
    blue: false
  },
}

const mainReducer = createReducer(defaultState, {
  [changeColor as any]: (state, { payload }) => {
    const color: string = payload;
    if (color === 'red') {
      state.colors.red = !state.colors.red;
    }
    if (color === 'blue') {
      state.colors.blue = !state.colors.blue;
    }
    if (color === 'green') {
      state.colors.green = !state.colors.green;
    }
  },
})

export default mainReducer;