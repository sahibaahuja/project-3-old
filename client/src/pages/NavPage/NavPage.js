import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, Select, FormBtn } from '../../components/Form';
import AuthContext from '../../contexts/AuthContext';

import '../NavPage/navpage.css'

// import img from '../Images/img.jpg';
import jumbo from '../Images/jumbo.jpg';
import jumbo1 from '../Images/jumbo1.jpg';
import jumbo3 from '../Images/jumbo3.jpg';
import jumbo4 from '../Images/jumbo4.jpg';
import jumbo6 from '../Images/jumbo6.jpg';
import jumbo11 from '../Images/jumbo11.jpg';

class NavPage extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="container-navpage">
                        <div className="box">
                            {/* <Link to='/'> */}
                            <img src={jumbo1} alt="Drinks" />
                            {/* </Link> */}
                            <span>Explore</span>
                        </div>
                        <div className="box">
                            {/* <Link to='/'> */}
                            <img src={jumbo3} alt="Drinks" />
                            {/* </Link> */}
                            <span>Create</span>
                        </div>
                        <div className="box">
                            {/* <Link to='/'> */}
                            <img src={jumbo4} alt="Drinks" />
                            {/* </Link> */}
                            <span>Search</span>
                        </div>
                        <div className="box">
                            {/* <Link to='/'> */}
                            <img src={jumbo6} alt="Drinks" />
                            {/* </Link> */}
                            <span>Cafe</span>
                        </div>
                        <div className="box">
                            {/* <Link to='/'> */}
                            <img src={jumbo11} alt="Drinks" />
                            {/* </Link> */}
                            <span>Bar</span>
                        </div>
                        <div className="box">
                            {/* <Link to='/'> */}
                            <img src={jumbo} alt="Drinks" />
                            {/* </Link> */}
                            <span>View</span>
                        </div>
                        {/* </Link>
                            <div className="box">
                            // <Link to='/'>
                                <img src={jumbo1} alt="Drinks" />
                                // </Link>
                                <span>Hover</span>
                            </div>
                        <div className="box">
                        <Link to='/'>
                                <img src={jumbo3} alt="Drinks" />
                                <span>Effect</span>S
                            </div> */}
                    </div>
                </div>
            </>
        );
    }
}

export default NavPage;