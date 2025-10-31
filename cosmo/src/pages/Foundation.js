import React from 'react'
import {Link} from "react-router-dom"
import img1 from '../Images/pac.jpg'
import img2 from '../Images/blus.jpg'
import img3 from '../Images/mac.avif'
import img4 from '../Images/highlighter.jpg'
import img5 from '../Images/countour.jpg'
import img6 from '../Images/fixer.avif'
import './Foundation.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addTocart, deleteFromCart } from '../redux/Cartslice';


const Foundation = () => {
  const navigate = useNavigate();

  // ✅ Restrict access to logged-in users
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/'); // Redirect to home/login if not logged in
    }
  }, [navigate]);
  const menu = [
      {
        id: 1,
        img: img1,
        title: "Pac studio HD liquid Foundation",
        price: "₹499",
      quantity:1
      },
      {
        id: 2,
        img: img2,
        title: "Blush",
        price: "₹399",
      quantity:1
    },
      {
        id: 3,
        img: img3,
        title: "Fit me Foundation",
        price: "₹549",
      quantity:1
    },
      {
        id: 4,
        img: img4,
        title: "Highlighter",
        price: "₹450",
      quantity:1},
      {
        id: 5,
        img: img5,
        title: "Countour",
        price: "₹599",
      quantity:1
    },
      {
        id: 6,
        img: img6,
        title: "Max setting spray",
        price: "₹475",
      quantity:1
    },
      
    ];
    const cartitems= useSelector((state)=>state.cart.cartitems);
  const dispatch=useDispatch();
  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  return (
    <div>
      
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand">Face-makeup Collection</Link>
      <Link class="navbar-brand" to="/Home">Home</Link>
      
    </div>
  </nav>

  <div class="container mt-4">
<div class="row">
{
  menu.map(item => (
  <div class="col-4" key={item.id}>
        <div class="card">
          <img src={item.img} alt={item.title} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="text-danger fw-bold">{item.price}</p>
            
            { cartitems.find(reduxdata=>reduxdata.id===item.id)?

(<button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>):

(<button class="btn btn-danger cartbutton " onClick={()=>addCart(item)} > Add To Cart </button>)}
          </div>
        </div>
      </div>  
  ))
 }

 

    { /*   <div class="col-4">
        <div class="card">
          <img src="https://sdcdn.io/mac/in/mac_sku_M22013_1x1_0.png?width=1080&height=1080" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Blush</h5>
            <p class="text-danger fw-bold">₹399</p>
            <a class="btn btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <img src="https://sdcdn.io/mc/mac_sku_SRMX54_3000x3000_0S.png" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Fit me Foundation</h5>
            <p class="text-danger fw-bold">₹549</p>
            <a  class="btn btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <img src="https://images.meesho.com/images/products/136878912/zugg9_512.webp" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Highlighter</h5>
            <p class="text-danger fw-bold">₹450</p>
            <a class="btn btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <img src="https://images.meesho.com/images/products/230471505/mds2n_512.webp" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Counter</h5>
            <p class="text-danger fw-bold">₹599</p>
            <a class="btn btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1141269/LF41WNTTao-1141269-1.jpg" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Max setting spray</h5>
            <p class="text-danger fw-bold">₹475</p>
            <a class="btn btn-buy">Buy Now</a>
          </div>
        </div>
      </div> */}


      

    </div>
  </div>


    </div>
  )
}

export default Foundation
