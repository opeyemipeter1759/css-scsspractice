import RectImg from './assests/Rectangle 2.1.svg';


import React from 'react'

function ITcenter() {
  return (
    <div className="It-session">
        <img src={RectImg} alt="" />
      <div className="It-session__body">
        <h2 className="It-session__body-title">
          An Introduction into information technology
        </h2>
        <p className="It-session__body-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lacus tellus. Etiam nec sem nibh. Nullam pulvinar quis sapien at tincidunt. In elit quam, consectetur eget felis bibendum, egestas luctus risus. Etiam ut enim sapien. Ut dictum, mi id malesuada rhoncus, elit velit porttitor purus, sit amet lobortis elit dui libero. Praesent nec nibh quis felis faucibus molestie. Nullam vehicula purus quis dui commodo dapibus. Ut sed aliquam enim.
        </p>
        <button>START LEARNING</button>
      </div>
    </div>
  )
}

export default ITcenter
