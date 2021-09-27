import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleChange } = props;
  const { author, title, category } = book;

  return (
    <li>
      <span>{author}</span>
      <span>{title}</span>
      <span>{category}</span>
      <button
        type="button"
        onClick={handleChange}
      >
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Book;
