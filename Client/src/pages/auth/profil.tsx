import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div className="page-container flex flex-col justify-center items-center">
      <div className="logo">
        <Link to={"/"}>
          <img className="w-50" src="/assets/logo-raven.png" alt="Logo" />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-title">Profil</h1>
        <div className="flex flex-col">
          <div className="flex gap-4 w-full">
            <div className="w-32 h-32 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="text-lg font-semibold">George Lobko</h4>
              <p className="text-gray-500 text-sm">2 hours ago</p>
              <p className="mt-2 ">
                Hi everyone, today I was on the most beautiful mountain in the
                world! 😍
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
