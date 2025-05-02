import { useState } from 'react'

function APIDemo() {

  const [reqType, setReqType] = useState("site");
  const [paramType, setParamType] = useState("property_id");
  const [paramValue, setParamValue] = useState("0");
  
  return (
      <div className="wtapi-container">
        <div className="wtapi-form">
          
          I want a

          <select name="req-type" id="req-type"
          value={reqType}
          onChange={e => setReqType(e.target.value)}
          >
            <option value="site">site</option>
            <option value="asset">asset</option>
            <option value="ticket">ticket</option>
          </select>

          where the 

          <select name="param-type" id="param-type"
          onChange={e => setParamType(e.target.value)}>
            <option value="property_id">property id</option>
            <option value="street_number">street number</option>
          </select>

          is

          <select name="param-value" id="param-value"
          onChange={e => setParamValue(e.target.value)}>
            <option value="0">0</option>
            <option value="100">100</option>
          </select>

        </div>
        <div className="wtapi-container">
          <div className="wtapi-req">
            The request type you have selected is {reqType} where the {paramType} = {paramValue}.
          </div>
          <div className="wtapi-res">

          </div>
        </div>
        
      </div>
  )
}

export default APIDemo
