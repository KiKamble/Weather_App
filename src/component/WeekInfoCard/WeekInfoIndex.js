import React, { useEffect, useState } from 'react'
import { UseWeatherAppContext } from '../../context/Context'
import SingleCardIndex from '../SingleCard/SingleCardIndex';

const WeekInfoIndex=()=> {
    const { state:{ daily }, dispatch } = UseWeatherAppContext();

    const [selectedCard, setSelectedCard] = useState(0);

    //console.log('daily',daily)

    const updateCurrent = () => {
        return (
            dispatch({
                type: 'SET_CURRENT',
                payload: daily[selectedCard]
            })
        )
    }

    useEffect(() => {
        updateCurrent();
    }, [daily, selectedCard]);

    return (
        <>
            <div className='cardWrap'>
                <ul className='cardList'>
                    {
                        daily && daily.length > 0 ? daily.map((item, index) => {
                            if (index < 7) {
                                return <SingleCardIndex key={index} item={item}
                                    className={index === selectedCard ? 'active' : ''}
                                    onClick={() => {
                                        setSelectedCard(index);
                                        updateCurrent();
                                    }} />
                            }
                        }) : ''
                    }
                </ul>
            </div>
        </>
    )
}

export default WeekInfoIndex