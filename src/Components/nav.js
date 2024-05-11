import react, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav=()=>{
    const auth =localStorage.getItem('user');
    const navi = useNavigate();

    const logout=()=>{
        localStorage.clear();
        navi('/signup');
    }

    return(
        <div>
            <ul className="nav-ul">
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/Product'>Product</Link></li>
                <li><Link to ='/Add'>Add Product</Link></li>
                <li><Link to ='/Update'>Update Product</Link></li>
                <li>{auth ? <Link onClick={logout} to ='/signup'>Logout</Link>:<Link to ='/signup'>Signup</Link>}</li>
                <li><Link to ='/Profile'>Profile</Link></li>
                <li><Link to ='/login'>login</Link></li>
            </ul>
        </div>
    )
};

export default Nav;

