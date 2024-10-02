import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event)=> {
        switch(event.target.value){
            case"usd": {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            case"eur": {
                setCurrency({name: "eur", symbol: "€"});
                break;
            }
            case"ngn": {
                setCurrency({name: "ngn", symbol: "₦"});
                break;
            }
           default : {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            <Link to={'/'}>
            <img src={logo} alt="logo"  className='logo'/>
            </Link>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="euro">EURO</option>
                    <option value="ngn">NGN</option>
                </select>
                <button>Sign up <img src={arrow_icon} alt="arrow_icon"/></button>
            </div>

            

        </div>
    )
}

export default Navbar;