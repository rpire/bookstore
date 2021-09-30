import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    book: {
      id,
      title,
      category,
    },
  } = props;

  const dispatch = useDispatch();

  const HandleRemove = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="book flex-box">
      <span>{title}</span>
      <span>{category}</span>
      <button
        type="button"
        onClick={HandleRemove}
      >
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
