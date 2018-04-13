const { store } = require("./todolist.js");

describe("first test", () => {
  it("passes", () => {
    const action = {
      type: "ADD_TODO",
      id: 0,
      text: "activity 1"
    };
    store.dispatch(action);

    expect(store.getState()).toHaveProperty;
  });
});

describe("second test", () => {
  it("passes", () => {
    const stateAfter = {
      todos: [
        {
          text: "activity 1",
          id: 0,
          completed: false
        }
      ],
      visibilityFilter: "SHOW_ALL"
    };

    expect(store.getState()).toEqual(stateAfter);
  });
});

describe("third test", () => {
  it("passes", () => {
    const action2 = {
      type: "SET_VISIBILITY_FILTER",
      filter: "SHOW_NONE"
    };
    const stateAfter = {
      todos: [
        {
          text: "activity 1",
          id: 0,
          completed: false
        }
      ],
      visibilityFilter: "SHOW_NONE"
    };
    store.dispatch(action2);

    expect(store.getState()).toEqual(stateAfter);
  });
});

describe("fourth test", () => {
  it("passes", () => {
    const action3 = {};
    const stateAfter = store.getState();
    store.dispatch(action3);
    expect(store.getState()).toEqual(stateAfter);
  });
});
