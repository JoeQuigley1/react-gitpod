import React from 'react'
import Book from './Books'
function RenderingLists() {
    const bookList = [
        'to kill a monkingbird',
        'the grete gastby',
        'the cathcher in the rye'
    ]
    const books = [
        {
            title: 'to kill a monkingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the grete gastby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the cathcher in the rye' ,
            author: 'j.d salinger',
            pages: 234
        }

    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return <div key={book.title}>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            })
        }
        <hr />
        {
            books.map(book => {
                return <Book key={book.title} book={book} />
            })
        }
    </div>
  )
}

export default RenderingLists