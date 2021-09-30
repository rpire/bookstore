const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOK_LIST = 'bookStore/books/LOAD_BOOK_LIST';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK_LIST:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const setBookList = (payload) => ({
  type:  SET_BOOK_LIST,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const loadBookList = () => async (dispatch) => {
  const bookList = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hQEyeWlSMsWzmo9ZsANn/books')
    .then((response) => response.json());
    const booksID = Object.keys(bookList);
    const formatedBooks = [];
    booksID.map((key) => formatedBooks.push({
        id: key,
        title: bookList[key][0].title,
        category: bookList[key][0].category,
      }));
  dispatch(setBookList(formatedBooks));
};

export const postBook = (newBook) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hQEyeWlSMsWzmo9ZsANn/books', {
    method: 'POST',
    body: JSON.stringify({
        item_id: newBook.id,
        title: newBook.title,
        category: newBook.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hQEyeWlSMsWzmo9ZsANn/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
        item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

export default booksReducer;
