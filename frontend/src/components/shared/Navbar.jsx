

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { LogOut, User2 } from "lucide-react";
// import { toast } from "sonner";

// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Button } from "../ui/button";
// import { Avatar, AvatarImage } from "../ui/avatar";

// import { USER_API_END_POINT } from "@/utils/constant";
// import { logout } from "@/redux/authSlice";

// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { user } = useSelector((state) => state.auth);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, {
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         dispatch(logout());

//         toast.success(res.data.message || "Logout Successfully");

//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Logout failed");
//     }
//   };

//   return (
//     <header className="bg-white border-b">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
//         <Link to="/">
//           <h1 className="text-2xl font-bold">
//             Job<span className="text-[#F83002]">Portal</span>
//           </h1>
//         </Link>

//         <div className="flex items-center gap-10">
//           <ul className="flex items-center gap-5 font-medium">
//             {user?.role === "recruiter" ? (
//               <>
//                 <li>
//                   <Link to="/admin/companies">Companies</Link>
//                 </li>

//                 <li>
//                   <Link to="/admin/jobs">Jobs</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>

//                 <li>
//                   <Link to="/jobs">Jobs</Link>
//                 </li>

//                 <li>
//                   <Link to="/browse">Browse</Link>
//                 </li>
//               </>
//             )}
//           </ul>

//           {!user ? (
//             <div className="flex gap-2">
//               <Link to="/login">
//                 <Button variant="outline">Login</Button>
//               </Link>

//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#5B30A6]">
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src={user?.profile?.profilePhoto}
//                     alt={user?.fullname}
//                   />
//                 </Avatar>
//               </PopoverTrigger>

//               <PopoverContent className="w-80">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <Avatar>
//                       <AvatarImage
//                         src={user?.profile?.profilePhoto}
//                         alt={user?.fullname}
//                       />
//                     </Avatar>

//                     <div>
//                       <h4 className="font-semibold">{user?.fullname}</h4>

//                       <p className="text-sm text-muted-foreground">
//                         {user?.profile?.bio || "No bio added"}
//                       </p>
//                     </div>
//                   </div>

//                   {user?.role === "student" && (
//                     <div className="flex items-center gap-2">
//                       <User2 size={18} />

//                       <Button variant="link" asChild>
//                         <Link to="/profile">View Profile</Link>
//                       </Button>
//                     </div>
//                   )}

//                   <div className="flex items-center gap-2">
//                     <LogOut size={18} />

//                     <Button variant="link" onClick={logoutHandler}>
//                       Logout
//                     </Button>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LogOut, User2 } from "lucide-react";
import { toast } from "sonner";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

import { USER_API_END_POINT } from "@/utils/constant";
import { logout } from "@/redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(logout());
        toast.success(res.data.message || "Logout Successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          <ul className="flex items-center gap-6 font-medium text-gray-700">

            {user?.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-[#6A38C2] transition"
                  >
                    Companies
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:text-[#6A38C2] transition"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#6A38C2] transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-[#6A38C2] transition"
                  >
                    Jobs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/browse"
                    className="hover:text-[#6A38C2] transition"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex gap-3">
              <Link to="/login">
                <Button variant="outline">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5426a8] text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>

              <PopoverTrigger asChild>
                <Avatar className="h-11 w-11 cursor-pointer border-2 border-[#6A38C2]">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname}
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                sideOffset={10}
                className="w-[360px] rounded-xl border bg-white shadow-2xl z-[9999] p-5"
              >

                {/* Header */}
                <div className="flex items-start gap-4">

                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname}
                    />
                  </Avatar>

                  <div className="flex-1">

                    <h2 className="text-lg font-bold">
                      {user?.fullname}
                    </h2>

                    <p className="mt-2 text-sm text-gray-600 leading-6 break-words">
                      {user?.profile?.bio || "No bio added"}
                    </p>

                  </div>
                </div>

                <div className="border-t my-5"></div>

                {user?.role === "student" && (
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
                  >
                    <User2 size={20} />
                    <span className="font-medium">
                      View Profile
                    </span>
                  </Link>
                )}

                <button
                  onClick={logoutHandler}
                  className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={20} />
                  <span className="font-medium">
                    Logout
                  </span>
                </button>

              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;