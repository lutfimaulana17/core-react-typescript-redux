import React from 'react'

interface ItemSampleProps {
    title: string
}

const ItemSample = ({title} : ItemSampleProps) => {
    return (
        <div>
            {title}
        </div>
    )
}

export default ItemSample
