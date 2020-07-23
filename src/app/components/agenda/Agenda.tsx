import * as React from 'react'
import './Agenda.css'
import { EventContext } from './EventContext'
import { normalizeEventsByHour, getTopOffset, getEventDuration } from './helpers';
import { range } from 'lodash'
import { Filters } from './Filters';

function Event({ event, index, cellHeight, cellEvents }){
    const topOffset = getTopOffset(cellEvents, index);
    const top = Math.round((cellHeight / 60) * Number(event.start.split(':')[1]) - topOffset);
    const eventDurationMs = getEventDuration(event.start, event.end);
    const height = Math.round((cellHeight / 60) * Number(eventDurationMs / 1000 / 60))
    const style = { top: `${top}px`, height: `${height}px` };
    return (
        <div className='event' key={event.start} style={style}>
            <p>{`${event.start} - ${event.end}`}</p>
            <p>{ event.name }</p>
        </div>
    )
}

function Cell({ events = [], hour }) {
    const { languageFilter } = React.useContext(EventContext);
    const cellRef = React.useRef(null);
    const [cellHeight, setCellHeight] = React.useState(0);
    const [cellEvents, setCellEvents] = React.useState([]);
    React.useEffect(() => {
        if (cellRef.current) {
            setCellHeight(cellRef.current.offsetHeight)
            setCellEvents(Array.from<HTMLElement>(cellRef.current.children))
        }
    }, [cellRef]);
    const filteredEvents = languageFilter 
        ? events.filter(event => event.language && event.language === languageFilter)
        : events
    return (
        <div className='cell' ref={cellRef}>
            {filteredEvents.map((event, index) => (
                <Event 
                    key={event.start}
                    event={event}
                    index={index}
                    cellHeight={cellHeight}
                    cellEvents={cellEvents}
                />
            ))}
        </div>
    );
}

function HeaderCell({ name }) {
    return (
        <div className="cell" style={{ height: '45px'}}>
            {name || 'placeholder'}
        </div>
    );
}

function TimeColumn() {
    const { hourRange } = React.useContext(EventContext);
    const hours = range(hourRange[0], hourRange[1] + 1);
    return(
        <div className="column" style={{ width: '150px', flexGrow: 0 }}>
            <HeaderCell name='placeholder' />
            {hours.map(hour => (
                <div className="cell" key={hour}>
                    { hour }
                </div>
            ))}
        </div>
    );
}

function Column({ width, stage, stageEvents }: any) {
    const { hourRange } = React.useContext(EventContext);
    const hours = range(hourRange[0], hourRange[1] + 1);
    const style = width ? { width, flexGrow: 0 } : {};
    const eventsByHour = normalizeEventsByHour(stageEvents);
    return(
        <div className="column" style={style}>
            <HeaderCell name={stage} />
            {hours.map(hour => {
                const normalizedHour = hour.toString().length === 1 ? `0${hour}`: `${hour}`
                const events = eventsByHour[normalizedHour]
                return (
                    <Cell key={hour} events={events} hour={hour} />
                )
            })}  
        </div>
    );
}

export function Agenda() {
    const { eventData, loading, error } = React.useContext(EventContext);
    const stages = Object.keys(eventData) || [];
    if(loading) (<div>Loading ...</div>);
    if(error) (<div>There was an error</div>)
    return (
        <>
            <Filters />
            <div className="layout">
                <TimeColumn />
                {stages.map(stage => (
                    <Column
                        key={stage}
                        stage={stage}
                        stageEvents={eventData[stage]}
                    />
                ))}
        </div>
        </>
    );
}
