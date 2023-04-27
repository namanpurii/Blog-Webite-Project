import React from 'react'
import {Link} from 'react-router-dom'

const home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque purus in leo maximus venenatis. Vivamus et suscipit diam. Vestibulum facilisis, leo eu vehicula efficitur, ante erat pulvinar mauris, eu vulputate diam libero ac purus. Praesent imperdiet placerat ante, luctus hendrerit felis efficitur non. Sed ultricies erat nec bibendum iaculis.",
      img: "https://wallpapercave.com/dwp1x/wp8297470.jpg"
    },

    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque purus in leo maximus venenatis. Vivamus et suscipit diam. Vestibulum facilisis, leo eu vehicula efficitur, ante erat pulvinar mauris, eu vulputate diam libero ac purus. Praesent imperdiet placerat ante, luctus hendrerit felis efficitur non. Sed ultricies erat nec bibendum iaculis.",
      img: "https://wallpapercave.com/dwp1x/wp8297613.jpg"
    },

    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque purus in leo maximus venenatis. Vivamus et suscipit diam. Vestibulum facilisis, leo eu vehicula efficitur, ante erat pulvinar mauris, eu vulputate diam libero ac purus. Praesent imperdiet placerat ante, luctus hendrerit felis efficitur non. Sed ultricies erat nec bibendum iaculis.",
      img: "https://wallpapercave.com/dwp1x/wp8297621.jpg"
    },

    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque purus in leo maximus venenatis. Vivamus et suscipit diam. Vestibulum facilisis, leo eu vehicula efficitur, ante erat pulvinar mauris, eu vulputate diam libero ac purus. Praesent imperdiet placerat ante, luctus hendrerit felis efficitur non. Sed ultricies erat nec bibendum iaculis.",
      img: "https://wallpapercave.com/dwp1x/wp5794010.jpg"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button className='.btn'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default home