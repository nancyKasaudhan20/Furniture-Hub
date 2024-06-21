import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/F (1).png'

import {UilPhone} from "@iconscout/react-unicons";
import Pizza1 from '../assets/p1.jpg'

export default function Hero(){
 return(
    <div className={css.container}>
    {/* left side */}
    <div className={css.left}>
    <div className={css.cherryDiv}>
        {/* <span>More than Faster</span> */}
        {/* <Image src={Cherry} alt="" width={40} height={25}/> */}
    </div>
   

    <div className={css.heroText}>
       <span>Better Furniture </span>
       {/* <span>/span> */}
       <span>
        Better
        <span style={{color:"var(--themeRed)"}}> LIFE</span>
       </span>

    </div>

    <span className={css.miniText}>
         Nature as the inspiration, GeeKen awes with its creations! 
         
    </span>
    
    <span className={css.miniText2}>GeeKen Seating Collection is one of the leading manufacturers of modular office Furniture and Seating Systems in India for over 30 years.</span>
     
     <button className={`btn ${css.btn}`}>
        Get Started
     </button>
    </div>


    {/* right  side */}
    <div className={css.right}>
        <div className={css.imageContainer}>
            <Image src={HeroImage} alt="" layout='intrinsic'/>
        </div>
  

  <div className={css.ContactUs}>
    <span>Contact us</span>
    <div>
        <UilPhone color='white'/>
    </div>
  </div>


{/* <div className={css.Pizza}>
    <div>
        <Image src={Pizza1} alt="" objectFit='cover' layout='intrinsic'/>
    </div>
    <div className={css.details}>
        <span>Italian Pizza</span>
        <span>
        <span style={{color:"var(--themeRed)"}}>$</span> 5.49</span>
    </div>
</div> */}

    </div>
    </div>
 )
 
};