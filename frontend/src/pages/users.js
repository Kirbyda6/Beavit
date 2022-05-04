import React from "react";
import { Link } from "react-router-dom";

function Users() {
    return(
        <div>
            <button>Add User</button>
            <Link to='/'>Homepage</Link>
            <table id='userTable'>
                <th>Username</th><th>Join Date</th><th>Thumbs Up Count</th><th>Thumbs Down Count</th>
                <tr><td>Billy</td><td>2017-06-15</td><td>853</td><td>25</td></tr>
                <tr><td>Bob</td><td>2015-09-01</td><td>1013</td><td>16</td></tr>
                <tr><td>Jill</td><td>2020-08-17</td><td>215</td><td>8</td></tr>
                <tr><td>Jane</td><td>2018-06-21</td><td>912</td><td>9</td></tr>
            </table>
        </div>
    );
}

export default Users;