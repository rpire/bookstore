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
      <div className="book-info">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <span className="book-author">Anonymous</span>
        <ul className="options flex-box">
          <li>Comment</li>
          <li>
            <button
              type="button"
              onClick={HandleRemove}
              className="remove-button"
            >
              Remove
            </button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-progress flex-box">
        <div className="progress" />
        <div className="progress-info flex-box">
          <span className="percentage">0%</span>
          <span className="percentage-text">Progress</span>
        </div>
      </div>
      <div className="update-progress flex-box">
        <span>Current chapter</span>
        <span className="current">Introduction</span>
        <button
          type="button"
          className="update-button"
        >
          Update Progress
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
