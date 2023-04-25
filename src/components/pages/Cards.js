import React from 'react';

export default function Card() {
    const cardStyle = {
        width: '30rem',
        display: 'block',
        padding: '1rem',
        margin: 'auto'
        
    };

    return (
        <div className="container-port">
            <div class="card" style={cardStyle}>
                <p>View the Streaming Locator Website</p>
                <a href="https://sifrult.github.io/streaming_locator/">
                    <img
                        className="card-img-top"
                        src='./Streaming.gif'
                        alt="Card cap"
                    />
                </a>
            </div>
            <div className="card" style={cardStyle}>
                <p>View the Doggy Daycare Website</p>
                <a href="https://gentle-fjord-00735.herokuapp.com/">
                    <img
                        className="card-img-top"
                        src='./Daycare.png'
                        alt="Card cap"
                    />
                </a>
            </div>
            <div className="card" style={cardStyle}>
                <p>View the Ollisander's Website</p>
                <a href="https://wizard-wands-production.up.railway.app/">
                    <img
                        className="card-img-top"
                        src='./Wizards.png'
                        alt="Card cap"
                        height={'80%'}
                    />
                </a>
            </div>
        </div>

    );
}
