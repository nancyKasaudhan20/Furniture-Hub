import css from '../styles/Services.module.css';
import Image from 'next/image'
import s1 from '../assets/1.png'
import s2 from '../assets/2.png'
import s3 from '../assets/3.png'
export default function Services(){
    return(
        <>
       <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Luxury, Your Comfort, At your Home</span>
        <span>Delivery Partner</span>
       </div>

       {/* features */}
       <div className={css.services}>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s1} alt=" " objectFit='cover' layout='intrinsic'/>
            </div>
            <span>Easy to Explore</span>
            <span>You only need few steps in furniture ordering</span>
        </div>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s2} alt=" " objectFit='cover' layout='intrinsic'/>
            </div>
            <span>Easy to Order</span>
            <span>Delivery that is always on time even faster</span>
        </div>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s3} alt=" " objectFit='cover' layout='intrinsic'/>
            </div>
            <span>Easy to Deliver</span>
            <span>Not only fast for us, quality is also number one</span>
        </div>

       </div>
        </>
    )
}