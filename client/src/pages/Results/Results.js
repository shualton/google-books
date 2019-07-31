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
        noResults: false
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
            noResults: true
          });
        }
      }
}