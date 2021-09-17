import React from 'react';
import './Home.css'
import Header from './Header';
import Services from './Services';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className='home_container'>
                <div className="home_row">
                    <Services id='1'
                        item={"Gift_n Connect"} image={'needy.jpg'} title={"Gift_n Connect"}
                    />
                    <Services id='2' item={"Green Farm Project"} image={'green.jpeg'} title={"Green Farm Project"}
                    />
                    <Services id='3' item={"Youth Education Empowerment and Child Development Program"} image={'empowerment.jpeg'} title={"Youth Education Empowerment and Child Development Program"}
                    />
                </div>
                <div className="home_row">
                    <Services id='4' item={'Touch Life Community Services (TLCS)'} image={'community.jpg'} title={'Touch Life Community Service (TLCS)'} />
                    <Services id='4' item={'Christian Youth Service (CYS)'} image={'youths.jpg'} title={'Christian Youth Service (CYS)'} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
