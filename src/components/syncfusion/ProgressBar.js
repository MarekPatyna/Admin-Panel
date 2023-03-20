import React from 'react'
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar'

const ProgressBar = () => {
    return (
        <ProgressBarComponent
            id="linear"
            type='Linear'
            showProgressValue={true}
            labelStyle={{ color: '#FFFFFF' }}
            trackThickness={24}
            progressThickness={24}
            value={76}
            animation={{
            enable: true,
            duration: 1300,
            delay: 0,
            }}
        >
        </ProgressBarComponent>
    )
}

export default ProgressBar