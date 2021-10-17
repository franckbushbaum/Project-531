import React, { useState } from 'react';
import { useHistory } from 'react-router';

function Back(){

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
        <p>This is the BACK page</p>
        <div className="container">
            <div className="header">
                <div className="header-title">
                    {/* GET route to post last workout */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus pariatur optio. 
                    Incidunt consequatur eos expedita temporibus numquam quas itaque voluptates? Suscipit impedit 
                    debitis iusto, tenetur officia quis nulla alias quasi eaque ut possimus? Assumenda non aut id 
                    debitis nesciunt recusandae corrupti modi similique autem consequatur, maiores odio architecto 
                    facere.
                </div>
                <div>
                    <button className="archive-button">Archive</button>
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

export default Back;