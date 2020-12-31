import React from "react"

import SEO from "../components/seo"

import SettingsPanel from "../components/settings/settings"
import Glass from "../components/glass/glass"

import "./../styling/main.css"

const IndexPage = () => (
  <div style={{ display: "flex", alignItems: "center", height: "95vh" }}>
    <SEO />
    <div className="mobiles" style={{ display: "none" }}>
      <h1>Whoops!</h1>
      <p>
        Glassmorphicssm doesn't support smaller resolutions... yet! In the
        meantime, mind reading my{" "}
        <a href="https://harshhhdev.github.io/blog/">blog</a> on{" "}
        <a href="https://dev.to/harshhhdev/ui-design-trend-of-2021-4fb7">
          glassmorphism
        </a>
        ?
      </p>
    </div>
    <SettingsPanel />
    <Glass />
  </div>
)

export default IndexPage
