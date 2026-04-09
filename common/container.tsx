import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-5xl  m-auto mt-10 ${className}`}>
        {children}
    </div>
  )
}

export default Container