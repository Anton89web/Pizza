import React, {useCallback, useRef, useState} from 'react';
import debounce from 'lodash.debounce'

const Search = ({setValue}) => {
  const [inputValue, setInputValue] = useState('')
  const ref = useRef()

  const focusSearch = () => {
    ref.current.focus()
    setInputValue('')
    setValue("")
  }

  const searchDebounce = useCallback(
    debounce((e) => {
      setValue(e)
      console.log(e)
    }, 300),
    []
  )


  return (
    <div className="Search_root__eiX89">
      <svg className="Search_icon__XMmYc" enableBackground="new 0 0 32 32" id="EditableLine" version="1.1"
           viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round"
                strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></circle>
        <line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
              strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"></line>
      </svg>
      <input ref={ref} className="Search_input__klILD"
             onChange={e => {
               setInputValue(e.target.value)
               searchDebounce(e.target.value)
             }}
             placeholder="Поиск пиццы..."
             value={inputValue}/>
      {inputValue &&
      <svg onClick={() => focusSearch()} className="Search_clearIcon__eIw10" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
      </svg>}
    </div>
  );
};

export default Search;