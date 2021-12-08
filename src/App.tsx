import React from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./redux/main/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { colors } = useSelector((state: { mainReducer: any }) => state.mainReducer);
  console.log(colors);

  return (
    <div className='App'>
      <button
        onClick={() => dispatch(changeColor("red"))}
        style={{ background: colors.red === true ? "red" : "white" }}
      >
        Change color to red
      </button>
      <button
        onClick={() => dispatch(changeColor("green"))}
        style={{ background: colors.green === true ? "green" : "white" }}
      >
        Change color to green
      </button>
      <button
        onClick={() => dispatch(changeColor("blue"))}
        style={{ background: colors.blue === true ? "blue" : "white" }}
      >
        Change color to blue
      </button>
    </div>
  );
}

export default App;
