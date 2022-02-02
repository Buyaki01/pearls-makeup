import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      {filteredMakeupArray.map((makeup) => (
        <div key={makeup.id} className="detailsContents">
          <img alt="makeup" src={makeup.image} />
          <div>
            <h3>
              {makeup.title}
            </h3>
            <h5>
              {makeup.priceSign}
              {makeup.price}
            </h5>
            <p>{makeup.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Details;
