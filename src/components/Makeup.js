import React, { useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';
import Header from './Header';
import { getMakeupFromApi } from '../redux/makeupReducer';
import Details from './Details';

const Makeup = () => {
  const makeupArray = useSelector((state) => state.makeupReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMakeupFromApi());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="makeUpContainer">
              {makeupArray.map((brand) => (
                <NavLink key={brand[0]} to={`details/${brand[0]}`}>
                  <div className="makeUpContents">
                    <FiArrowRightCircle className="arrow-icon" />
                    <h3 className="brandName">
                      {brand[0]}
                    </h3>
                    <p className="productsNumber">
                      {brand[1]}
                      Products
                    </p>
                  </div>
                </NavLink>

              ))}
            </div>
          )}
        />
        <Route path="/details/:brand" element={<Details />} />
      </Routes>
    </>
  );
};
export default Makeup;
