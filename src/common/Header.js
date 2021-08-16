import {React } from React;
import { Component } from 'react';
import logo from '../../assets/logo.svg';
import './header.css';


handleModal = () => {
    this.setState({
        modalIsOpen: true,
        value: 0,
        usernameRequired: "hello",
        username: "",
        loginPasswordRequired: "hello",
        loginPassword: "",
        firstnameRequired: "hello",
        firstname: "",
        lastnameRequired: "hello",
        lastname: "",
        emailRequired: "hello",
        email: "",
        registerPasswordRequired: "hello",
        registerPassword: "",
        contactRequired: "hello",
        contact: ""
    });
}

class Header extends Component{
    render (){
        return(
            <div>
 <header className="head">
                <img src={logo} className="movie-logo" alt="Movie Logo" />
                {!this.state.loggedIn ?
                        <div className="login-button">
                            <Button variant="contained" color="default" onClick={this.handleModal}>
                                Login
                            </Button>
                        </div>
                        :
                        <div className="login-button">
                            <Button variant="contained" color="default" onClick={this.handleLogout}>
                                Logout
                            </Button>
                        </div>
                    }
                     {this.props.showBookShowButton === "true" && !this.state.loggedIn
                        ? <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.handleModal}>
                                Book Show
                            </Button>
                        </div>
                        : ""
                    }

                    {this.props.showBookShowButton === "true" && this.state.loggedIn
                        ? <div className="bookshow-button">
                            <Link to={"/bookshow/" + this.props.id}>
                                <Button variant="contained" color="primary">
                                    Book Show
                                </Button>
                            </Link>
                        </div>
                        : ""
                    }

                </header>
            </div>
               
            
        )
    }
}