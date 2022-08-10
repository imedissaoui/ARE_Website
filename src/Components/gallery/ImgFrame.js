import React, { useState } from 'react'


function ImgFrame({ src, w, author }) {
  const [show, setShow] = useState(0);

  return (
    <div className={"imgframe " + (show ? 'pop' : '')} style={{ width:w }}>
      <img className={show ? "mainimgpop" : "mainimg"} src={src} width={w} />
      <span className={(show ? 'show' : 'close')} onClick={() => setShow(0)}>X</span>
      <div className="actions">
        <button className={show ? 'hide' : ''} onClick={() => setShow(show ? 0 : 1)}>Info</button>
        <div className={show ? '' : 'hide'}>
          {author}
        </div>
        <button onClick={() => window.location = src}>Download</button>
      </div>
    </div>
  )
}

export default ImgFrame
