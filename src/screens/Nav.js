import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <div class="container">
        <a class="navbar-brand" href="#">MisingDonam</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <Link class=" nav-item nav-link active" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" to="/Home" >Home</Link>
                </li>
                <li class="nav-item">
                    <Link class=" nav-item nav-link active" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" to="/login">Log in</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-item nav-link active" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" to="/signin">sign in</Link>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
  </div>
  )
}
