import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchResults from '../components/SearchResults';
import { debounce } from "lodash"

function Home() {
  const [searchInput, setSearchInput] = useState('')

  const debouncedSearch = useRef(debounce((text) => {
    setSearchInput(text);
  }, 300)).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch])

  return (
    <Layout>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold mb-3'>Welcome to gnNews!</h1>
        <h2 className='text-xl font-normal'>Search something in general search or choose top headlines for a specific country! </h2>
      </div>
      <input type='search' placeholder='Enter your search' className='p-3 border rounded-md' onChange={handleChange} />
      <SearchResults searchInput={searchInput} />
    </Layout >
  );
}

export default Home;