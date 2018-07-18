import axios from "axios";
const GET_QUOTE = "inputReducer/GET_QUOTE";
const START_NEW_QUOTE = "inputReducer/START_NEW_QUOTE";
const initialState = {
  firsrName: "",
  lastName: "",
  email: "",
  countryCode: "",
  phoneNumber: "",
  fromCurrency: "",
  toCurrency: "",
  amount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_QUOTE:
      return {
        ...state,
        newQuote:action.newQuote
      };

    default:
      return state;
  }
};
