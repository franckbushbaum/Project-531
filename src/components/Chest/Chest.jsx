import React, { useState } from 'react';
import './Chest.css';
import { useHistory } from 'react-router';

function Chest(){

    const history = useHistory();

    const handleClick = (event) => {
        console.log('in handleClick', event.target.className)
        switch (event.target.className){
            case 'back-button':
                return history.push('/user')
                break;
            case 'new-button':
                history.push('/three')
                break;
        }
    }

    return(
        <>
        <div className="container">
        <div className="archive-button">
                    <button >Archive</button>
                </div>
            <div className="header">
                <div className="header-title">
                    {/* GET route to post last workout */}
                    <h1>CHEST</h1>
                </div>
            </div>
            <div className="last-workout">
                LAST WORKOUT:Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusantium. Aliquam expedita eum possimus. Eius voluptates, rem inventore voluptatibus 
                beatae quibusdam earum nihil labore non magni quidem nobis cumque iure reiciendis quo cum dolorem quisquam mollitia aut soluta 
                dolore minima, molestiae neque autem. Possimus temporibus, aliquam sapiente cumque adipisci in recusandae, natus voluptates 
                accusantium dolores, laudantium reiciendis. Quae dignissimos modi tempora harum repellat? Sapiente alias rem doloremque aperiam 
                blanditiis maxime porro laboriosam nesciunt iusto molestias atque id, magni animi perspiciatis. Beatae reprehenderit ullam quaerat 
                pariatur consequatur dolorum harum non corporis, quam distinctio temporibus praesentium architecto quidem numquam quae nostrum 
                maxime?
            </div>
            <div className="current">ONE REP MAX: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusantium. Aliquam expedita eum possimus. Eius voluptates, rem inventore voluptatibus 
                beatae quibusdam earum nihil labore non magni quidem nobis cumque iure reiciendis quo cum dolorem quisquam mollitia aut soluta 
                dolore minima, molestiae neque autem. Possimus temporibus, aliquam sapiente cumque adipisci in recusandae, natus voluptates 
                accusantium dolores, laudantium reiciendis. Quae dignissimos modi tempora harum repellat? Sapiente alias rem doloremque aperiam 
                blanditiis maxime porro laboriosam nesciunt iusto molestias atque id, magni animi perspiciatis. Beatae reprehenderit ullam quaerat 
                pariatur consequatur dolorum harum non corporis, quam distinctio temporibus praesentium architecto quidem numquam quae nostrum 
                maxime?
            </div>
            <div className="nav-buttons">
            <button onClick={handleClick} className="back-button">Back</button>
            <button onClick={handleClick} className="new-button">New</button>
            </div>
        </div>
        </>
    );
}

export default Chest;