import React from 'react'
import './Wrapper.scss'
export default function Wrapper({children}) {
  return (
    <div className='wapper'>
        {children}
    </div>
  )
}
