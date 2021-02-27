import React, { Component } from "react";
import tableHeader from "./tableHeader";
import TableBody from "./tableBody";
import API from "../utils/API";

class TableResult extends Component {
    state = {
        search = "",
        results = []
    };

    componentDidMount() {
        this.getResults();
    }

    getResults = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    }

}
