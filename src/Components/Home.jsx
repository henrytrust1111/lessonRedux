import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {lessonLogout} from "../Redux/Features";
import {useNavigate } from "react-router-dom";

const Home = () => {
    const userData = useSelector((state) => state?.curvegadget?.lesson?.lessonUser);
    const dispatch = useDispatch();
    const nav=useNavigate()

    console.log(userData);
    const handleLogout = () => {
        dispatch(lessonLogout());
        nav("/")
    };

    return (
        <>
            <div className="">
                <h1 className="text-3xl">Hello Welcome To {userData.firstName.toUpperCase()} home</h1>
                <button
                    className="bg-black text-white p-4"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default Home;
