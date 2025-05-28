import React from 'react'
import '../App.css'
function Footer_component() {
  return (
    <>
   <footer className=' bg-black'>
        {/* footer-container */}
 <div className='flex md:max-h-40 justify-around my-50 py-10 gap-20 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
       

        {/* Col 2 */}
        <div className=' text-white flex flex-col gap-5 ' >
            <p>Frequently Asked Questions</p>
            <ul className='text-gray-500'>
                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a></li>
                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a></li>
                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a></li>
                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a></li>
                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a></li>
            </ul>
        </div>

    
         <div className=' text-white flex flex-col gap-5'>
            <p>Terms of Use</p>
            <ul className='text-gray-500'>
                <li>Security</li>
                <li>Links to Other Sites</li>
                <li>Children's Privacy</li>
                <li>Contact Us</li>
            </ul>
        </div>

        
         <div className=' text-white flex flex-col gap-5'>
            <p>Sitemap</p>
            <ul className='text-gray-500'>
                <li>API</li>
                <li>API</li>
                <li>API</li>
                <li>API</li>
            </ul>
        </div>
</div>

    <div className='md:max-h-100 py-5 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
        <ul className=' text-white flex flex-col items-center'>
            <li><img src="/public/images/bmi.png" alt="" className='h-20 py-3'/></li>
            <li><p>Copyright 2025 BMI Team, Inc.</p></li>
        </ul>
    </div>
    </footer>
</>
  )
}

export default Footer_component