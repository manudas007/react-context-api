import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () =>{
    const {user} = useContext(UserContext)
    if (!user) return <h2>please login</h2>
   return(
    <div>welcome {user.username}</div>
   );
}
export default Profile;