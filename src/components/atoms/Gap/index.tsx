import React from 'react'

interface GapProps {
    height?: number,
    width?: number
}

const Gap = ({height, width} : GapProps) => {
    return (
        <div style={{width, height}}/>
    )
}

export default Gap
