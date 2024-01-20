import { MdAttachEmail } from "react-icons/md";
import { FaUserNinja } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

export const Profile = ({ pilot: { avatar, name, email, age } }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="130" heaght="130" />
      <p><b><FaUserNinja size="15"/>Username:</b> {name}</p>
      <p><b><MdAttachEmail size="15"/>Email:</b> {email}</p>
      <p><b><FaGears size="15"/>Age:</b> {age}</p>
    </div>
  )
}