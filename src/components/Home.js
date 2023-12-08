// import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Login } from '../pages/Login';
import { CarosilComponents } from '../separateComponents/CarosilComponents';

export const Home = () => {
  // let navigate = useNavigate();

  // function handleClick() {
  //   navigate('/login');
  // }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* First element occupying 30% */}
      <div className="col-span-1">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-4">Log in to your account</h1>
          <p className="mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          <br />
          <Login />
        </div>
      </div>

      {/* Second element occupying 70% */}
      <div className="col-span-2">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <CarosilComponents />
        </div>
      </div>
    </div>
  );
};
