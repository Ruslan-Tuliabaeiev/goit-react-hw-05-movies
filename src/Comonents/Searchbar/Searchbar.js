import  { useState } from 'react';
//import style from '../style.module.css';

export function Searchbar({onSubmit}) {
const [serch, setSerch] = useState('')

 const  handleSubmit = event => {
     event.preventDefault();     
if(serch.trim() === ''){
  alert('Введите название поиска')
  return;
}
     onSubmit(serch);
     setSerch('')
   }
   const handleNameChange = event => {
    setSerch(event.currentTarget.value.toLowerCase() )
   }


  return (

<header >
  <form  onSubmit={handleSubmit}>
    <button type="submit" >
      <span >Search</span> 
    </button>

    <input 
      // class="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos" 
      name="serch"
      value={serch}
      onChange={handleNameChange}

    />
  </form>
</header>
)
}

  








