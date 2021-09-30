import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const NewBookForm = () => {
  const categories = ['Action', 'Science Fiction', 'Economy', 'Romance'];
  const initialForm = {
    id: '',
    title: '',
    category: 'Action',
  };

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const handleChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: form.title,
      category: form.category.replace(/[-]/g, ' '),
    };

    if (newBook.title.length < 1) {
      setError('Please introduce the title of the book');
      setForm(newBook);
    } else if (newBook.title.length >= 30) {
      setError('');
      newBook.title = newBook.title.substring(0, 30) + '...';
      dispatch(postBook(newBook));
      setForm(initialForm);
    } else {
      setError('');
      dispatch(postBook(newBook));
      setForm(initialForm);
    }
  };

  return (
    <form onSubmit={addNewBook}>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option
            key={category.replace(/[ ]/g, '-').toLowerCase()}
            value={category.replace(/[ ]/g, '-')}
            name={category.replace(/[ ]/g, '-').toLowerCase()}
          >
            {category}
          </option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
      <br />
      <small>{error}</small>
    </form>
  );
};

export default NewBookForm;
