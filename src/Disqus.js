/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react"
import Disqus from "disqus-react"
import './App.css'

export default class extends Component {
  render() {
    const disqusShortname = "danielgamestudios"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Title of Your Article"
    }

    return (
      <div className="article-container">
        <h1>Discussion</h1>
        <Disqus.DiscussionEmbed className='test'
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}