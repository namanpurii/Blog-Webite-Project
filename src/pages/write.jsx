import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className="write-pg">
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <input style={{display:"none"}}type="file" name="" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons"></div>
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Write  