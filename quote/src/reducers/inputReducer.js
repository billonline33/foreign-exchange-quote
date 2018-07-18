import axios from "axios";
import { WEBAPIURL } from "../utils/constants";
import {
  DEFAULT_FROM_CURRENCY,
  DEFAULT_TO_CURRENCY,
  DEFAULT_AMOUNT
} from "../utils/constants";

const GET_QUOTE = "inputReducer/GET_QUOTE";
const START_NEW_QUOTE = "inputReducer/START_NEW_QUOTE";

const initialState = {
  fromCurrency: DEFAULT_FROM_CURRENCY,
  toCurrency: DEFAULT_TO_CURRENCY,
  amount: DEFAULT_AMOUNT,
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
        fromCurrency: action.fromCurrency,
        toCurrency: action.toCurrency,
        amount: action.amount,
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
          newQuote: response.data,
          fromCurrency,
          toCurrency,
          amount
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
