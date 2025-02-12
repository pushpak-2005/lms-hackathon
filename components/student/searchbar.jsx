import React, { useState } from 'react';
import { assets } from '../../src/assets/assets';
import { useNavigate } from 'react-router-dom';

function Searchbar({data}) { 

    const navigate = useNavigate()
    const [input, setInput] = useState(data ? data: '')
    const onSearchHandler = (e) => {
          e.preventDefault()
          navigate('/course-list/' + input)
    }


  return (
    <div className="pt-4 flex justify-center items-center">
      <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/80 rounded  '>
        <img src={assets.search_icon} alt="" className='md:w-auto w-10 px-3' />
        <input onChange={e => setInput(e.target.value)} value={input}
         type='text' placeholder='Search the Course Here' className='h-full w-full outline-none text-gray-500/80'></input>
        <button type='submit' className='bg-emerald-800 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
        </form>
    </div>
  );
}

export default Searchbar;