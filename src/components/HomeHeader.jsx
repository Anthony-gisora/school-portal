import { Avatar } from "@mui/material";
import image from '../assets/logo.jpg'

const HomeHeader = ({navigate}) => {
    return ( 
        <div className="bg-green-600 h-[15%] text-[#fff] flex flex-col items-center justify-evenly rounded-b-xl" >
            <Avatar className="!w-[50px] !h-[50px]" src={image} width={';'} onClick={()=>navigate('/')}/>
            <h2 className="text-[24px]">Antthony Gisemba</h2>
        </div>
     );
}
 
export default HomeHeader;