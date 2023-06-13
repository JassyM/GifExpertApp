import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Evita que recargue la página cuando se da enter en el campo de búsqueda
    const value = inputValue.trim();
    if (value.length <= 1) return;
    onNewCategory(value);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChanged}
        // onChange={ (event) => onInputChanged(event) }
      />
    </form>
  );
};
