import React from "react"
import PropTypes from "prop-types"

const Animations = ({ turnOn, channel, extraGlitch }) => {
  return (
    <div className="Animations pointer-events-none">
      <div className={`crt${extraGlitch ? "--extra" : ""}`}></div>
      {channel && (
        <div className="channel">
          <p className="text-glitch">AV-1</p>
        </div>
      )}
      {turnOn && <div className="turn-on" />}
    </div>
  )
}

Animations.propTypes = {
  turnOn: PropTypes.bool,
  channel: PropTypes.bool,
  extraGlitch: PropTypes.bool,
}

export default Animations
