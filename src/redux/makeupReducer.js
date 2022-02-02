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
  const makeup = {};
  for (let i = 0; i < makeupData.length; i += 1) {
    const { brand } = makeupData[i];
    if (makeup[brand]) {
      makeup[brand] += 1;
    } else {
      makeup[brand] = 1;
    }
  }
  const makeUpArray = Object.entries(makeup);
  dispatch(getMakeup(makeUpArray));
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
