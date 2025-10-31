import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, deleteFromCart } from '../redux/Cartslice';


const Cart = () => {
  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  return (
<div class="row row-cols-md-3">
 {
  cartitems.map(item => (
    <div class="col" key={item.id}>
        <div class="card">
          <img src={item.img} alt={item.title} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.subtitle}</p>
            <p class="text-danger fw-bold">{item.price}</p>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <button className="btn btn-secondary" onClick={() => decrementCart(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary" onClick={() => incrementCart(item.id, item.quantity)}>+</button>
                </div>

                <button className="btn btn-danger" onClick={() => deleteCart(item)}>Delete</button></div>
        </div>
      </div>

  ))
 }


      

    </div>
  );
};

export default Cart;