import React from 'react';

const BookInput = () => {
  const categories = ['Action', 'Science Fiction', 'Economy', 'Romance'];

  return (
    <form>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book title"
        name="title"
      />
      <select name="category">
        {categories.map((category) => (
          <option
            key={category.replace(/[ ]/g, '-').toLowerCase()}
            value={category.replace(/[ ]/g, '-').toLowerCase()}
            name={category.replace(/[ ]/g, '-').toLowerCase()}
          >
            {category}
          </option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default BookInput;
