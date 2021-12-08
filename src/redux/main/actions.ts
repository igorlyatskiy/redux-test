import { createAction } from "@reduxjs/toolkit"

const CHANGE_COLOR = 'CHANGE_COLOR'

export const changeColor = createAction<string, typeof CHANGE_COLOR>(CHANGE_COLOR)