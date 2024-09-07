import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [...categories, inputValue])
        setInputValue('');
        onNewCategory(inputValue.trim())
    }
  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
