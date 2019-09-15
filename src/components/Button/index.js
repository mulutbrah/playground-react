import React, { useReducer } from "React";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function Increment({ initialCount }) {
  // Hook returns [state, dispatch] array where state
  // is current state and dispatch is similar to
  // dispatch function in Redux with action
  // (in our case { type: 'increment' }) passed as a parameter.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      Increment: {state.count}
    </button>
  );
}

export default Increment;
