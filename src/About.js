import React from 'react'
import github from './assests/github.svg';
import twitter from './assests/twitter.svg';
import linkedin from './assests/linkedin.svg';





function About() {
  return (
    <div className="about-session">
        <h2 className="about-session__heading">About Me</h2>
        <p className="about-session__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lacus tellus. Etiam nec sem nibh. Nullam pulvinar quis sapien at tincidunt. In elit quam, consectetur eget felis bibendum, egestas luctus risus. Etiam ut enim sapien. Ut dictum, mi id malesuada rhoncus, elit velit porttitor purus, sit amet lobortis elit dui eget libero. Praesent nec nibh quis felis faucibus molestie. Nullam vehicula purus quis dui commodo dapibus. Ut sed aliquam enim. Nam porta at nunc quis molestie. Nulla vel justo sit amet erat congue laoreet ut eu tellus.
        </p>
        <div className="about-session__socialLinks">
          <img src={twitter} alt="twitter" />
          <img src={github} alt="github" />
          <img src={linkedin} alt="linkedin" />
        </div>
    </div>
  )
}

export default About
