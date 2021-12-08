import React from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./redux/main/actions";
import "./App.css";
import { defaultState } from "./redux/main/reducer";

function App() {
  const dispatch = useDispatch();
  const { colors, cards } = useSelector((state: { mainReducer: typeof defaultState }) => state.mainReducer);
  console.log(colors);
  const conditionsArr: any[] = Object.entries(colors)
    .filter((item) => item[1])
    .map((e) => {
      return {
        color: e[0],
      };
    });
  console.log(conditionsArr);
  const filteredCards = filterItems(cards, conditionsArr) as any[];

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
      {filteredCards.map((item) => {
        return (
          <div style={{ background: item.color }} key={item.id}>
            <h2>Id: {item.id}</h2>
            <h3>Name: {item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

// [{ key: value }]
function filterItems(array: any, conditions: any) {
  return array.filter((item: any) => {
    let includes = false;
    conditions.forEach((e: any) => {
      if (e.color === item.color) {
        includes = true;
      }
    });
    return includes;
  });
}

export default App;
