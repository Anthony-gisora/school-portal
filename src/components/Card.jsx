const Card = ({title}) => {
    return ( 
        <div className="bg-blue-500 w-[135px] h-[135px] flex m-1 items-center justify-center">
            {title}
        </div>
     );
}
 
export default Card;