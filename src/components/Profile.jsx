import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const Profile = () =>{
    const {user} = useContext(UserContext)
    if (!user) return <h2 className="text-black dark:text-white">please login</h2>
   return(
    <div className="text-black dark:text-white">welcome {user.username}</div>
   );
}
export default Profile;