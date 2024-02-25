import React from "react";
import style from "./content4.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.maindiv}>
      <div className={style.container}>
        <div className={style.div1}>
          <ul className={style.div1_contain1}>
            <li>
              <h1>About US</h1>
            </li>
            <li>
              <p>
                
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, ad?
              </p>
            </li>
            <li>
              <h1>Oue Carrier</h1>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                facilis voluptatum dolor nihil laborum. Asperiores architecto
                maiores molestias magnam, inventore reprehenderit,{" "}
              </p>
            </li>
            <li>
              <button className="  border-2 border-white rounded-2xl text-white px-4 py-1 mt-10 h-10 w-[200px]">
                Read More
              </button>
            </li>
          </ul>

          <ul className={style.div1_contain2}>
            <li>
              <h1>Service</h1>
            </li>
            <li>
              <h3>Web Design</h3>
            </li>
            <li>
              <h1>Useful Links</h1>
            </li>
            <li>
              <h3>Lorem ipsum dolor sit amet </h3>
              <h3>inventore reprehenderit </h3>
              <h3>maiores molestias magnam</h3>
              <h3>Nulla facilis voluptatum dolor</h3>
            </li>
          </ul>
        </div>
        <div className={style.div2}>
          <ul className="">
            <li className=" text-2xl">Connect With Us</li>
            <li className={style.icons}>
              <FaTwitter size={35} />
              <FaFacebook size={35} />
              <FaInstagram size={35} />
              <FaWhatsapp size={35} />
            </li>
            <li className=" text-2xl  ">Connect With Us</li>
            <li className={style.icons}>
              <FaTwitter size={35} />
              <FaFacebook size={35} />
              <FaInstagram size={35} />
              <FaWhatsapp size={35} />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.last}>
        <p>
          Conditions of Use & SalePrivacy 🖤 NoticeInterest-Based Ads <br />©
          1996-2024, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
