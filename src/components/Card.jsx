const Card = ({title, route ,navigate}) => {
    return ( 
        <div className="bg-green-500 w-[135px] h-[135px] flex m-1 items-center justify-center" onClick={() =>navigate(`/${route}`)}>
            {title}
        </div>
     );
}
 
export default Card;