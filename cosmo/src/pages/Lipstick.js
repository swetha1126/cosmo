import React from 'react'
import {Link} from "react-router-dom"
import img1 from '../Images/velvet matte.jpg'
import img2 from '../Images/creamy coral.jpg'
import img3 from '../Images/berry bliss.jpg'
import img4 from '../Images/rose patel.jpg'
import img5 from '../Images/classic red.jpg'
import img6 from '../Images/peach passion.webp'
import img7 from '../Images/nude elegance.jpg'
import img8 from '../Images/wine luxe.jpg'
import img9 from '../Images/pink pop.webp'
import './Lipstick.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addTocart, deleteFromCart } from '../redux/Cartslice';

const Lipstick = () => {
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
      title: "valvet matte",
      subtitle: "Smooth matte finish",
      price: "₹499",
      quantity:1
    },
    {
      id: 2,
      img: img2,
      title: "creamy coral",
      subtitle: "Soft texture",
      price: "₹399",
      quantity:1
    },
    {
      id: 3,
      img: img3,
      title: "berry bliss",
      subtitle: "Deep berry",
      price: "₹549",
      quantity:1
    },
    {
      id: 4,
      img: img4,
      title: "rose patel",
      subtitle: "Natural pink shade",
      price: "₹450",
      quantity:1
    },
    {
      id: 5,
      img: img5,
      title: "classic red",
      subtitle: "Bold and timeless red.",
      price: "₹599",
      quantity:1
    },
    {
      id: 6,
      img: img6,
      title: "peach passion",
      subtitle: "Subtle peach",
      price: "₹475",
      quantity:1
    },
    {
      id: 7,
      img: img7,
      title: "nude elegance",
      subtitle: "Perfect nude",
      price: "₹429",
      quantity:1
    },
    {
      id: 8,
      img: img8,
      title: "wine luxe",
      subtitle: "Dark wine color",
      price: "₹525",
      quantity:1
    },
    {
      id: 9,
      img: img9,
      title: "pink pop",
      subtitle: "Bright pink",
      price: "₹480",
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
      <Link class="navbar-brand" >Lipstick Collection</Link>
      <Link class="navbar-brand" to="/Home">Home</Link>
      
    </div>
  </nav>

  <div class="container mt-4">
<div class="row row-cols-md-3">
 {
  menu.map(item => (
    <div class="col" key={item.id}>
        <div class="card">
          <img src={item.img} alt={item.title} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.subtitle}</p>
            <p class="text-danger fw-bold">{item.price}</p>
          { cartitems.find(reduxdata=>reduxdata.id===item.id)?

(<button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>):

(<button class="btn btn-danger cartbutton " onClick={()=>addCart(item)} > Add To Cart </button>)}</div>
        </div>
      </div>

  ))
 }


      

    </div>
  </div>


    </div>
  )
}

export default Lipstick
