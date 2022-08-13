import React from "react";
import './eventcard.css';

function EventCard({title, date, venue, description, link, linkDes}) {
    return (
        <div className='event-card'>
            <p>{title}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{description}</p>
            <p><button className='event-button'>{linkDes}</button></p>
        </div>
    )
}

export default EventCard;