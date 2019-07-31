import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container } from "../../components/Grid";
import { List, Items } from "../../components/List";
import Button from "../../components/Button";
import Header from "../../components/Header";
import API from "../../utils/API";

class Results extends Component {
    state = {
        books: [],
        target: "",
      };

      componentMount() {
        const data = this.props.location.data
        if (data && data.results.length > 0) {
    
          this.setState({
            books: data.results.filter((value, index) => index < 5),
            target: "_blank"
          });
        } else {
          this.setState({
          });
        }
      }
      saveBook = book => {
        API.saveBook(book)
          .then(res => {
            const currentBooks = this.state.books;
            const filterBooks = currentBooks.filter(book => book.id !== res.data.id);
            this.setState({
              books: filterBooks
            });
          })
          .catch(err => console.log(err));
      }

      render() {
        if (this.state.noResults) {
          return (
            <div>
              <Header>
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search for and annotate books of interest.</p>
                <hr className="my-4" />
                <p className="lead">
                  <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
                  <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
                </p>
              </Header>
              <Container>
                <Link to="/">No results - click here to search again.</Link>
              </Container>
            </div>
          )
        }
        return (
          <div>
            <Header>
              <h1 className="display-4">Google Book Searcher</h1>
              <hr className="my-4" />
              <p className="lead">
                <Link className="btn btn-default btn-lg" to="/" role="button">Search</Link>
                <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved</Link>
              </p>
            </Header>
            <Container>
              <h2>Search Results</h2>
              <List>
                {this.state.books.map((book, index) => (
                  <Items key={book.id}>
                    <div className="date-div">
                      <a
                        key={"" + index + book.id}
                        href={book.volumeInfo.infoLink}
                        target={this.state.target}
                      >
                        {book.volumeInfo.title}
                      </a>
                        <p>Written By {book.volumeInfo.authors[0]}</p>
                      <p>
                      <img align="left" style={{paddingRight:10}}
                        src={book.volumeInfo.imageLinks.smallThumbnail} alt="new"
                      />
                        {book.volumeInfo.description}
                      </p>
                    </div>
                    <div className="book-btn-div">
                      <Button
                        key={"" + book.id + index}
                        btntype="info"
                        disabled={book.volumeInfo.infoLink === "/"}
                        onClick={() => this.saveBook({
                          title: book.volumeInfo.title,
                          author: book.volumeInfo.authors[0],
                          description: book.volumeInfo.description,
                          image: book.volumeInfo.imageLinks.smallThumbnail,
                          link: book.volumeInfo.infoLink,
                          _id: book.id
                        })}
                      >
                        Save
                      </Button>
                    </div>
                  </Items>
                ))}
              </List>
            </Container>
          </div>
        );
      }
}

export default Results;