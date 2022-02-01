import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMakeupFromApi } from '../redux/makeupReducer';

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
          <img alt="makeup" src={makeup.image} />
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
