import React from 'react'

interface ButtonProps {
    title: string
}

const Button = ({title} : ButtonProps) => {
    return (
        <div>
            {title}
        </div>
    )
}

export default Button
