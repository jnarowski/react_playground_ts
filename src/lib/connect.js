import {
  connect
} from 'react-redux'

/**
FAQ: Why not just return all of the reducers?
The short answer is performance reasons; the component would re-render with each update to any of the reducers.
*/
export default function connected(keys) {
  const mapStateToProps = (reducers) => {
    const state = {}

    console.log(reducers, keys, 'dude....');

    keys.forEach((key) => state[key] = reducers[key])

    return state
  }

  return connect(mapStateToProps)
}
