import { ACTIONS } from "../utils/ACTIONS";
import { meetupData } from "../utils/data";

export const initialDataState = {
  meetupData: { ...meetupData },
};

export const dataReducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.TEST:
      break;

    default:
      break;
  }
};
