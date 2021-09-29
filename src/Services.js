import React from 'react'
// import { useStateValue } from './StateProvider'
import "./Services.css"

function Services(props) {
    // const dispatch = useStateValue();
    // const addService = () => {
    //     dispatch({
    //         item:{
    //             id:props.id,
    //             title:props.title,
    //             image:props.image,
    //         }
    //     });
    // };
    return(
        <div className="services">
            <div className="service_info">
                <p>{props.item}</p>
            </div>
            <img src={props.image} alt="service"/>
            {/* <button onClick={addService}>MORE</button> */}
        </div>
    )
}

export default Services
