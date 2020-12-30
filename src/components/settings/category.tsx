import React from "react"

import * as styling from "./settings.style"

const Category = props => {
  return (
    <styling.Option style={{ userSelect: "none" }}>
      <styling.OptionTitle>{props.name}</styling.OptionTitle>
      <styling.OptionSlider
        type="range"
        className={props.class}
        max={props.max}
        min={props.min}
        step={props.step}
        defaultValue={props.defValue}
      />
      <styling.Value className={props.valueClass}>
        {props.txtValue}
      </styling.Value>
    </styling.Option>
  )
}

export default Category
