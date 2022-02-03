import { FaPaintBrush } from 'react-icons/fa';
import { BsFillMicFill } from '@react-icons/all-files/bs/BsFillMicFill';
import { IoIosSettings } from '@react-icons/all-files/io/IoIosSettings';

const Header = () => (
  <div className="header">
    <h1>
      <FaPaintBrush
        style={{
          color: 'white', fontSize: '30px', marginTop: '2px', marginRight: '2px',
        }}
      />
      Pearls Makeup
    </h1>
    <div className="micSettingsIcon">
      <BsFillMicFill className="mic icon" />
      <IoIosSettings className="settings icon" />
    </div>
  </div>
);
export default Header;
