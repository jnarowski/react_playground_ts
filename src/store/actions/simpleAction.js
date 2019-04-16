import {
  dispatch
} from '../index'

export const simpleAction = () => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}
