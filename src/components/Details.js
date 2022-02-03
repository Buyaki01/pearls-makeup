import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';

const Details = () => {
  const params = useParams();
  const { brand } = params;
  const [filteredMakeupArray, setfilteredMakeupArray] = useState([]);
  useEffect(async () => {
    const filterByBrand = await Axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
    const filteredMakeupData = await filterByBrand.data;
    for (let i = 0; i < filteredMakeupData.length; i += 1) {
      const title = filteredMakeupData[i].name;
      const { id } = filteredMakeupData[i];
      const priceSign = filteredMakeupData[i].price_sign;
      const { price } = filteredMakeupData[i];
      const { description } = filteredMakeupData[i];
      const image = filteredMakeupData[i].image_link;
      const { brand } = filteredMakeupData[i];
      const object = {
        title, id, priceSign, price, description, image, brand,
      };
      setfilteredMakeupArray((prevState) => [...prevState, object]);
    }
  }, []);
  return (
    <div className="detailsContainer">
      <NavLink to="/">
        <IoMdArrowRoundBack className="back-icon" />
      </NavLink>
      {filteredMakeupArray.map((makeup) => (
        <div key={makeup.id} className="detailsContents">
          <div className="images">
            <img alt="makeup" src={makeup.image} onError={(e) => { e.target.src = 'https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png'; }} />
          </div>
          <div>
            <h3 className="makeupTitle">
              {makeup.title}
            </h3>
            <h5 className="makeupPrice">
              {makeup.priceSign}
              {makeup.price}
            </h5>
            <p className="description">{makeup.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Details;
