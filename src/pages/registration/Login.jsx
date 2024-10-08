import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, query, where, getDocs } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context || {}; 
    const navigate = useNavigate();
    const location = useLocation();
    const [redirectTo, setRedirectTo] = useState('/ '); 

    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const redirectUrl = params.get('redirect');
        if (redirectUrl) {
            setRedirectTo(redirectUrl);
        }
    }, [location.search]);

    // User Login State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    /**========================================================================
     *                          User Login Function 
    *========================================================================**/
    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            const userUid = userCredential.user.uid;

            // Fetch user data from Firestore
            const q = query(collection(fireDB, "user"), where('uid', '==', userUid));
            const querySnapshot = await getDocs(q);

            let user;
            querySnapshot.forEach((doc) => user = doc.data());

            if (user) {
                localStorage.setItem("users", JSON.stringify(user));
                setUserLogin({
                    email: "",
                    password: ""
                });
                toast.success("Login Successful");
                navigate(redirectTo); 
            } else {
                toast.error("User data not found");
            }
        } catch (error) {
            console.log(error);
            toast.error("Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md w-full max-w-md">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500'>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => setUserLogin(prev => ({ ...prev, email: e.target.value }))}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => setUserLogin(prev => ({ ...prev, password: e.target.value }))}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md'
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className='text-pink-500 font-bold' to={`/signup?redirect=${redirectTo}`}>Signup</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
