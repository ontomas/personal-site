import React, { useState } from "react"
import Img from "gatsby-image"

const Tooltip = ({ children, content, ...props }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="inline-block relative">
      <div
        className="tooltip px-1 text-lg w-full m-auto"
        style={show ? { visibility: "visible" } : {}}
      >
        {typeof content === "object" ? (
          <Img fluid={content.childImageSharp.fluid} />
        ) : (
          <p className="text-center">{content}</p>
        )}
      </div>
      <div
        aria-hidden="true"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export default Tooltip
