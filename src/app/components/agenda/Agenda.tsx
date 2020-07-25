import * as React from 'react'
import './Agenda.css'
import { EventContext, ModalContext } from './context'
import { normalizeEventsByHour, getTopOffset, getEventDuration, formatDate } from './helpers'
import { range } from 'lodash'
import { Filters } from './Filters'
import { Modal, SelectedEventModalBody } from './Modal'
import { AppContext } from '../../AppContext'

function Event({ event, index, cellHeight, cellEvents, isAttending }) {
    const { handleOpenModal } = React.useContext(ModalContext)
    const topOffset = getTopOffset(cellEvents, index, cellHeight)
    const top = Math.round((cellHeight / 60) * Number(event.start.split(':')[1]) - topOffset)
    const eventDurationMs = getEventDuration(event.start, event.end)
    const start = event.start.replace(/(\d{2}:\d{2}).*/, '$1')
    const end = event.end.replace(/(\d{2}:\d{2}).*/, '$1')
    const height = Math.round((cellHeight / 60) * Number(eventDurationMs / 1000 / 60))
    const style = { top: `${top}px`, height: `${height}px` }
    const languages = event.language
    const handleOnClick = () => {
        handleOpenModal(event)
    }
    return (
        <div
            className={`event ${isAttending ? 'attendingEvent' : ''} ${languages.join(' ')}`}
            key={event.start}
            style={style}
            onClick={handleOnClick}
        >
            <p className='event-time'>{`${start} - ${end}`}</p>
            <p className='event-title'>{event.name}</p>
        </div>
    )
}

function Cell({ events = [] }) {
    const { userId } = React.useContext(AppContext)
    const { languageFilter } = React.useContext(EventContext)
    const cellRef = React.useRef(null)
    const [cellHeight, setCellHeight] = React.useState(0)
    React.useEffect(() => {
        if (cellRef.current) {
            setCellHeight(cellRef.current.offsetHeight)
        }
    }, [cellRef])
    const filteredEvents = languageFilter
        ? events.filter((event) => event.language && event.language.includes(languageFilter))
        : events
    return (
        <div className='cell' ref={cellRef}>
            {filteredEvents.map((event, index) => (
                <Event
                    key={event.start}
                    event={event}
                    index={index}
                    cellHeight={cellHeight}
                    cellEvents={events}
                    isAttending={event.attendees.includes(userId)}
                />
            ))}
        </div>
    )
}

function HeaderCell({ name }) {
    return (
        <div className='cell' style={{ height: '25px', fontWeight: 600 }}>
            {name || ''}
        </div>
    )
}

function TimeColumn() {
    const { hourRange } = React.useContext(EventContext)
    const hours = range(hourRange[0], hourRange[1] + 1)
    return (
        <div className='column time' style={{ width: '50px', flexGrow: 0 }}>
            <HeaderCell name='' />
            {hours.map((hour) => (
                <div className='cell time' key={hour}>
                    {hour}:00
                </div>
            ))}
        </div>
    )
}

function Column({ width, stage, stageEvents }: any) {
    const { hourRange } = React.useContext(EventContext)
    const hours = range(hourRange[0], hourRange[1] + 1)
    const style = width ? { width, flexGrow: 0 } : {}
    const eventsByHour = normalizeEventsByHour(stageEvents)
    const stageName = stage.replace(' ', '_').toLowerCase()
    return (
        <div className={`column ${stageName}`} style={style}>
            <HeaderCell name={stage} />
            {hours.map((hour) => {
                const normalizedHour = hour.toString().length === 1 ? `0${hour}` : `${hour}`
                const events = eventsByHour[normalizedHour]
                return <Cell key={hour} events={events} />
            })}
        </div>
    )
}

export function Agenda() {
    const { eventData, loading, error, isRetailer } = React.useContext(EventContext)
    const { isModalOpen } = React.useContext(ModalContext)
    const stages = (isRetailer ? Object.keys(eventData) : ['Main Stage']) || []

    React.useEffect(() => {
        window['dataLayer'] = window['dataLayer'] || []
        window['dataLayer'].push({
            userId: { userId }, //this number must be replaced with an actual User ID
        })
    }, [])
    if (loading) <div>Loading ...</div>
    if (error) <div>There was an error</div>
    return (
        <div className='agenda'>
            <Modal open={isModalOpen}>
                <SelectedEventModalBody />
            </Modal>
            <Filters />
            <div className='layout'>
                <TimeColumn />
                {stages.map((stage) => (
                    <Column key={stage} stage={stage} stageEvents={eventData[stage]} />
                ))}
            </div>
        </div>
    )
}
