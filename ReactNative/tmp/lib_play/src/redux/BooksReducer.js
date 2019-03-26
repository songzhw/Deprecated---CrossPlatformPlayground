export const FETCH_BOOKS = "FETCH_BOOKS";
export const createFetchBooksAction = (books) => ({
  type: FETCH_BOOKS,
  payload: books
});

const initState = { books: "" };

export default (state = initState, action) => {
  if (FETCH_BOOKS === action.type) {
    return { ...state, books: action.payload };
  }
  return state;
}
