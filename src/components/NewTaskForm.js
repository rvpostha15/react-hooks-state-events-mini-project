import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  

  // New Category Array Includes All Categories Except All
  const formCategories = categories.filter((category) => category !== 'All')

  const categoryOption = formCategories.map((category)=> (
    <option key={category}>{category}</option>
  ))

  const [category, setCategory]= useState('Code')
  const [text, setText]= useState('')

  const handleInput = (e) => {
    setText(e.target.value)
  }
  // console.log(text)

  const handleSelect = (e) => {
    setCategory(e.target.value)
  }
  // console.log(category)

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text, category})
    setCategory('Code')
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="new-task-form"
    >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={handleInput} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category}
          onChange={handleSelect}
        >
          {categoryOption}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
