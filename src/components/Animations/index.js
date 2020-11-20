import React from "react"
import PropTypes from "prop-types"

const Animations = ({ turnOn, extraGlitch }) => {
  return (
    <div className="Animations pointer-events-none">
      <div className={`crt${extraGlitch ? "--extra" : ""}`}></div>
      <div className="channel">
        {/* or current page info */}
        <p className="text-glitch">AV-1</p>
      </div>
      {turnOn && <div className="turn-on" />}
    </div>
  )
}

Animations.propTypes = {
  turnOn: PropTypes.bool,
}

export default Animations
