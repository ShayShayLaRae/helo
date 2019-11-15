import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {withRouter} from 'react-router';

export default class Nav extends Component {
   render(){
    //    this.props.location.pathname='/'
       return(
           <div>
               Nav
               <Link to='/dashboard'>
               <button>Home</button>
               </Link>
               <Link to='/new'>
               <button>New Post</button>
               </Link>
               <Link to='/'>
               <button>Logout</button>
               </Link>
           </div>
       )
   }
}
//Todo nav should not render if the current view is auth. use "location obj" found on props (this.props.location.pathname) to check the view if its on '/' the nav should not return anything. location obj is on props through react-router