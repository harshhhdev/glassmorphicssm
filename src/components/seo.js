import React from "react"
import Helmet from "react-helmet"

const SEO = () => {
  return (
    <Helmet>
      <link
        rel="shortcut icon"
        href="https://cdn.discordapp.com/attachments/769765299599048744/783799407597322260/logo.png"
      />
      <title>Glassmorphism CSS generator</title>
      <meta name="url" content="https://harshhhdev.github.io/glassmorphicssm" />
      <meta
        name="description"
        content="Generate glassy CSS code for your glassmoprhism needs."
      />
      <link rel="canonical" href="https://harshhhdev.github.io/glassmorphicssm" />
      <meta
        name="keywords"
        content="glassmorphicssm, glassmoprhism, glass, ui, design trend"
      />
      <meta property="og:url" content="https://harshhhdev.github.io/glassmorphicssm" />
      <meta property="og:title" content="Glassmorhicssm - Generate Glassy CSS code" />
      <meta
        property="og:description"
        content="Generate glassy CSS code for your glassmoprhism needs"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="https://twitter.com/Harshhhdev" />
      <meta name="twitter:title" content="Glassmorphism Generator" />
      <meta
        name="twitter:description"
        content="Generate glassy CSS code for your glassmoprhism needs."
      />
    </Helmet>
  )
}

export default SEO

