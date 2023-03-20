import React from 'react'
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar'

const ProgressSegments = () => {
    return (
        <ProgressBarComponent
            type='Circular'
            height='160px'
            width='100%'
            trackThickness={19}
            progressThickness={19}
            value={86}
            enableRtl={false}
            showProgressValue={true}
            radius="100%"
            cornerRadius="Round"
            animation={{
                enable: true,
                duration: 1300,
                delay: 0
        }}>
        </ProgressBarComponent>
    )
}

export default ProgressSegments