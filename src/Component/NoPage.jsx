import React from 'react'
import NotFound from '../Img/nopage.svg'
function NoPage() {
  return (
    <>
      <div className='Container-fluid NotFound'>
        <img src={NotFound} alt='NoImage'/>
      </div>
    </>
  )
}

export default NoPage;