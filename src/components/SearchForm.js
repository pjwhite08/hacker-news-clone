import React from 'react'


const SearchForm = (props) => {
  return (
    <div>
      <form onSubmit={props.search}>
        <input 
          name="authorInput"
          type="text"
          value={props.authorInput} 
          onChange={props.handleChange} 
          placeholder="Search by author"
        />
        <input 
          name="dateInput"
          type="date"
          value={props.dateInput} 
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm;

/*import React from 'react'

export default function SearchForm() {
    return (
        <div>
            
        </div>
    )
}*/
