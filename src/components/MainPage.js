// React
import React, { Component } from 'react'

// React router
import { Link } from 'react-router-dom'

// Component
import BookShelf from './BookShelf'

// Renders the bookshelves 
class MainPage extends Component {
	
	render() {
		return(
		  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
			
            <div className="list-books-content">
              <BookShelf name="Currently Reading"
						 books={this.props.books.filter((book) => book.shelf === 'currentlyReading')}
						 onUpdateBook={this.props.onUpdateBook}
			  />
			  <BookShelf name="Want to Read"
						 books={this.props.books.filter((book) => book.shelf === 'wantToRead')}
						 onUpdateBook={this.props.onUpdateBook}
			  />
			  <BookShelf name="Read"
						 books={this.props.books.filter((book) => book.shelf === 'read')}
						 onUpdateBook={this.props.onUpdateBook}
			  />
            </div>
			
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
		)
	}
}

export default MainPage;