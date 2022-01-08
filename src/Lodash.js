//Filter
// _.filter(collection, [predicate=_.identity])
import _ from 'lodash';
// import { filter } from 'react-lodash';

import React from 'react'

export default function Lodash() {
    var users =_.filter([
        { 'name': 'seema', 'age': "21", 'active': 'true' },
        { 'name': 'maitry', 'age': "20", 'active': 'default' },
        { 'name': 'kavya', 'age': "23", 'active': 'flase' },
        { 'name': 'nishit', 'age': "24", 'active': 'null' }
    ])
    return (
        <div>
            {users}
            
        </div>
    )
}
