import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Header from './Header';
import Services from './Services';
import Footer from './Footer';
import Colors from "./Colors";

function Home() {
    return (
        <div className="home">
            <Header />
            <Colors />
            <div className='home_container'>
                <div className="home_row">
                    <Link to="/gift" style={{textDecoration: "none"}}><Services id='1'
                        item={"Gift_n Connect"} image={'needy.jpg'} title={"Gift_n Connect"}
                    />
                    </Link>
                    <Link to="/green_farm" style={{textDecoration: "none"}}>
                    <Services id='2' item={"Green Farm Project"} image={'green.jpeg'} title={"Green Farm Project"}
                    />
                    </Link>
                    <Link to="/youth_education" style={{textDecoration: "none"}}>
                    <Services id='3' item={"Youth Education Empowerment and Child Development Program"} image={'empowerment.jpeg'} title={"Youth Education Empowerment and Child Development Program"}
                    />
                    </Link>
                </div>
                <div className="home_row">
                    <Link to="touch_life" style={{textDecoration: "none"}}>
                    <Services id='4' item={'Touch Life Community Services (TLCS)'} image={'community.jpg'} title={'Touch Life Community Service (TLCS)'} />
                    </Link>
                    <Link to="christian_youth" style={{textDecoration: "none"}}>
                    <Services id='4' item={'Christian Youth Service (CYS)'} image={'youths.jpg'} title={'Christian Youth Service (CYS)'} />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
