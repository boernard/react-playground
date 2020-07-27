import * as React from 'react'
import './Modal.css'
import { useHistory } from 'react-router-dom'
import CloseIcon from '../../../../assets/Close.svg'
import { ModalContext, EventContext } from '../context'
import { formatDate, isUserRetailer } from '../helpers'
import { AttendanceContext } from '../context/AttendanceContext'

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
    const { handleCloseModal, selectedEventDataId } = React.useContext(ModalContext)
    const { loading, modifyAttendance, isUserAttending } = React.useContext(AttendanceContext);
    const { getEventById } = React.useContext(EventContext)
    const { _id: sessionId, name, start, end, date, description, extId, videoId = '440309173' } = getEventById(selectedEventDataId) as any
    const isAttendingCurrentEvent = isUserAttending(getEventById(selectedEventDataId));
    const history = useHistory()
    const handleClickToAction = () => {
        history.push(`/brandsession?videoId=${videoId}`)
    }
    const handleModifyAttendence = async () => {
        await modifyAttendance({
            isAttending: !isAttendingCurrentEvent,
            sessionId,
            externalId: extId
        })
    }

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
            <AddToAgendaButton
                isAttending={isAttendingCurrentEvent}
                loading={loading}
                handleClick={handleModifyAttendence}
            />
        </>
    )
}

function AddToAgendaButton({ isAttending, loading, handleClick}) {
    if (loading) return <div className='neutralAction'>Loading</div>

    if (!isAttending) {
        return (
            <div className='neutralAction button' onClick={handleClick}>
                Add to my agenda
            </div>
        );
    }

    if (isAttending) {
        return (
            <div className='neutralAction button' onClick={handleClick}>
                Remove from my agenda
            </div>
        )
    }
}
