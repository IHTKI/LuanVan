import React from 'react'

export default function MenuItem(props) {
    const {icon,text,count,number} = props;
    return (
    <div className="menu-item bg-even">
        {number===1 
        ? (
          <div className="menu-contain bg-even">
          <img src={icon} alt="anh ne"/>
          <div>
            <span className="item-category">{text}</span>
            <span className="item-count">{count}</span>
          </div>
        </div>
        ) 
        : (
          <div className="menu-contain bg-odd">
          <img src={icon} alt="anh ne"/>
          <div>
            <span className="item-category">{text}</span>
            <span className="item-count">{count}</span>
          </div>
        </div>
        )}
        
      </div>
  )
}
