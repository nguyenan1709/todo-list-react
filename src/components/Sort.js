import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <button className="btn btn-success btn-sm ml-4">
               <i className="fas fa-sort-amount-down-alt"></i> Sắp xếp
            </button>
        );
    }
}
 
export default Sort;