import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";


function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case "INCREMENT_INDEX":
      console.log("Estou incrementando");
      return ({
        ...state,
        index: state.index < state.colors.length - 1 ? state.index + 1 : state.index + 0,
      });
      break;
      case "DECREMENT_INDEX":
        console.log("Estou decrementando");
        return ({
          ...state,
          index: state.index > 0 ? state.index - 1 : state.index - 0,
        });
      case "RANDOM_COLOR":
        console.log("Gerando cor aleatória");
        return ({
          ...state,
          colors: [...state.colors, criarCor()],
          index: state.colors.length,
        });
      default:
        return ({
          ...state
        });
  }
}

const store = createStore(reducer, composeWithDevTools());

const incrementAction = { type: "INCREMENT_INDEX" };
const decrementAction = { type: "DECREMENT_INDEX" };
const randomAction = { type: "RANDOM_COLOR" };

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#previous");
const randomBtn = document.querySelector("#random");

nextBtn.addEventListener("click", () => {
  store.dispatch(incrementAction);
});

prevBtn.addEventListener("click", () => {
  store.dispatch(decrementAction);
});

randomBtn.addEventListener("click", () => {
  store.dispatch(randomAction);
});

store.subscribe(() => {

  const globalState = store.getState();
  const globalIndex = globalState.index;
  const globalColor = globalState.colors[globalIndex];

  const colorName = document.querySelector("#value");
  const paragraph = colorName.parentElement;
  const container = document.querySelector("#container");

  colorName.innerHTML = globalColor;
  if (globalColor === "black") {
    paragraph.style.color = "white";
  } else {
    paragraph.style.color = "black";
  }

  container.style.backgroundColor = globalColor;

});