import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
type PropType = {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Offcanvas({open, setIsOpen}: PropType ){
    return(
        <div className={`fixed inset-0 z-50 flex justify-end ${
            open ? "pointer-events-auto" : "pointer-events-none"
            }`}>
            
            <div className={`offcanvas-body flex flex-col w-[320px] bg-box h-screen p-5 gap-20 transition-all ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="logo font-bold text-2xl flex justify-between">
                    <div>
                        Padmesh.
                    </div>
                    <div onClick={()=>setIsOpen(false)}>
                        <FontAwesomeIcon icon={faX} size="sm" className="cursor-pointer hover:text-red-500 transition-all duration-250"/>
                    </div>
                </div>
                <div className="icons gap-8 flex flex-col">
                    <div className="flex items-center gap-2 cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    <span>LinkedIn</span> 
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                        <span>GitHub</span> 
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                        <span>Instagram</span> 
                    </div>

                </div>
                <div className="resume">
                    <button className="gap-2 items-center flex bg-text text-bg rounded-full p-1 px-4 hover:cursor-pointer hover:bg-transparent hover:text-text border-2 hover:border-2 transition-all duration-300">
                            <div>Resume</div>
                            <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className={`absolute inset-0 bg-black/50 transition-opacity -z-10 duration-300 ${
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                />
            </div>
    );
}