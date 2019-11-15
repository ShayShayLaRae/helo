import React, {Component} from 'react';
import axios from 'axios';

export default class Dash extends Component {
    constructor(){
        super();
        this.state={users:[]}
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers=() => {
        axios.get('http://localhost:6660/dashboard')
        .then(results => {
            this.setState({
                users: results.data
            })
        })
    }
   render(){
 
       return(
           <div>
               
           </div>
       )
   }
}