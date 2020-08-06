import React, { Component } from 'react';
import '../scss/_search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="app-input">
                <input type="text" className="form-control input-search" placeholder="Username"/>
                <div className="append-text"><i className="fas fa-search mr-1"></i> Tìm</div>
            </div>
        );
    }
}
 
export default Search;