import * as React from 'react';
import { useHistory } from "react-router-dom";
import { EventContext } from './EventContext';
import './Modal.css';

export function Modal() {
    const { isModalOpen, handleCloseModal, selectedEventData } = React.useContext(EventContext);
    const { name, start, end, date, description, videoId = '440938284' } = selectedEventData as any;
    const history = useHistory();
    const handleClickToAction = () => {
        history.push(`/brandsession?videoId=${videoId}`)
    }
    if (!isModalOpen) return null;

    return(
        <div className='modal'>
            <section className='modal-main' onClick={null}>
                <div className='closeButton' onClick={handleCloseModal}>x</div>
                <h2>{name}</h2>
                <p>{date} - {start} - {end}</p>
                <p>{ description || '' } Sanitize this</p>
                <div className='callToAction' onClick={handleClickToAction}>
                    Watch brand session
                </div>
            </section>
        </div>
    );
}
