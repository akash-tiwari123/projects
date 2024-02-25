import React from 'react'
import style from "./content3.module.css";
const Content3 = () => {
  return (
    <div className={style.maindiv}>
        <div className={style.data}>
              <div className={style.container1}>
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                <span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam, nisi ad provident odio minus hic voluptas consequatur quasi autem! Obcaecati similique numquam nulla libero, exercitationem doloribus reiciendis nobis porro.az</p>
                <h3>William Mushkin</h3>
                <h2>Beauden</h2>
                </span>
              </div>
  

              <div className={style.container1}>
                <img className='ml-8 object-cover' src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_960_720.jpg" alt="" />
                <span>
                <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Illo ullam, nisi ad provident odio minus hic voluptas consequatur quasi autem! Obcaecati similique numquam nulla libero, exercitationem doloribus reiciendis nobis porro.az</p>
                <h3> D’Artagnan</h3>
                </span>
              </div>
        </div>
      
    </div>
  )
}

export default Content3
