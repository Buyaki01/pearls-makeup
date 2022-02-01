import Axios from 'axios';

const GET_MAKEUP = 'GET_MAKEUP';

const initialState = [];

const getMakeup = (payload) => ({
  type: GET_MAKEUP,
  payload,
});

export const getMakeupFromApi = () => async (dispatch) => {
  const returnData = await Axios.get('http://makeup-api.herokuapp.com/api/v1/products.json');
  const makeupData = returnData.data;
  const makeup = [];
  for (let i = 0; i < makeupData.length; i += 1) {
    const title = makeupData[i].name;
    const { id } = makeupData[i];
    const priceSign = makeupData[i].price_sign;
    const { price } = makeupData[i];
    const { description } = makeupData[i];
    const image = makeupData[i].image_link;
    const object = {
      id, title, description, priceSign, price, image,
    };
    makeup.push(object);
  }
  dispatch(getMakeup(makeup));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAKEUP:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
