import React, { useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMakeupFromApi } from '../redux/makeupReducer';
import Details from './Details';

const Makeup = () => {
  const makeupArray = useSelector((state) => state.makeupReducer);
  let brandNames = new Set(makeupArray.map((makeup) => makeup.brand));
  brandNames = [...brandNames];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMakeupFromApi());
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            {brandNames.map((brand) => (
              <NavLink key={brand} to={`details/${brand}`}>
                <div>
                  <h3>
                    {brand}
                  </h3>
                </div>
              </NavLink>

            ))}
          </div>
        )}
      />
      <Route path="/details/:brand" element={<Details />} />
    </Routes>

  );
};
export default Makeup;
