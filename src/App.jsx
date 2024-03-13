import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmark, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blogs => {
    const newBookmarks = [...bookmark, blogs];
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (id, time) => {
    console.log(time)
    setReadingTime(readingTime + time)

    const remainingBookmarks = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (

    <>
      <Header></Header>
      <main className='w-11/12 mx-auto lg:flex mt-10'>
        <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmark} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
