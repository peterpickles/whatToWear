import React from "react";


const Widget = props => {
    if(Object.keys(props.weather).length > 0){
        return (
            <div>
                <h2>{props.weather.calories}</h2>
                <h2>{props.weather.totalWeight}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <p>Async Issues</p>
            </div>
        )
    }
}

export default Widget