import { FINISH_ACTION } from "./constants";
import axios from 'axios'
export const FinishEnvironmentAction = (
  AngularReducer,
  ReactReducer,
  VueReducer
) => {
  const Environmentdata = {
    AngularData: AngularReducer,
    ReactData: ReactReducer,
    VueData: VueReducer
  };
  
  // POST Request
  axios.post("http://localhost:9000/summary", // api
  Environmentdata, // data
  {headers:{ // configuring header
    'content-type': 'application/json'}
  }).then((data)=>{console.log(data);}).
  catch((err)=>{console.log(err);})


  return dispatch => {
    dispatch({ type: FINISH_ACTION, payload: Environmentdata });
  };
};
