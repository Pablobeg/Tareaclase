import React from 'react'
import Card from './Card';
import image1 from "../assets/lenguajes.jpg"
import image2 from "../assets/mac.jpg"
import image3 from "../assets/programa.jpg"

const cards =[
  {
   id:1,
   title: 'Fast react',
   image: image1,
   instructor:"Benito Samuel Lopez Raso"
  },
  {
    id:2,
    title: 'Fast Java-Docker',
    image: image2,
    instructor: "Angela Rios Luna"
  },
  {
    id:3,
    title:'Fast Java',
    image:image3,
    instructor:"Valentin Jimenez Jarquen"
  }
]

export default function Cards() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
        cards.map(c => (
          <div className="col-md-4" key={cards.id}>
          <Card 
          key = {c.id}
          id= {c.id}
          title={c.title}
          image ={c.image}
          instructor={c.instructor}
          />
          </div>
        ))
}
      </div>
    </div>
  )
}
