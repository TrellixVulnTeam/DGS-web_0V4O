import React from 'react'
import NewsPost from './NewsPost'
import VideoSection from '../VideoSection/VideoSection'

function News() {
  return (
    <div>
          <VideoSection />
          <center><h1>Soul Runner Game Link</h1></center>
          <center><iframe src="https://itch.io/embed/1508229?dark=true" width="552" height="167" frameborder="0"><a href="https://danielgamestudios.itch.io/soul-runner">Soul Runner by Daniel Games</a></iframe></center>
          <NewsPost />
    </div>
  )
}

export default News