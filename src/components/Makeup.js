import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMakeupFromApi } from '../redux/makeupReducer';

// Displays all the makeup brands available & total no. of products for the brand
const Makeup = () => {
  const makeupArray = useSelector((state) => state.makeupReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMakeupFromApi());
  }, []);
  return (
    <div>
      {makeupArray.map((makeup) => (
        <div key={makeup.id}>
          <h3>
            {makeup.brand}
          </h3>
        </div>
      ))}

    </div>
  );
};
export default Makeup;
