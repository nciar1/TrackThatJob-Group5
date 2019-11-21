import React from 'react'

export const NavBar = () => (
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
            <a class="navbar-brand" href="#">Logo</a>
        </div>
        
       <ul class="nav navbar-nav">
            <li><a href="#">Home</a></li>
        </ul>
        
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li><a href="./AppTracker">Track That Job</a></li>
            <li><a href="./MyProfile">My Profile</a></li>
        </ul>
        
    </div>

</nav>
</React.Fragment>

)
