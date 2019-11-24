import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
    <React.Fragment>


<title>Track That Job</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://code.angularjs.org/1.4.3/angular.js"></script>

<link rel="stylesheet" href="index.css"/>

<nav class="navbar fixed-top navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="index.html">Logo</a>
        </div>
        
       <ul class="nav navbar-nav">
            <li><a href="index.html">Home</a></li>
        </ul>
        
        <ul class="nav navbar-nav navbar-right">
            <li><a href="index.html">Home</a></li>
            <li><a href="tracker.html">Track That Job</a></li>
            <li><a href="profile.html">My Profile</a></li>
        </ul>
        
    </div>

</nav>
</React.Fragment>
    )
}

export default Header;
