import React, { useState } from "react"

import * as styling from "./settings.style"

import Category from "./category"

const SettingsPanel: React.FC = () => {
  React.useEffect(() => {
    const glass = document.querySelector(".glass") as HTMLDivElement

    const blurSlider = document.querySelector(".blur") as HTMLInputElement
    const blurCode = document.querySelector(".blur-code") as HTMLSpanElement
    const blurVal = document.querySelector(".blur-val") as HTMLParagraphElement

    blurSlider.onchange = () => {
      glass.style.backdropFilter = `blur(${blurSlider.value}px)`
      blurCode.innerText = `backdrop-filter: blur(${blurSlider.value}px);`
      blurVal.innerText = blurSlider.value
    }

    const radiusSlider = document.querySelector(".radius") as HTMLInputElement
    const radiusCode = document.querySelector(".border-code") as HTMLSpanElement
    const radiusVal = document.querySelector(
      ".radius-val"
    ) as HTMLParagraphElement

    radiusSlider.onchange = () => {
      glass.style.borderRadius = radiusSlider.value + "px"
      radiusCode.innerText = `border-radius: ${radiusSlider.value}px;`
      radiusVal.innerText = radiusSlider.value
    }

    const sizeSlider = document.querySelector(".size") as HTMLInputElement
    const widthCode = document.querySelector(".width-code") as HTMLSpanElement
    const widthVal = document.querySelector(
      ".width-val"
    ) as HTMLParagraphElement

    sizeSlider.onchange = () => {
      glass.style.width = `${sizeSlider.value}px`
      widthCode.innerText = `width: ${sizeSlider.value}px;`
      widthVal.innerText = sizeSlider.value
    }

    const opacitySlider = document.querySelector(".opacity") as HTMLInputElement
    const opacityCode = document.querySelector(
      ".opacity-code"
    ) as HTMLSpanElement
    const opacityVal = document.querySelector(
      ".opacity-val"
    ) as HTMLParagraphElement

    opacitySlider.onchange = () => {
      glass.style.opacity = opacitySlider.value
      opacityCode.innerText = `opacity: ${opacitySlider.value};`
      opacityVal.innerText = opacitySlider.value
    }
  })

  return (
    <styling.SettingPanel className="panel">
      <styling.Settings>
        <Category
          name="Blur:"
          class="blur"
          min="0"
          max="10"
          step="1"
          defValue="5"
          valueClass="blur-val"
          txtValue="5"
        />
        <Category
          name="Radius:"
          class="radius"
          min="0"
          max="120"
          step="10"
          defValue="10"
          valueClass="radius-val"
          txtValue="10"
        />
        <Category
          name="Size:"
          class="size"
          min="100"
          max="600"
          step="20"
          defValue="550"
          valueClass="width-val"
          txtValue="550"
        />
        <Category
          name="Opacity:"
          class="opacity"
          min="0"
          max="1"
          step="0.2"
          defValue="1"
          valueClass="opacity-val"
          txtValue="1"
        />
        <styling.code className="code">
          <span className="blur-code">backdrop-filter: blur(5px);</span>
          <br></br>
          <span className="border-code">border-radius: 10px;</span>
          <br></br>
          <span className="height-code">height: 250px;</span>
          <br></br>
          <span className="width-code">width: 550px;</span>
          <br></br>
          <span className="opacity-code">opacity: 1;</span>
        </styling.code>
      </styling.Settings>
    </styling.SettingPanel>
  )
}

export default SettingsPanel
