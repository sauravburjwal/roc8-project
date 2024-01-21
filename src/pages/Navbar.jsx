import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="text-sm sm:text-base flex justify-between items-center text-white w-4/5 min-h-16 rounded-lg px-3 sm:px-9 bg-blur my-12 ">
      <h2
        className="text-sm sm:text-base font-semibold leading-5 cursor-pointer"
        onClick={() => navigate('/')}
      >
        Homepage
      </h2>
      <div className=" flex gap-4 justify-between items-center">
        <button className="font-semibold">Login</button>
        <button className="font-semibold px-3 py-1 border-2 rounded-lg">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
