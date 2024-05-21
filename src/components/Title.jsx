import React from "react"

const Title = React.forwardRef(({text, ...props}, ref) => {
  return (
    <h1 ref={ref} {...props} className="text-right mb-12 capitalize text-5xl sm:text-7xl">{text}</h1>
  )
})
export default Title