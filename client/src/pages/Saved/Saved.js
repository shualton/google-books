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
    
}