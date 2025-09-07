const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className='relative mb-5'>
      <div className='left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
        <Icon className='size-5 text-green-500' />
      </div>
      <input
        {...props}
        className='bg-gray-800 bg-opacity-50 py-2 pr-3 pl-10 border border-gray-700 focus:border-green-500 rounded-lg focus:ring-2 focus:ring-green-500 w-full text-white transition duration-200 placeholder-gray-400'
      />
    </div>
  );
};
export default Input;
