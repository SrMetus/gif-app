import { useState } from 'react';
import './styles.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }


  return (
    <>
        <h1>Gif App</h1>
        <AddCategory 
          onNewCategory={(e) => onAddCategory(e)}
        />
        {categories.map(category => (
            <GifGrid 
              key={category}
              category={category} 
            />
        ))}
    </>
  )
}
