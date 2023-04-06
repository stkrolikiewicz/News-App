import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Footer = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(timer)
    }
  });

  const newsCount = useSelector((state: RootState) => state.newsCount.value)

  return (
    <footer className='border-t flex items-center justify-between p-6 lg:px-8'>
      <h1>{date.toLocaleTimeString()}</h1>
      <h1>number of articles on the page: {newsCount}</h1>
    </footer>
  )
}

export default Footer