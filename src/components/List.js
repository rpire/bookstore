import { useSelector } from 'react-redux';
import Book from './Book';

const List = () => {
  const books = useSelector(state => state.bookList);

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
