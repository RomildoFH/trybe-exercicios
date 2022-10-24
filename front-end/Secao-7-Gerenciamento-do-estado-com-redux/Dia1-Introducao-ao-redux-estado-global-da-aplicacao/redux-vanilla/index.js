// Importando o redux
import { legacy_createStore as createStore } from "redux";
// importando o redux dev tools
import { composeWithDevTools } from "@redux-devtools/extension";

// 1. Criando o reducer com o statado inicial
const INITIAL_STATE = { count: 0 };
const reducer = (state = INITIAL_STATE, action) => {

  if (action.type === "INCREMENT_COUNTER") {
    return { count: state.count + 1 }
  }
  return state;
};

// 2. Criando a store já com o redux dev tools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a action
const action = { type: "INCREMENT_COUNTER" }

// 4. Disparando a action
const incrementButton = document.querySelector("button");
incrementButton.addEventListener("click", () => {
  store.dispatch(action);
});

// 5. Lendo as alterações do estado e atualizando a tela
store.subscribe(() => {
  const countElement = document.querySelector("h2");
  const globalState = store.getState();
  countElement.innerHTML = globalState.count;

  console.log(globalState);
  console.log("O estado foi alterado");
});