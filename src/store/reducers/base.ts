export default class BaseReduce {
  actions: any = {};
  initialState: any;
  label: string;

  constructor(options: any = {}) {
    const label = (this.label = options.label
      ? options.label.toUpperCase()
      : "BASE");

    const initialState = {
      changedAt: Date.now(),
      data: {}
    };

    if (options.initialState) {
      this.initialState = {
        ...initialState,
        ...options.initialState
      };
    } else {
      this.initialState = initialState;
    }

    const CREATE_FAILURE = `${label}/CREATE_FAILURE`;
    const CREATE_SUCCESS = `${label}/CREATE_SUCCESS`;
    const DELETE_FAILURE = `${label}/DELETE_FAILURE`;
    const DELETE_SUCCESS = `${label}/DELETE_SUCCESS`;
    const GET_FAILURE = `${label}/GET_FAILURE`;
    const GET_SUCCESS = `${label}/GET_SUCCESS`;
    const LOADING = `${label}/LOADING`;
    const UPDATE_FAILURE = `${label}/UPDATE_FAILURE`;
    const UPDATE_SUCCESS = `${label}/UPDATE_SUCCESS`;

    this.actions = {
      CREATE_FAILURE: {
        hooks: [],
        key: CREATE_FAILURE
      },
      CREATE_SUCCESS: {
        hooks: [],
        key: CREATE_SUCCESS
      },
      DELETE_FAILURE: {
        hooks: [],
        key: DELETE_FAILURE
      },
      DELETE_SUCCESS: {
        hooks: [],
        key: DELETE_SUCCESS
      },
      GET_FAILURE: {
        hooks: [],
        key: GET_FAILURE
      },
      GET_SUCCESS: {
        hooks: [],
        key: GET_SUCCESS,
        process: (state: any, action: any) => {
          return {
            ...state,
            changedAt: Date.now(),
            data: action.data
          };
        }
      },
      LOADING: {
        hooks: [],
        key: LOADING
      },
      UPDATE_FAILURE: {
        hooks: [],
        key: UPDATE_FAILURE
      },
      UPDATE_SUCCESS: {
        hooks: [],
        key: UPDATE_SUCCESS,
        process: (state: any, action: any) => {
          return {
            ...state,
            changedAt: Date.now(),
            data: action.data
          };
        }
      }
    };
  }

  public createAction(name: string, process: any) {
    const actionLabel = `${this.label}/${name}`;

    this.actions[name] = {
      hooks: [],
      key: actionLabel,
      process
    };
  }

  public createHook(name: string, process: any) {
    this.actions[name].hooks.push(process);
  }

  public reducer(state = this.initialState, action: any) {
    try {
      const names = Object.keys(this.actions);

      for (let i = 0, l = names.length; i < l; i++) {
        const name = names[i];
        const _action = this.actions[name];

        if (
          typeof _action == "object" &&
          typeof _action.key == "string" &&
          _action.key === action.type &&
          typeof _action.process == "function"
        ) {
          //console.log('action match', _action.key, action.type)
          const result = _action.process(state, action);
          const hooks = this.actions[name].hooks;

          for (let j = 0, k = hooks.length; j < k; j++) {
            const hook = hooks[j];

            hook(result);
          }

          return result;
        }
      }

      return state;
    } catch (e) {
      console.error(`Could not process reducer action for: ${this.label}`, e);
    }
  }
}
