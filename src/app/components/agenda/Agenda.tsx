import * as React from 'react'
import './Agenda.css'
import { EventContext } from './EventContext'
import { normalizeEventsByHour, getTopOffset, getEventDuration } from './helpers';
import { range } from 'lodash'

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
    const cellRef = React.useRef(null);
    const [cellHeight, setCellHeight] = React.useState(0);
    const [cellEvents, setCellEvents] = React.useState([]);
    React.useEffect(() => {
        if (cellRef.current) {
            setCellHeight(cellRef.current.offsetHeight)
            setCellEvents(Array.from<HTMLElement>(cellRef.current.children))
        }
    }, [cellRef]);
    
    return (
        <div className='cell' ref={cellRef}>
            {events.map((event, index) => (
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
    const hours = range(10, 22);
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
    const style = width ? { width, flexGrow: 0 } : {};
    const hours = range(10, 22);
    const eventsByHour = normalizeEventsByHour(stageEvents);
    return(
        <div className="column" style={style}>
            <HeaderCell name={stage} />
            {hours.map(hour => (
                <Cell key={hour} events={eventsByHour[hour]} hour={hour} />
            ))}
        </div>
    );
}

export function Agenda() {
    const { eventData, loading, error } = React.useContext(EventContext);
    const stages = Object.keys(eventData) || [];
    if(loading) (<div>Loading ...</div>);
    if(error) (<div>There was an error</div>)
    return (
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
    );
}
