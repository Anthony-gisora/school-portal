import Card from "../components/Card";

const Home = () => {

    

    return ( 
        <div className=" flex flex-wrap h-fit items-center justify-center ">
            <Card title='LESSONS' />
            <Card title='CAT' />
            <Card title='EXAM' />
            <Card title='RESULTS' />
            <Card title='ATTENDANCE' />

        </div>
     );
}
 
export default Home;