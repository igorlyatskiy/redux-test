import { createReducer } from "@reduxjs/toolkit";

import { changeColor } from "./actions";


export const defaultState = {
  colors: {
    green: false,
    red: false,
    blue: false
  },
  cards: [
    {
      "id": 1,
      "color": "green",
      "name": "Aasdfasdf"
    },
    {
      "id": 2,
      "color": "red",
      "name": "xcvb"
    },
    {
      "id": 3,
      "color": "blue",
      "name": "tyui"
    },
    {
      "id": 4,
      "color": "red",
      "name": "123"
    },
    {
      "id": 5,
      "color": "green",
      "name": "456786"
    }
  ]
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