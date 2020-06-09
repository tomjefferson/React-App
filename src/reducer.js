function reducer(state = { content: "" }, action) {
  switch (action.type) {
    case "test":
      return Object.assign({}, state, {
        content: action.content
      });
    default:
      return state;
  }
}
export default reducer;
