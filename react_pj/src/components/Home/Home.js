import { useSelector } from "react-redux";

function Home() {
    const data = useSelector(state => state.UserLoginReducer.userLogin)
    console.log(data)
    return ( 
        <>
            <h1>Trang chủ</h1>
            <h2>{data?.name}</h2> 
        </>
    );
}

export default Home;