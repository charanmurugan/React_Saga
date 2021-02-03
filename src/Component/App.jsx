import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/Duck/User';
import Counter from './Counter';





function App() {
const dispatch=useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
  },[dispatch]);


  const count=useSelector((state)=>state.count.count);
  const user=useSelector((state)=>state.user.user);

  return (
    <div className="App">
    <h3>The name is:{user.firstName}</h3>
     <h3>The Count is :{count}</h3>
     <Counter />
    </div>
  );
}

export default App;
