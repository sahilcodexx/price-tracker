import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={`max-w-4xl m-auto ${className}`}>
        {children}
    </section>
  )
}

export default Container