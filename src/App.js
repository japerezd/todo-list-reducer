import { useReducer } from 'react';

 const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESTART: 'restart',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTIONS.DECREMENT:
      return { counter: state.counter - 1 };
    case ACTIONS.RESTART:
      return { counter: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
