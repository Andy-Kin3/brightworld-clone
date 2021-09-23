import React from 'react'
import Footer from './Footer';
import Header from './Header';
import './Gift.css';

function Gift(props) {
    return (
        <div className="gift">
            <Header />
            <img className='needyimg' src="slogan.png" alt='head'/>
            <div className="slogan">
                SLOGAN
            </div>
            {/* <img className="gift_image" src='gift-logo.png' alt="okay"/> */}
            {/* <img className="bw_image" src='brightworld.jpeg' alt="okay"/> */}
            <p>
                <h1>The Need</h1>
                Increasing number of<br/>
                vulnerable and needy people<br/>
                within our communities who<br/>
                can not meet their basic<br/>
                needs and livelihood support.<br/>
                According to the United<br/>
                Nations Office for the<br/>
                Coordination of Humanitarian<br/>
                Affairs (OCHA), 4.4 million<br/>
                people need direct humanitarian<br/>
                assistance in Cameroon resulting<br/>
                from ongoing crisis.<br/>
                <img src="need1.png" alt="needy_pic" className="n_img"/>
                <h1>Overview</h1>
                Gift N_Connect is a strategic program of “Bright<br/>
                World”. Building from the vision of “Bright World”<br/>
                our actions of love through giving can truly brighten<br/>
                the world.<br/>
                The inspiration for “Gift N_Connect” is informed by<br/>
                the need for a community based organization that will<br/>
                respond to the needs of the community holistically<br/>
                <h1>Biblical Inspiration</h1>
                Matthew 25: 35-36<br/>
                For I was hungry, and you gave Me something to eat; I<br/>
                was thirsty, and you gave Me something to drink; I was<br/>
                a stranger, and you invited Me in; I was naked, and<br/>
                you clothed Me; I was sick, and you visited Me; I was<br/>
                in prison, and you came to Me.<br/>
                <h2 style={{ textAlign:"center" }}>Approach</h2>
                Increase Community Participation and Waste Reduction.
                <img src="approach.png" alt='participate' className="approach"/>
                <h1>Program Objective</h1>
                Enhance the resilience of
                individuals and communities
                through a prompt, trusted, relevant
                and context based emergency
                response strategy.
                <h2>Our Goal</h2>
                Providing prompt, trusted, relevant
                and context based livelihood
                assistance to identified individuals and
                communities in need and supporting
                them to address fragility, poverty and
                vulnerability to conflict and disaster.
                <h1>Donation Strategies</h1>
                <ul>
                    <li>House to house Collection</li>
                    <li>Centered Based Donations</li>
                    <li>Online Donation</li>
                </ul>
                <h1>Areas of intervention</h1>
                <ul>
                    <li>Water, Hygiene and Sanitation (WASH)</li>
                    <li>Food Security</li>
                    <li>Nonfood Items</li>
                    <li>Clothings</li>
                    <li>Education</li>
                    <li>Livelihoods</li>
                    <li>Nutrition</li>
                    <li>Health</li>
                    <li>Shelter</li>
                    <li>Social Fund</li>
                    <img src="gift-logo.png" alt="gift" className="g_logo"/>
                </ul>
            </p>
            <Footer />
        </div>
    )
}

export default Gift;
