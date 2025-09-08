import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className='relative flex justify-center items-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 min-h-screen overflow-hidden'>
      {/* Simple Loading Spinner */}
      <motion.div
        className='border-4 border-green-200 border-t-4 border-t-green-500 rounded-full w-16 h-16'
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
