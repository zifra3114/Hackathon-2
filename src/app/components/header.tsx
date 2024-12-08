import { CiSearch  } from "react-icons/ci";
import Image from "next/image";
import Profile from "../data/Profil & Notification.png"
export default function Header(){
    return(
        <div className="header">
        <h1 className="morent">MORENT</h1>
        <div className="search">
    <div className="search-icon">
        <CiSearch  size={30}/>
    </div>
    <div className="input">
        <input type="text" placeholder="Search Something here" />
    </div>
    </div>
    <div className="icon">
        <Image src={Profile} alt=""/>
    </div>
     
        </div>
    )
}