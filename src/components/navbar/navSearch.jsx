import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearch } from '../../context/searchContext';

const NavSearch = ({ searchIsOpen, setSearchIsOpen }) => {
  const searchInputRef = useRef();
  const { setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [prevSearch, setPrevSearch] = useState('');


  const handleSearch = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();

    if (term && term !== prevSearch) {
      setSearchTerm(term);
      navigate('/blog/blog-rightbar');
      setPrevSearch(term);
      searchInputRef.current.value = '';
      setSearchIsOpen(false)
    }
  };

  useEffect(() => {
    return () => {
      setPrevSearch('');
    }
  }, [setPrevSearch])

  return (
    <AnimatePresence>
      {searchIsOpen && (
        <motion.form
          className="w-full h-auto px-8 py-6 bg-white flex justify-between gap-8 opacity-0 absolute top-0 left-0 z-[5]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSearch}
        >
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            className="w-full h-12 outline-transparent outline-0 border-none bg-transparent text-lg font-medium text-gray-500 rounded-md pl-3 placeholder:text-gray-500"
          />
          <button className='text-xl font-medium text-stone-600 hover:text-accent duration-200 transition-colors hover:cursor-pointer' onClick={() => setSearchIsOpen(false)}>X</button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default NavSearch;
