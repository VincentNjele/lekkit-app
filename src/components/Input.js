import React from 'react'

export const Input = ({HandleOnChange, searchValue,searchId,search,placeholder,HandleSubmit,input}) => {
  return (

    <div className={input}>
    
    <form onSubmit={HandleSubmit}>
        <input 
        id= {searchId}
        type= {search}
        onChange={HandleOnChange}
        value = {searchValue}
        placeholder = {placeholder}
        
        />
    </form>
  
    
    </div>
  )
}
