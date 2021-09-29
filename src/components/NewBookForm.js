import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const NewBookForm = () => {
  const categories = ['Action', 'Science Fiction', 'Economy', 'Romance'];

  const [form, setForm] = useState({
    id: '',
    title: '',
    author: '',
    category: 'Action',
    error: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const addNewBook = () => {
    const newBook = {
      id: uuidv4(),
      title: form.title,
      author: form.author,
      category: form.category.replace(/[-]/g, ' '),
      error: '',
    };

    if (newBook.title.length < 1) {
      newBook.error = 'Please introduce the title of the book';
      setForm(newBook);
    } else if (newBook.author < 1) {
      newBook.author = 'Anonymous';
      dispatch(addBook(newBook));
      setForm({
        id: '',
        title: '',
        author: '',
        category: 'Action',
        error: 'Author was set as "Anonymous"',
      });
    } else {
      dispatch(addBook(newBook));
      setForm({
        id: '',
        title: '',
        author: '',
        category: 'Action',
        error: '',
      });
    }
  };

  return (
    <form>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book author"
        name="author"
        value={form.author}
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
      <button type="button" onClick={addNewBook}>ADD BOOK</button>
      <br />
      <small>{form.error}</small>
    </form>
  );
};

export default NewBookForm;
