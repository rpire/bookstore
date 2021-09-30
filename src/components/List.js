import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBookList } from '../redux/books/books';
import Book from './Book';

const List = () => {
  const books = useSelector((state) => state.bookList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookList());
  }, [dispatch]);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default List;
