import { Avatar } from "@mui/material";
import image from '../assets/logo.jpg'

const HomeHeader = ({navigate}) => {
    return ( 
        <div className="bg-green-600 h-[15%] text-[#fff] flex flex-col items-center justify-evenly rounded-b-xl" >
            <Avatar className="!w-[50px] !h-[50px]" src={image} width={';'} onClick={()=>navigate('/')}/>
            <div className="flex self-start m-3    ">
                <Avatar />
                <h2 className="text-[24px] ml-2">Antthony Gisemba</h2>
            </div>
        </div>
     );
}
 
export default HomeHeader;