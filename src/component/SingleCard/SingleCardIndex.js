import dayjs from 'dayjs'
import React from 'react'

const SingleCardIndex = ({ item, className, onClick }) => {
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesay",
        "Thursday",
        "Friay",
        "Saturday",]
    const weekdayindex = dayjs.unix(item.dt).day()
    return (
        <>
            <li key={item.moonrise} className={className} onClick={onClick}>
                <img alt="kiran" className='day-icon' src={`http://openweathermap.org/img/wn/${item.
                    weather[0].icon}@2x.png`} />

                <span className='day-name'>
                    {WEEKDAYS[weekdayindex].slice(0, 3)}
                </span>
                <span className='day-temp'>
                    {Math.round(item.temp.max)} <sup>o</sup>C
                </span>
            </li>
        </>
    )
}

export default SingleCardIndex