import { FaPaintBrush } from 'react-icons/fa';

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
  </div>
);
export default Header;
