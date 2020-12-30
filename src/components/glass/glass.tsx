import React from "react"

import * as styling from "./glass.style"

const Glass: React.FC = () => {
  return (
    <styling.GlassParent className="glassmorphicssm">
      <styling.GlassText>Glassmorphism</styling.GlassText>
      <styling.GlassText style={{ fontSize: 30, paddingTop: 200 }}>
        Generate glassy CSS code
      </styling.GlassText>
      <styling.Glass className="glass" />
    </styling.GlassParent>
  )
}

export default Glass
