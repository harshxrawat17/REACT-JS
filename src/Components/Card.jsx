import React from 'react'

function card() {
    const data=[
        {img:'https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D' ,name: "Amazon Basics ", Deacpiption:'Lorem ipsum',instock:false},
        {img:'https://images.unsplash.com/photo-1654573817889-296cad084c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpcGthcnR8ZW58MHx8MHx8fDA%3D' ,name: "Flipkart Basics ", Deacpiption:'Lorem ipsum',instock:true},
        {img:'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2Vib29rfGVufDB8fDB8fHww' ,name: "Facebook ", Deacpiption:'Lorem ipsum',instock:false}
    ]
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
      {data.map((elem,index)=>(
        <div key={index} className='w-52 px-3 py-4 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc bg-zinc-300'>
           <img
            className='w-full h-full object-cover'
            src={elem.img}
           />

        </div>
        
            <div className='w-full px-3 py-4'>
                <h1 className='font-semibold'>{elem.name}</h1>
                <p className='text-xs mt-5'>{elem.Deacpiption}</p>
                <button className={`px-4 py-1 ${elem.instock ? 'bg-sky-600': 'bg-blue-300'} text-xs rounded text-zinc-10 mt-3`}> 
                 {elem.instock ? "In Stock": "Out of Stock"}
            </button>
            </div>
        </div>
      ))}
     </div>
  )
}

export default card