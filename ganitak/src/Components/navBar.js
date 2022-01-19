import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import '../App.css';
import { Link } from 'react-router-dom';


class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id = 'IDNavBar'>

                <div className='NavBar'>
                    NAVBAR CONTENT
                </div>
            
            
                <div id = 'nav-links-container'>
                    
                    <Link to='/experiences'>
                        <div className = 'nav-links'>
                            Experiences
                        </div>
                    </Link>

                    <div className = 'nav-links'>
                        Projects
                    </div>

                    <div className = 'nav-links'>
                        Skills
                    </div>

                    <div className = 'nav-links'>
                        Resume
                    </div>

                </div>
                
            </div>
        );
    }
}


export default navBar;