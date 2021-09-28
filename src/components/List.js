import React, { useState } from 'react';
import Book from './Book';

const List = () => {
  const [bookList, setBookList] = useState([
    {
      id: 1,
      author: 'Example Author',
      title: 'Example Title',
      category: 'Action',
    },
  ]);

  const handleChange = () => setBookList([]);

  return (
    <ul>
      {bookList.map((book) => (
        <Book
          key={book.id}
          handleChange={handleChange}
          book={book}
        />
      ))}
    </ul>
  );
};

export default List;
