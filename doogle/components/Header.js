import Avatar from '../components/Avatar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTh } from "@fortawesome/free-solid-svg-icons"; 

function Header(){
    return    <header className="flex w-full p-5 justify-between text-gray-700">
        <div className="flex space-x-4 items-center">
    </div>
    <div className="flex space-x-4 items-center">
      <p className="link">Gmail</p>
      <p className="link">Images</p>
      <FontAwesomeIcon icon={faTh} className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
      <Avatar url={'https://res.cloudinary.com/dineshscloud/image/upload/v1/blog/users/WhatsApp_Image_2021-04-05_at_12.06.05_AM_csz6xn_qnjvs9_xdgeij'} />
    </div>
  </header>;
}


export default Header;