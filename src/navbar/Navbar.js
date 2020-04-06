import 'bulma/css/bulma.css';
import React, { Component } from 'react';


class Navbar extends Component {
	render() {
		return (
			<nav class="navbar is-light" role="navigation" aria-label="main navigation">
 				<div class="navbar-brand">
   					<a class="navbar-item" href="https://bulma.io">
      				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    				</a>
    				<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      				<span aria-hidden="true"></span>
      				<span aria-hidden="true"></span>
      				<span aria-hidden="true"></span>
    				</a>
  			</div>

				<div id="navbarBasicExample" class="navbar-menu">
					<div class="navbar-start">
						<a class="navbar-item">
							Home
						</a>
					</div>

					<div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons">
								<a class="button is-info">
									<strong>Log in</strong>
								</a>
								<a class="button is-primary">
									<strong>Sign up</strong>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar