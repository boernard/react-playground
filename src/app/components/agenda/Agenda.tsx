import * as React from 'react'
import './Agenda.css'
import { EventContext } from './EventContext'
import { dates, getEarliestEventHour, getLatestEventHour, normalizeEventsByHour } from './helpers';
import { range } from 'lodash'

const Cell = React.forwardRef((props: any, ref) => (
    <div className="cell" ref={ref as any}>
        { props.children || 'holi' }
    </div>
));

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
                <Cell key={hour}>
                    { hour }
                </Cell>
            ))}
        </div>
    );
}

function Column({ width, stage, stageEvents }: any) {
    const [cellHeight, setCellHeight] = React.useState(0);
    const cellRef = React.useRef(null);
    const style = width ? { width, flexGrow: 0 } : {};
    const hours = range(10, 22);
    const eventsByHour = normalizeEventsByHour(stageEvents)
    console.log(eventsByHour)
    React.useEffect(() => {
        if (cellRef.current) {
            setCellHeight(cellRef.current.offsetHeight)
        }
    }, [cellRef])
    return(
        <div className="column" style={style}>
            <HeaderCell name={stage} />

            {hours.map(hour => (
                <Cell key={hour} ref={cellRef}>
                    {(eventsByHour[hour] || []).map((event, index) => {
                        const topOffset = index * 17;
                        const top = Math.round((cellHeight / 60) * Number(event.start.split(':')[1]) - topOffset);
                        return (
                            <div key={event.start} style={{ position: 'relative', minHeight: '15px', backgroundColor: 'salmon', top: `${top}px`}}>
                                { `${event.start} - ${event.name}` }
                            </div>
                        )
                    })}
                </Cell>
            ))}
            
        </div>
    );
}

export function Agenda() {
    const { eventData, loading, error } = React.useContext(EventContext);
    const stages = Object.keys(eventData) || [];
    console.log(eventData)
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
