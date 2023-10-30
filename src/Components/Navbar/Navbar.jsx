import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/bookinglist"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        BookingList
      </NavLink>
      {user ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <>
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Sign-up
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Sign-in
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
