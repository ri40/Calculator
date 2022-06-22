import React from 'react'

function Calculator() {
  return (
     <div> 
         <input
    type="text"
    className="form-control mt-2 "
    aria-label="Server"
    value={resulit}
    disabled
    readonly
  />
  </div>
  )
}

export default Calculator