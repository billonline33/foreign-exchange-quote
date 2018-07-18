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
  amount: 0
};

const getQuote = (fromCurrency, toCurrency, amount) => {
  let apiUrl = `${WEBAPIURL}/AUD/USD/10000?format=json`;
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
