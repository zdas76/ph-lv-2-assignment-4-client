
import { NavLink } from 'react-router-dom'
import '../../styles/style.css'

export default function HeroSection() {
  return (
    <div className='hero' style={{height: '70vh', display: 'flex'}}>
        <div className='hero-div' style={{ width:'50%' }}>
            <p style={{color: 'white', marginLeft:'50px', marginTop: '30%', fontSize:'40px', fontWeight: 'bold' }}>Sculpt Your Space with <br /> Luxurious Fitness Innovation</p>
            
            <button style={{alignSelf:'center', display:'flex',  borderRadius:'25px', marginLeft:'50px', marginTop:'20px', }}><NavLink to='/product' style={{color:'black', fontWeight:'bold', padding:'10px 20px',fontSize:"25px"}}> Shop Now</NavLink></button>
        </div>
        
    </div>
  )
}
