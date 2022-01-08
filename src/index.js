import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//  import Lodash from './Lodash'
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <React.StrictMode> 
  <Router>
    <App />     {/* <Lodash/> */}
   </Router>,
 </React.StrictMode>, 
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import _ from 'lodash'

// import { results } from 'lodash-es';
// var users = [
//   { 'user': 'barney', 'age': 36, 'active': true },
//   { 'user': 'fred',   'age': 40, 'active': false }
// ];
 
// _.filter(users, function(o) { return !o.active; });

// var users =[
  // { 'name': 'seema', 'age': "21", 'active': 'true' },
  // { 'name': 'maitry', 'age': "20", 'active': 'default' },
  // { 'name': 'kavya', 'age': "23", 'active': 'false' },
  // { 'name': 'nishit', 'age': "24", 'active': 'null' }
// ]
// var results=_.filter(users , function(o) {return !o.active;});
// var result = _.filter(users, { 'age': 23, 'active': false });
// console.log(results)
// function square(n) {
//   return n * n;
// }
 
// _.map([4, 8], square);
// console.log(square);