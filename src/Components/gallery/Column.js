import React from 'react'
import ImgFrame from './ImgFrame'

function Column({ images }) {
  return (
    <div className="column">
      {images.map((img, i) => {
        return <ImgFrame className="col-md-4" key={i} src={img.src} w={img.width} author={img.author} />
      })}
    </div>
  )
}

export default Column;
