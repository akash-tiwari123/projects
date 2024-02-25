import React from "react";
import style from "./content2.module.css";
function Content2() {
  return (
    <div className={style.maindiv}>
      <div className={style.div1}>
        <div className={style.img1}>
          <img
            className="w-[65vw] h-[450px] object-cover"
            src="https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=612x612&w=0&k=20&c=bJN94WW68Rw8uEogp3GKtBYnhcrNFNnf1SkWb0KDvGo="
            alt="watch"
          />
        </div>
        <div className=" text-white  h-[450px]  pl-14 pt-[18px] pr-[10px] bg-black">
          <h1 className="text-4xl">Watch Application</h1>
          <p className=" pt-4 text-gray-700 w-[85%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            adipisci deleniti harum ratione sint ea ad nostrum 
            
            reiciendis! Doloremque, magni repellat.
          </p>
          <p className="pt-8 text-gray-700 w-[85%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            adipisci deleniti harum ratione sint ea ad nostrum sapiente
            corporis quae aspernatur blanditiis tempora quasi, ipsa eaque
            reiciendis! Doloremque, magni repellat.
          </p>
          <button className="bg-transparent border border-white rounded-2xl text-white px-4 py-2 mt-4 h-10 w-[200px]">
            Explore it
          </button>
          <br />
          <button className="bg-yellow-500 border border-white rounded-2xl text-white px-4 py-2 mt-4 h-10 w-[150px]">
            Read More
          </button>
        </div>
      </div>

      <div className={style.div2}>
        <div className=" text-white  h-[450px]  pl-14 pt-[18px] pr-[10px] bg-black">
          <h1 className="text-4xl">Meet The Team</h1>
          <p className=" pt-4 text-gray-700 w-[85%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            adipisci  deleniti harum ratione sint ea ad nostrum sapiente
            corporis quae aspernatur blanditiis tempora quasi, ipsa eaque
            reiciendis! Doloremque, magni repellat.
          </p>
          <p className="pt-8 text-gray-700 w-[85%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            adipisci deleniti harum ratione sint ea ad nostrum sapiente
            corporis quae aspernatur blanditiis tempora quasi, ipsa eaque
            reiciendis! Doloremque, magni repellat.
          </p>
         
          <br />
          <button className=" border border-white rounded-2xl text-white px-4 py-2 mt-4 h-10 w-[200px]">
            Read More
          </button>
        </div>

        <div>
          <img
            className="w-[65vw] h-[450px] object-cover"
            src="https://becomecharity.org.uk/content/uploads/2023/07/YP-meeting-Ukranian-delegates-1600x800.jpg"
            alt="watch"
          />
        </div>
      </div>

      <div className={style.div3}>
        <div>
          <img
            className="w-[65vw] h-[600px] object-cover"
            src="https://c1.wallpaperflare.com/preview/121/687/825/yellow-smoke-man-guy.jpg"
            alt="watch"
          />
        </div>

        <div className={style.container}>
          <div className={style.dataa}>
            <h1 className=" text-3xl font-bold text-white">What We Do</h1>
              <div className=" flex w-[100%] gap-14 my-8 text-white">
                <div className=" w-[50%]">
                  <h1 className=" text-2xl font-bold text-white">Interface Design</h1>
                  <p className="text-gray-700 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, sunt, voluptatem architecto illum suscipit provident
                    expedita
                  </p>
                </div>
                <div className=" w-[50%]">
                  <h1 className=" text-2xl font-bold text-white">User Experience</h1>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, sunt, voluptatem architecto illum suscipit provident
                    expedita
                  </p>
                </div>
              </div>


              <div className=" flex w-[100%] gap-14 text-white">
                <div className="">
                  <h1 className=" text-2xl font-bold text-white">Development</h1>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, sunt, voluptatem architecto illum suscipit provident
                    expedita
                  </p>
                </div>
                <div className="">
                  <h1 className=" text-2xl font-bold text-white">Product Strategy</h1>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, sunt, voluptatem architecto illum suscipit provident
                    expedita
                  </p>
                </div>
              </div>
            
              <button className=" border border-white rounded-2xl text-white px-4 py-1 mt-10 h-10 w-[200px]">Read More</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;
