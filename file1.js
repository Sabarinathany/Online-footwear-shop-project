import React from "react";
import { useState } from "react";
import "../Project1/file1.css";

import { RiArrowRightSLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import img from "../Project1/img/sheoimg.png";
import { FaHeart } from "react-icons/fa";
import menu from "../Project1/img/Menu_icon.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import video from "../Project1/video/vdo.mp4";
import { AiOutlineLine } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import bg from "./img/bg.png";
import yellow from "./img/sheoy.png";
import { FaStar } from "react-icons/fa";
import b from "./img/sheob.png";
import c from "./img/sheoc.png";
import d from "./img/e.png";
import i from "./img/f.png";
import f from "./img/g.png";
import g from "./img/i.png";
import h from "./img/h.png";
import b1 from "./img/boy1.jpg";
import b2 from "./img/boy2.jpg";
import b3 from "./img/boy3.jpg";
import g1 from "./img/girl1.jpg";
import g3 from "./img/girl3.jpg";
import g2 from "./img/girl2.jpg";
import google from "./img/google.png";
import { FaUserCircle } from "react-icons/fa"; //a
import { FaEyeSlash } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import fb from "./img/fb.png";
import tw from "./img/tw.png";
import logobg from "./img/logobg.png";
import { FaStarHalf } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import web from "./img/webs.png";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const Name1 = () => {
  // const [isHovered, SetIsHovered] = useState(false);
  // const handleMovseOver = () => {
  //   SetIsHovered(true);
  // };
  // const handleMovseOut = () => {
  //   SetIsHovered(false);
  // };
  const [mobileMenu, setMobileMenu] = useState(false);
  const ToggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <>
      <div className="container-fluid" id="a">
        <div className="col-md-12">
          <nav>
            <h2 id="a1">Shoe</h2>
            <span id="sp">s</span>

            <span id="line1">
              <AiOutlineLine />
            </span>
            <ul id={mobileMenu ? "hide-mobile-menu" : ""}>
              {/* <p>
              <span id="line1">-</span>
            </p> */}
              <li>
                <a id="ana" href="#">
                  Home
                </a>
                <a id="ana" href="#product">
                  Products
                </a>
                <a id="ana" href="#web-about">
                  About
                </a>
                <a id="ana" href="#cust">
                  Reviews
                </a>
                <a id="ana" href="#Service">
                  Services
                </a>
              </li>
              <img src={menu} id="menu" onClick={ToggleMenu}></img>
            </ul>

            <span id="sa">
              <FaHeart />
            </span>
            <span className="bb">
              <FaShoppingCart />
            </span>
            <span id="cc">
              <a href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=ae7eeab553cb43319fd131623adc9691&code_challenge=NLla1oNtFuT0aiOosJqSSISf7k6uZZnWMcdv3SlWBnc&code_challenge_method=S256">
                <IoIosContact />
              </a>
            </span>
          </nav>
          <div id="br">
            <div id="h2">
              <h2 id="b">NIKE</h2>
              <h3 id="b1">Collection</h3>
            </div>
            <div>
              <span id="circle"></span>
            </div>
            <span id="circle2"></span>
            <img id="img1" src={img}></img>
            <img id="bg" src={bg}></img>
            {/* <span id="circle3"></span> */}
            <p id="para">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <span id="fb">
              <FaFacebookF />
            </span>
            <span id="twit">
              <FaXTwitter />
            </span>
            <span id="link">
              <TiSocialLinkedin />
            </span>
            <span id="inst">
              <FaInstagram />
            </span>
            <button id="sub">
              <a href="#cellow-h3" id="shopnows">
                Shop Now
              </a>
              <span id="span1">
                <RiArrowRightSLine />
              </span>
              <span id="span2">
                <FaCartShopping />
              </span>
            </button>
            <h1 id="product">Products</h1>
            <div id="shoe1">
              <div className="first">
                <img src={yellow} id="yellow"></img>
                <h3 id="yellow-h3">NIKE</h3>
                <p id="yellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="yellow-p1"> $100.99</p>
                <span id="yellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
                <br></br>{" "}
                <button id="yellow-btn">
                  <a
                    href="https://www.nike.com/in/t/air-max-90-shoes-98F148/FN6958-002"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>

              <div className="second">
                <img src={b} id="bel"></img>
                <h3 id="bellow-h3">NIKE</h3>
                <p id="bellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="bellow-p1"> $180.59</p>
                <span id="bellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
                </span>
                <br></br>{" "}
                <button id="bellow-btn">
                  <a
                    href="https://www.nike.com/in/t/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn/FD2325-004"
                    target="_blank"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
              <div className="third">
                <img src={c} id="cel"></img>
                <h3 id="cellow-h3">NIKE</h3>
                <p id="cellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="cellow-p1"> $200.00</p>
                <span id="cellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
                </span>
                <br></br>{" "}
                <button id="cellow-btn">
                  <a
                    href="https://www.nike.com/in/t/juniper-trail-2-trail-running-shoes-PT4wqk/DM0822-103"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
              <div className="four">
                <img src={d} id="del"></img>
                <h3 id="dellow-h3">NIKE</h3>
                <p id="dellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="dellow-p1"> $165.07</p>
                <span id="dellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
                <br></br>{" "}
                <button id="dellow-btn">
                  <a
                    href="https://www.nike.com/in/t/air-jordan-i-high-g-golf-shoes-qKzTBg/DQ0660-700"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
              <div className="five">
                <img src={h} id="eel"></img>
                <h3 id="eellow-h3">NIKE</h3>
                <p id="eellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="eellow-p1"> $190.18</p>
                <span id="eellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
                <br></br>{" "}
                <button id="eellow-btn">
                  <a
                    href="https://www.nike.com/in/t/air-max-270-shoes-vjpNZc/CI2451-100"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
              <div className="six">
                <img src={i} id="fel"></img>
                <h3 id="fellow-h3">NIKE</h3>
                <p id="fellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="fellow-p1"> $130.02</p>
                <span id="fellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
                </span>
                <br></br>{" "}
                <button id="fellow-btn">
                  <a
                    href="https://www.nike.com/in/t/sb-janoski-slip-skate-shoes-BxN7w6/FN5893-001"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
              <div className="seven">
                <img src={f} id="gel"></img>
                <h3 id="gellow-h3">NIKE</h3>
                <p id="gellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="gellow-p1"> $200.01</p>
                <span id="gellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
                <br></br>{" "}
                <button id="gellow-btn">
                  <a
                    href="https://www.nike.com/in/t/jordan-nu-retro-1-low-older-shoes-tsJ6f8/FB4412-004"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
              <div className="eight">
                <img src={g} id="hel"></img>
                <h3 id="hllow-h3">NIKE</h3>
                <p id="hellow-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p id="hellow-p1"> $140.87</p>
                <span id="hellow-icon1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
                </span>
                <br></br>{" "}
                <button id="hellow-btn">
                  <a
                    href="https://www.nike.com/in/t/legend-essential-3-next-nature-workout-shoes-wQRBs9/DM1120-002"
                    id="add-to-card"
                  >
                    Add To Card
                  </a>
                </button>
              </div>
            </div>
            <div id="web-about">
              <h1 id="web-h1">WEB</h1>
              <h1 id="web-h1-2">ABOUT</h1>
            </div>

            <div id="web-img">
              {/* <img src={web} id="web-img-1"></img> */}
              <video autoPlay loop muted width={1000} height={1000}>
                <source source src={video} type="video/mp4"></source>
              </video>
              <p id="web-img-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p id="web-img-p2">
                Order Now
                <span id="web-van">
                  <FaShuttleVan />
                </span>
              </p>
            </div>
          </div>
          <div id="cus">
            <div id="cust">
              <span id="cust-h2">CUSTOMER'S</span>
              <span id="cust-h2-2">REVIEW</span>
            </div>
            <div id="cust-feed">
              <img src={b1} id="cus-img"></img>
              <h2 id="cust-h2-3">Jerry</h2>
              <span id="cust-span">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p id="cust-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="cust-feed">
              <img src={g1} id="cus-img"></img>
              <h2 id="cust-h2-3">Teddy</h2>
              <span id="cust-span">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p id="cust-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="aust-feed">
              <img src={g2} id="aus-img"></img>
              <h2 id="aust-h2-3">Rena</h2>
              <span id="aust-span">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p id="aust-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="bust-feed">
              <img src={b2} id="bus-img"></img>
              <h2 id="bust-h2-3">Jissy</h2>
              <span id="bust-span">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </span>
              <p id="bust-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="eust-feed">
              <img src={b3} id="eus-img"></img>
              <h2 id="eust-h2-3">Raju</h2>
              <span id="eust-span">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </span>
              <p id="eust-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="fust-feed">
              <img src={g3} id="fus-img"></img>
              <h2 id="fust-h2-3">Ragna</h2>
              <span id="fust-span">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p id="fust-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>{" "}
          </div>
          <div id="Service">
            <p id="service-p">OUR</p>
            <p id="service-p1">SERVICES</p>
          </div>
          <div id="ser">
            <div id="ser-logo-1">
              <TbTruckDelivery />{" "}
            </div>
            <p id="delivery">Fast Delivery</p>
            <p id="delivery-con">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div id="return">
            <div className="return-logo-2">
              <TbReplace />
            </div>
            <p id="return-f">10 Days Replacement</p>
            <p id="return-con">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div id="customer">
            <div className="customer-logo-2">
              <RiCustomerService2Fill />
            </div>
            <p id="customer-f">24/7 Support</p>
            <p id="customer-con">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="sheos">
            <img src={f} className="sheo1"></img>
          </div>
          <div className="sheo">
            <img src={c} className="sheo2"></img>
          </div>
          <div>
            <img src={logobg} className="logobg"></img>
          </div>

          <div id="log">
            <p id="log-h2">Welcome Back !</p>
            <label className="label">User Name</label>
            <br></br>
            <input type="text" placeholder=" User Name"></input> <br></br>
            <label className="psd">Password</label>
            <br></br>
            <input type="password" placeholder=" Password"></input>
            <p className="fp">Forget Password ?</p>
            <button>Login</button>
            <div className="logo">
              <img className="google" src={google}></img>
              <img className="fb" src={fb}></img>
              <img className="tw" src={tw}></img>
            </div>
          </div>
          {/* <footer>
            <nav id="footer-nav">
              <ul id="footer-ul">
                <li id="footer-li">
                  <a href="#" id="footer-a">
                    Contact
                  </a>
                </li>
                <li id="footer-li"> 
                  <a href="#" id="footer-a">
                    Get Help
                  </a>
                </li>
                <li id="footer-li">
                  <a href="#" id="footer-a">
                    Our Stores
                  </a>
                </li>
                <li id="footer-li">
                  <a href="#" id="footer-a">
                    Follow Us
                  </a>
                </li>
                <li id="footer-li">
                  <a href="#" id="footer-a">
                    Newsletter
                  </a>
                </li>
              </ul>
            </nav>
          </footer> */}
          <div id="footer">
            <ul id="footer-ul">
              <li id="footer-li">
                <span id="a">Contact</span>{" "}
              </li>
              <li id="footer-li">
                <span id="a">Get Help</span>{" "}
              </li>
              <li id="footer-li">
                <span id="a"> Our Stores</span>
              </li>
              <li id="footer-li">
                <span id="a">Follow Us</span>{" "}
              </li>
              <li id="footer-li">
                <span id="a">Newsletter</span>{" "}
              </li>
            </ul>
          </div>
          <div id="contact">
            <p className="ad">
              {" "}
              <FaLocationDot />
              123Chennai /Tamil Nadu
            </p>
            <p className="pn">
              <MdOutlinePhoneAndroid />
              +91 1234567890
            </p>
            <p className="gm">
              <IoMdMailOpen />
              contactnike@gmail.com
            </p>
          </div>
          <div id="get">
            <p className="fq">
              <FaQuestion /> FAQ
            </p>
            <p className="sp">
              <FaShoppingCart /> Shipping
            </p>
            <p className="rt">
              <FaCartShopping />
              Returns
            </p>
            <p className="po">
              <FaAmazonPay /> Payment Options
            </p>
          </div>
          <div id="ourstore">
            <p className="in">
              <FaLocationDot />
              India
            </p>
            <p className="us">
              <FaLocationDot />
              USA
            </p>
            <p className="uk">
              <FaLocationDot />
              UK
            </p>
            <p className="spo">
              <FaLocationDot />
              Singapore
            </p>
          </div>
          <div className="follow">
            <span>
              <span id="fba">
                <FaFacebookF />
              </span>
              <span id="insta">
                <FaInstagram />
              </span>
              <span id="twt">
                <FaXTwitter />
              </span>
            </span>
          </div>
          <div id="susb">
            <input
              type="text"
              placeholder="   your email id here"
              className="input"
            ></input>
            <br></br>
            <button id="bu-s"> Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Name1;
