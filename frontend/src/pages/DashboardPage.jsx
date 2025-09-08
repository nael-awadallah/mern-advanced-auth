import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../lib/date";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-900 bg-opacity-80 shadow-2xl backdrop-filter backdrop-blur-lg mx-auto mt-10 p-8 border border-gray-800 rounded-xl w-full max-w-md'>
      <h2 className='bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6 font-bold text-transparent text-3xl text-center'>
        Dashboard
      </h2>

      <div className='space-y-6'>
        <motion.div
          className='bg-gray-800 bg-opacity-50 p-4 border border-gray-700 rounded-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <h3 className='mb-3 font-semibold text-green-400 text-xl'>Profile Information</h3>
          <p className='text-gray-300'>Name: {user.name}</p>
          <p className='text-gray-300'>Email: {user.email}</p>
        </motion.div>
        <motion.div
          className='bg-gray-800 bg-opacity-50 p-4 border border-gray-700 rounded-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <h3 className='mb-3 font-semibold text-green-400 text-xl'>Account Activity</h3>
          <p className='text-gray-300'>
            <span className='font-bold'>Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className='text-gray-300'>
            <span className='font-bold'>Last Login: </span>

            {formatDate(user.lastLogin)}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className='mt-4'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className='bg-gradient-to-r from-green-500 hover:from-green-600 to-emerald-600 hover:to-emerald-700 shadow-lg px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full font-bold text-white'>
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
export default DashboardPage;
