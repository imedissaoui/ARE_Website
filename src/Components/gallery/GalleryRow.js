import React from 'react'
import ImgFrame from './ImgFrame'

function Column({ images }) {
  return (
    <div className="row">
      {images.map((img, i) => {
        return <ImgFrame key={i} src={img.src} h={img.width} author={img.author} />
      })}
    </div>
  )
}

export default Column