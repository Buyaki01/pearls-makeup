import React from 'react';
import { useSelector } from 'react-redux';

const Makeup = () => {
  const makeupArray = useSelector((state) => state.makeupReducer);
  return (
    <div>
      {makeupArray.map((makeup) => (
        <div key={makeup.id}>
          <div>
            {makeup.image}
          </div>
          <div>
            <h3>
              {makeup.title}
            </h3>
            <h5>
              {makeup.priceSign}
              {makeup.price}
            </h5>
          </div>
        </div>
      ))}

    </div>
  );
};
export default Makeup;
