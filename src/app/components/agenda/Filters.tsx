import * as React from 'react';
import { dates } from './helpers';
import { EventContext } from './EventContext';

function DateFilter() {
    const { date, handleDateChange } = React.useContext(EventContext);
    const onChangeDate = (event) => {
        handleDateChange(event.target.value);
    }
    return(
        <>
            <label htmlFor='date-select'>Select date: </label>
            <select id='date-select' name='date' onChange={onChangeDate} value={date}>
                <option value={dates.tuesday}>{dates.tuesday}</option>
                <option value={dates.wednesday}>{dates.wednesday}</option>
                <option value={dates.thursday}>{dates.thursday}</option>
            </select>
        </>
    )
}

function LanguageFilter() {
    const langPrefix = {
        'EN': 'EN',
        'DE': 'DE',
        'NL': 'NL'
    }
    const languages = {
        [langPrefix.EN]: 'English',
        [langPrefix.DE]: 'German',
        [langPrefix.NL]: 'Dutch',
    };
    const { languageFilter, handleLanguageFilterChange } = React.useContext(EventContext);
    const onChangeLanguageFilter = (event) => {
        handleLanguageFilterChange(event.target.value);
    }
    return(
        <>
            <label htmlFor='lang-select'>Select language: </label>
            <select id='lang-select' name='lang' onChange={onChangeLanguageFilter} value={languageFilter}>
                <option value={''} defaultChecked>All</option>
                <option value={langPrefix.EN}>{languages.EN}</option>
                <option value={langPrefix.DE}>{languages.DE}</option>
                <option value={langPrefix.NL}>{languages.NL}</option>
            </select>
        </>
    )
}

export function Filters() {
    return(
        <>
            <DateFilter />
            <LanguageFilter />
        </>
    );
}
