import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { useHistory } from 'react-router';

function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <header className="App-header">
                <img src="brightworld.jpeg" className="App-logo" alt="logo" />
                <div className="search_tools">
                    <input type="text" className="search"/>
                    <SearchIcon className="searchicon" />
                </div>
            </header>
            <div className="header_nav">
                <div className="dropdown_home">
                    <button className="dropbtn_home" onClick={() => history.push('/')}>Home</button>
                    <div className="dropdown_content_home">
                    </div>
                </div>
                <div className="dropdown_about">
                    <button className="dropbtn_about" onClick={() => history.push('/about')}>About Us</button>
                    <div className="dropdown_content_about">
                        <button className='mission' href="#mission" onClick={() => history.push('/about')}>Mission</button>
                        <button className='vision' href="#vision" onClick={() => history.push('/about')}>Vision</button>
                        <button className="faith" href="#faith" onClick={() => history.push('/about')}>Statement Of Faith</button>
                        <button className="goals" href="#goals" onClick={() => history.push('/about')}>Strategic Goals</button>
                        <button className="team">Our Team</button>
                    </div>
                </div>
                <div className="dropdown_areas">
                    <button className="dropbtn_areas">Areas Of Intervention</button>
                    <div className="dropdown_content_areas">
                        <button className="leadership">Leadership Development and Capacity Building</button>
                        <button className="education">Education and Training</button>
                        <button className="health">Health</button>
                        <button className="economic">Economic Empowerment and Entrepreneurship</button>
                        <button className="job">Employment and Job Creation</button>
                        <button className="charity">Humanitarian and Charity</button>
                        <button className="vol">Volunteerism and Community Services</button>
                    </div>
                </div>
                <div className="dropdown_programs">
                    <button className="dropbtn_programs">Our Programs</button>
                    <div className="dropdown_content_programs">
                        <button className="connect">Gift n_Connect</button>
                        <button className="farm">Green Farm Project</button>
                        <button className="youth">Youth Education Empowerment and Child Development Programs</button>
                        <button className="touch">Touch Life Community Services (TLCS)</button>
                        <button className="y_service">Christian Youth Services (CYS)</button>
                    </div>
                </div>
                <div className="dropdown_media">
                    <button className="dropbtn_media">Media</button>
                    <div className="dropdown_content_media">
                        <button className="vid">Videos</button>
                        <button className="pic">Pictures</button>
                    </div>
                </div>
                <div className="dropdown_contact">
                    <button className="dropbtn_contact">Contact</button>
                    <div className="dropdown_content_contact">
                        <a href="">Logo</a>
                    </div>
                </div>
                <div className="dropdown_donate">
                    <button className="dropbtn_donate">Donate</button>
                    <div className="dropdown_content_donate">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
