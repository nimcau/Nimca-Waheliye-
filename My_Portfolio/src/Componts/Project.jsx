import React from 'react'

export default function Project() {
  return (
    <div id='Projects'>
           {/* Add more sections here */}
           <div className="pject">
        <h2>PROJECTS</h2>
          <div className="ProjectorContainer">
          <div className="col">
              <img src="./public/benar.jpg" alt="" />
              <p>Java Programming</p>
          </div>
          <div className="col">
              <img src="./public/image3.jpg" alt="" />
              <p>React</p>
          </div>  
          <div className="col">
            <img src="./public/image2.jpg" alt=""/>
            <p>React project</p>
          </div>
          <div className="col">
            <img src="./public/image4.jpg" alt=""/>
            <p> php </p>
          </div>
          </div>
        </div>
      
    </div>
  )
}
