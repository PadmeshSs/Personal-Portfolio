import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "./Offcanvasnavbar";

type PropType = {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({open, setIsOpen}: PropType ){
    
    return(
        <>
            <Offcanvas open ={open} setIsOpen={setIsOpen}/>
            <div className="navbar-cont flex grow p-5 justify-between items-center"> 
                <div className="logo font-bold text-2xl">
                    Padmesh.
                </div>
                <div className="icons gap-8 items-center hidden lg:flex">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="cursor-pointer"/>
                    <FontAwesomeIcon icon={faGithub} size="lg" className="cursor-pointer"/>
                    <FontAwesomeIcon icon={faInstagram} size="lg" className="cursor-pointer"/>
                </div>
                <div className="resume">
                    <button className="gap-2 items-center hidden lg:flex bg-text text-bg rounded-full p-1 px-4 hover:cursor-pointer hover:bg-transparent hover:text-text border-2 hover:border-2 transition-all duration-300">
                         <div>Resume</div>
                         <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>

                <div className="hamburger lg:hidden cursor-pointer" onClick={()=> setIsOpen(true)}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
            </div>
        </>
    );
}