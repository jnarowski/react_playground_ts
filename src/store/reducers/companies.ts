import BaseReduce from "./base";

import { dispatch } from "../index";

const initialState = {
  changedAt: Date.now(),
  data: {
    errors: [],
    companies: [],
    company: {}
  }
};

export default class CompaniesReduce extends BaseReduce {
  constructor() {
    super({
      label: "companies",
      initialState: initialState
    });

    this.createAction("CLEAR", (state: any, action: any) => {
      return initialState;
    });

    this.createAction("FETCH:LIST", (state: any, action: any) => {
      return {
        ...state,
        changedAt: Date.now(),
        data: Object.assign({}, state.data, action.data)
      };
    });
  }

  clear = () => {
    dispatch({
      type: this.actions["CLEAR"].key
    });
  };

  async fetchSomething() {
    return dispatch({
      data: {
        companies: ["1", "2"]
      },
      type: this.actions["FETCH:LIST"].key
    });
  }
}
