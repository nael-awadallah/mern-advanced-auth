import { useState } from "react";
import { motion } from "framer-motion";
import { Loader, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../components/Input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    //  try {
    //    await signup(email, password, name);
    //    navigate("/verify-email");
    //  } catch (error) {
    //    console.log(error);
    //  }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-800 bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-xl rounded-2xl w-full max-w-md overflow-hidden'>
      <div className='p-8'>
        <h2 className='bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6 font-bold text-transparent text-3xl text-center'>
          Welcome Back
        </h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='flex items-center mb-6'>
            <Link to='/forgot-password' className='text-green-400 text-sm hover:underline'>
              Forgot password?
            </Link>
          </div>

          {/* {error && <p className='mt-2 font-semibold text-red-500'>{error}</p>} */}
          <motion.button
            className='bg-gradient-to-r from-green-500 hover:from-green-600 to-emerald-600 hover:to-emerald-700 shadow-lg mt-5 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full font-bold text-white transition duration-200'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit'
            // disabled={isLoading}
          >
            Login
            {/* {isLoading ? <Loader className='mx-auto animate-spin' size={24} /> : "Sign Up"} */}
          </motion.button>
        </form>
      </div>
      <div className='flex justify-center bg-gray-900 bg-opacity-50 px-8 py-4'>
        <p className='text-gray-400 text-sm'>
          Don't have an account?{" "}
          <Link to={"/signup"} className='text-green-400 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
