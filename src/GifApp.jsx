import { useState } from 'react';
import './styles.css';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
  const [categories, setCategories] = useState(['F1']);

  const onAddCategory = () =>{
    setCategories([...categories, 'Valorant']);
    // setCategories(['Valorant,', ...setCategories]); para colocar al principio
    // setCategories(cat => [...cat, 'Valorant']);
  }


  return (
    <>
        <h1>Gif App</h1>
        <AddCategory />
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>;
          })}
        </ol>
    </>
  )
}
