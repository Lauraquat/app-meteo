import {Link} from "react-router-dom";
import '../assets/header.css';
import { HomeOutlined, SearchOutlined, HeartOutlined} from '@ant-design/icons';


function Header({}){

    return(
        
        <header>
            {/* <h1>Navigation</h1> */}

            <nav className="nav">
                <Link to="/home"><HomeOutlined /></Link>  <Link to="/search"><SearchOutlined /></Link>  <Link to="/favorite"><HeartOutlined /></Link>
            </nav>
        </header>

    );    
}

export default Header;