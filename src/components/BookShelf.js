// React
import React, { Component } from 'react'

// Component
import Book from './Book'

class BookShelf extends Component {
	
	render() {
		return(
			<div className="bookshelf">
				
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
			
						{this.props.books.map((book, index) => (

                            <li key={index}>
                                <Book
                                    thumb={book.imageLinks ? book.imageLinks.thumbnail : `http://via.placeholder.com/128x193?text=No%20Cover`}
                                    title={book.title}
                                    author={book.authors}
                                    shelf={book.shelf}
                                    onUpdateBook={this.props.onUpdateBook}
                                    book={book}
                                />
                            </li>

                        ))}
					
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf;