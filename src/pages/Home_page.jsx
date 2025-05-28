import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
// import Charecter_page from './Charecter_page'
function Home_page() {
    const [character, setcharacter] = useState([])
    const navigate = useNavigate()

   useEffect(()=>{
     axios.get('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
        .then(response => {
        setcharacter(response.data)
        console.log(response.data)
  })
  .catch(error => {console.log(error)})
   },[])

  function showDetalis(id){
    navigate(`/charecter/${id}`)
  }
  return (
    <>
  <h1 className='text-4xl text-center m-10 font-extrabold'>All Chatacters</h1>
    <ul className='grid gap-4 grid-cols-4 m-10'>
        {character.map((char) =>{ 
            return(
            <li key={char.id}>
            <img src= {char.image} alt="" 
            onClick={()=>
                showDetalis(char.id)
            }
            className='border-2 rounded-2xl cursor-pointer w-full h-full'/>
           
            </li>

         );
        })}
    </ul>

    </>

 )
   
}

export default Home_page