import Card from "../components/Card";


const Home = ({navigate}) => {
    

    return ( 
        <div className=" flex flex-wrap h-fit items-center justify-center ">
            <Card title='LESSONS' route='lessons' navigate={navigate} />
            <Card title='CAT' route='cat' navigate={navigate} />
            <Card title='EXAM' route='exam' navigate={navigate} />
            <Card title='RESULTS' route='result' navigate={navigate} />
            <Card title='ATTENDANCE' route='attendance' navigate={navigate} />

        </div>
     );
}
 
export default Home;