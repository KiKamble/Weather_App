import React from 'react'
import ChooseStateIndex from './ChooseState/ChooseStateIndex'
import WeekInfoIndex from './WeekInfoCard/WeekInfoIndex'
import HumidityIndex from './Humidity/HumidityIndex'
import LeftIndex from './Left/LeftIndex'

function HomeComponent() {
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <LeftIndex/>
                    <div className='rightSide'>
                        <ChooseStateIndex/> <br />
                        <WeekInfoIndex/> <br />
                        <HumidityIndex/> <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent