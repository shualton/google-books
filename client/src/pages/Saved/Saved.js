import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { List, Items } from "../../components/List";
import Header from "../../components/Header";
import API from "../../utils/API";
import Button from "../../components/Button";

class Saved extends Component {
    state = {
        books: [],
        target: "",
      };

    componentMount() {
        this.getSaved();
      }
    
    getSaved = () => {
    API.getSaved()
        .then(res => {
        if (res.data.length > 0) {
            this.setState({
            books: res.data,
            target: "_blank"
            });
        } else {
            this.setState({
            noResults: true
            });
        }
        })
        .catch(err => console.log(err));
      }
    
    deleteBook = id => {
    API.deleteBook(id)
        .then(res => this.getSavedBooks())
        .catch(err => console.log(err));
      }
    
    render() {
    if (this.state.noResults) {
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
            <Link to="/">Empty</Link>
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
          <h2>Saved Books</h2>
          <List>
            {this.state.books.map(book => (
              <Items key={book._id}>
                <div className="date-div">
                  <a
                    key={book._id + "link"}
                    href={book.link}
                    target={this.state.target}
                  >
                    {book.title}
                  </a>
                  <p>Written By {book.author}</p>
                  <p>
                  <img align="left" style={{paddingRight:10}}
                    src={book.image} alt="new"
                  />
                    {book.description}
                  </p>
                </div>
                <div className="book-btn-div">
                  <Button
                    key={book._id + "btn"}
                    btntype="info"
                    id={book._id}
                    disabled={book.link === "/"}
                    onClick={() => this.deleteBook(book._id)}
                  >
                    Delete
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

export default Saved;