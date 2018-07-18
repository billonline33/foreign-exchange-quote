import axios from "axios";
import { WEBAPIURL } from "../utils/constants";

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
  amount: 0,
  newQuote: {}
};

const getQuoteFromWebService = (fromCurrency, toCurrency, amount) => {
  let apiUrl = `${WEBAPIURL}/${fromCurrency}/${toCurrency}/${amount}?format=json`;
  return axios.get(apiUrl);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        newQuote: action.newQuote
      };

    default:
      return state;
  }
};

export const loadQuoteInfo = (fromCurrency, toCurrency, amount) => {
  return dispatch => {
    getQuoteFromWebService(fromCurrency, toCurrency, amount)
      .then(response => {
        console.log("0000", response.data.CustomerRate);
        dispatch({
          type: GET_QUOTE,
          newQuote: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "REQUEST_FAILED",
          error
        });
      });
  };
};
