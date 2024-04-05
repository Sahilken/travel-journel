import React from "react"
import Header from "./Container/Header"
import Card from "./Container/Card"
import "./App.css"
import tjdata from "./tj-data"

export default function App() {

  const Card_Elements = tjdata.map((item) => {
    return (
      <Card {...item} />
    )
  })

  return (
    <div className="MainContainer">
      <Header />
      {Card_Elements}

    </div>
  )
}