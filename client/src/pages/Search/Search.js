import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormButton } from "../../components/Form";

class Search extends Component {
    state = {
        title: "",
        toResults: false,
        results: []
    };

    inputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
    });
    }

    formSubmit = event => {
        if (this.state.title) {
            const title = this.state.title.trim();
            API.getNewBooks(title)
              .then(res => {
                this.setState({
                  toResults: true,
                  results: res.data.items
                });
              })
              .catch(err => console.log(err));
          }
    };

    render() {
        if (this.state.toResults) {
          return <Redirect to={{
            pathname: "/results",
            data: { results: this.state.results }
          }} />
        }
        return (
          <div>
            <Header>
              <h1 className="display-4">(React) Google Books Search</h1>
              <p className="lead">Search for and save books of interest.</p>
              <hr className="my-4" />
              <p className="lead">
                <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
                <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
              </p>
            </Header>
            <Container>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  label="Book Title"
                  placeholder="Search Book Title (required)"
                />
                <FormButton         
                  onClick={this.handleFormSubmit}
                  className="btn btn-info"
                >
                  Search
                </FormButton>
              </form>
            </Container>
          </div>
        );
    }
}

export default Search;