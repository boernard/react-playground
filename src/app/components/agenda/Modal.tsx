import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { EventContext } from './EventContext'
import CloseIcon from '../../../assets/Close.svg'
import './Modal.css'
import { formatDate } from './helpers'

export function Modal() {
    const { isModalOpen, handleCloseModal, selectedEventData } = React.useContext(EventContext)
    const { name, start, end, date, description, videoId = '440938284' } = selectedEventData as any
    const history = useHistory()

    const handleClickToAction = () => {
        history.push(`/brandsession?videoId=${videoId}`)
    }
    if (!isModalOpen) return null

    return (
        <div className='modal'>
            <section className='modal-main' onClick={null}>
                <div className='closeButton' onClick={handleCloseModal}>
                    <CloseIcon width='20px' height='20px' style={{ fill: '#93b0b9' }} />
                </div>
                <h2 className='title'>{name}</h2>
                <p className='date'>{formatDate(date)}</p>
                <p className='hours'>
                    {start.replace('-', '.')} - {end.replace('-', '.')}
                </p>
                <p className='description'>{description || ''} Sanitize this</p>
                <div className='callToAction' onClick={handleClickToAction}>
                    Watch brand session
                </div>
            </section>
        </div>
    )
}
