import { Avatar } from "@mui/material";
import image from '../assets/img.jpg'

const HomeHeader = () => {
    return ( 
        <div className="bg-blue-600 h-[15%] text-[#fff] flex flex-col items-center justify-evenly rounded-b-xl">
            <Avatar src={image} width={';'}/>
            <h2 className="text-[24px]">Antthony Gisemba</h2>
        </div>
     );
}
 
export default HomeHeader;