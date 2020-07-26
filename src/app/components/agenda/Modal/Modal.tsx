import * as React from 'react'
import './Modal.css'
import { useHistory } from 'react-router-dom'
import CloseIcon from '../../../../assets/Close.svg'
import { ModalContext } from '../context'
import { formatDate } from '../helpers'

export function Modal({ open, children }) {
    if (!open) return null

    return (
        <div className='modal'>
            <section className='modal-main' onClick={null}>
                {children}
            </section>
        </div>
    )
}

export function SelectedEventModalBody() {
    const { handleCloseModal, selectedEventData } = React.useContext(ModalContext)
    const { name, start, end, date, description, videoId = '440309173' } = selectedEventData as any
    const history = useHistory()
    const handleClickToAction = () => {
        history.push(`/brandsession?videoId=${videoId}`)
    }
    const handleClickAddToAgenda = () => {}
    return (
        <>
            <div className='closeButton' onClick={handleCloseModal}>
                <CloseIcon width='20px' height='20px' style={{ fill: '#93b0b9' }} />
            </div>
            <h2 className='title'>{name}</h2>
            <p className='date'>{formatDate(date)}</p>
            <p className='hours'>
                {start.replace('-', '.')} - {end.replace('-', '.')}
            </p>
            <p className='description' dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className='callToAction' onClick={handleClickToAction}>
                Watch brand session
            </div>
            <div className='neutralAction' onClick={handleClickAddToAgenda}>
                Add to my agenda
            </div>
        </>
    )
}
