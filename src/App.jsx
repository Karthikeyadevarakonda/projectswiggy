
import Navbar from './components/Navbar'
import Card from './components/Card'
import { useState } from 'react';
import { cardData } from './Utils';


const App = () => {
  
  const [tab,setTab] = useState(0);
  return (
 <>
   <Navbar setTab={setTab} />

   {tab===0 && <>
        <div className="flex items-center justify-center bg-gray-100">
        <input id='searchbar' type="text" className='bg-white text-sm sm:text-sm md:text-lg rounded-md outline-none h-9 mb-5 md:mb-0 sm:h-11 w-screen sm:w-1/2 md:w-1/2 lg:w-1/2 mt-5 ml-2 mr-2 text-black  pl-10 lg:pl-10 md:pl-12 sm:pl-10 truncate pr-2 shadow' placeholder='Search For "Chicken",Chocolates..etc' />
        </div>
        <div className='shadow flex flex-wrap gap-1.5 sm:p-[2px] sm:pt-2 md:p-[4rem] bg-gray-100 justify-center items-center'>
            {cardData.map((item,index)=>{
              return(
               <Card key={index} info={item.info}/>
              )
            })}
        </div>
              </>
    }

     {tab === 1 && 
     <>
     <div>
      <h1>CART</h1>
     </div>
     </>}

   </>
  )
}

export default App
