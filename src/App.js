// React
import React from 'react'

// React router
import { Route } from 'react-router-dom'

// Components
import Search from './components/Search'
import MainPage from './components/MainPage'

// API
import * as BooksAPI from './BooksAPI'

// Styling
import './App.css'

class BooksApp extends React.Component {
	
  state = {
    books: []
  }
  
  // Sets the book state after the components added to the DOM
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
  }

  // Moving book from one shelf to another shelf
  updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf

            // Set the state
            this.setState((state) => ({
                books: state.books.filter((b) => (
                    b.id !== book.id
                )).concat(shelf !== "none" ? [ book ]: [])
            }))
        })
    }

  // Renders the app
  render() {
    return (
      <div className="app">
		
		<Route path='/search' render={({ history }) => (
          <Search books={this.state.books}
				  shelf={this.state.shelf}
				  onUpdateBook={this.updateBookShelf}
		  />
		)}/>
     
		<Route exact path='/' render={() => (
          <MainPage books={this.state.books}
					shelf={this.state.shelf}
					onUpdateBook={this.updateBookShelf}
		  />
		)}/>
		
      </div>
	)
  }
}

export default BooksApp
