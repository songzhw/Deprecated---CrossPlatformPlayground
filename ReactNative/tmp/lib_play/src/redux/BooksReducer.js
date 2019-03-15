export const FETCH_BOOKS = "FETCH_BOOKS";
export const createFetchBooksAction = (books) => ({
  type: FETCH_BOOKS,
  payload: books
});

const initState = { books: "" };

export default (state = initState, action) => {
  if (FETCH_BOOKS === action.type) {
    console.log(`szw reducer3 ${JSON.stringify(action)}`);
    return { ...state, books: action.payload };
  }
  return state;
}
