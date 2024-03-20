import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSearch } from 'react-icons/io5';
import { FcLike } from 'react-icons/fc';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { setPage } from '../redux/slices/pageSlice';


const Navbar = () => {
  const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
  const handlecbutton= ()=>{
    dispatch(setPage('Cart'))
  }
  const handlesbutton= ()=>{
    dispatch(setPage('Shop'))
  }
  return (
    <div className=" bg-slate-100 text-black ">
      <nav className="flex justify-around items-center px-4 py-2 h-[100px]">
        <div>
          <Link to="/" onClick={handlesbutton} className="text-3xl font-bold">Home</Link>
        </div>
        <div className="flex gap-7">
          <Link to="/" onClick={handlesbutton} className="text-xl hover:text-gray-400 ">Shop</Link>
          <Link to="/cart" onClick={handlecbutton} className="text-xl hover:text-gray-400 ">Cart</Link>
        </div>
        <div className="flex gap-5">
          <Link to="/" className="hover:text-gray-400 text-3xl"><CgProfile /></Link>
          <Link to="/" className="hover:text-gray-400 text-3xl"><IoSearch /></Link>
          <Link to="/" className="hover:text-gray-400 text-3xl"><FcLike /></Link>
          <Link to="/" className="hover:text-gray-400 text-3xl"><AiOutlineShoppingCart /></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
