import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const {
    id,
    author,
    title,
    category,
  } = book;

  const dispatch = useDispatch();

  const HandleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <span>{author}</span>
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
