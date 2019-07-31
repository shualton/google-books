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
}