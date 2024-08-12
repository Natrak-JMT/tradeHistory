import React from 'react'
import Photo1 from '../images/WhatsApp Image 2024-08-12 at 16.57.38 (1).jpeg'
import Photo2 from '../images/WhatsApp Image 2024-08-12 at 16.57.38.jpeg'
import Photo3 from '../images/WhatsApp Image 2024-08-12 at 16.57.39 (1).jpeg'
import Photo4 from '../images/WhatsApp Image 2024-08-12 at 16.57.39.jpeg'
import Photo5 from '../images/WhatsApp Image 2024-08-12 at 16.57.40 (1).jpeg'
import Photo6 from '../images/WhatsApp Image 2024-08-12 at 16.57.40 (2).jpeg'
import Photo7 from '../images/WhatsApp Image 2024-08-12 at 16.57.40.jpeg'
import Photo8 from '../images/WhatsApp Image 2024-08-12 at 16.57.41.jpeg'
import Photo9 from '../images/WhatsApp Image 2024-08-12 at 16.57.42 (1).jpeg'
import Photo10 from '../images/WhatsApp Image 2024-08-12 at 16.57.42 (2).jpeg'
import Photo11 from '../images/WhatsApp Image 2024-08-12 at 16.57.42.jpeg'
import Photo12 from '../images/WhatsApp Image 2024-08-12 at 16.57.43 (1).jpeg'
import Photo13 from '../images/WhatsApp Image 2024-08-12 at 16.57.43.jpeg'
import Photo14 from '../images/WhatsApp Image 2024-08-12 at 16.57.44 (1).jpeg'
import Photo15 from '../images/WhatsApp Image 2024-08-12 at 16.57.44.jpeg'
import Photo16 from '../images/WhatsApp Image 2024-08-12 at 16.57.45 (1).jpeg'
import Photo17 from '../images/WhatsApp Image 2024-08-12 at 16.57.45 (2).jpeg'
import Photo18 from '../images/WhatsApp Image 2024-08-12 at 16.57.45.jpeg'
import Photo19 from '../images/WhatsApp Image 2024-08-12 at 16.57.46 (1).jpeg'
import Photo20 from '../images/WhatsApp Image 2024-08-12 at 16.57.46 (2).jpeg'
import Photo21 from '../images/WhatsApp Image 2024-08-12 at 16.57.46.jpeg'
import Photo22 from '../images/WhatsApp Image 2024-08-12 at 16.57.47.jpeg'

function Tradehistory() {
    const images =[
        {
            id:1,
            image:Photo1
       },
        {
            id:2,
            image:Photo1
       },
        {
            id:3,
            image:Photo1
       },
        {
            id:4,
            image:Photo1
       },
        {
            id:5,
            image:Photo1
       },
        {
            id:6,
            image:Photo1
       },
        {
            id:7,
            image:Photo1
       },
        {
            id:8,
            image:Photo1
       },
        {
            id:9,
            image:Photo1
       },
        {
            id:10,
            image:Photo1
       },
        {
            id:11,
            image:Photo1
       },
        {
            id:12,
            image:Photo1
       },
        {
            id:13,
            image:Photo1
       },
        {
            id:1,
            image:Photo1
       },
        {
            id:14,
            image:Photo1
       },
        {
            id:15,
            image:Photo1
       },
        {
            id:16,
            image:Photo1
       },
        {
            id:17,
            image:Photo1
       },
        {
            id:18,
            image:Photo1
       },
        {
            id:19,
            image:Photo1
       },
        {
            id:20,
            image:Photo1
       },
        {
            id:21,
            image:Photo1
       },
        {
            id:22,
            image:Photo1
       },
]
  return (
    <>
    <div className='flex items-center justify-center '>
    <div>
        <h1 className='text-blue-800 text-center mt-8 font-bold text-3xl'>Check Our Trade History</h1>
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
            {
                images.map(img=>(
                    <div key={img.id} className='px-10'>
                        
                        <img src={img.image} alt="img"  className='rounded-lg pt-10 object-cover '/>

                    </div>
                ))
            }
            
        </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Tradehistory