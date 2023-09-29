import { useEffect, useState } from "react";
const api = "https://jsonplaceholder.typicode.com/todos/";

//const api = "https://jsonplaceholder.typicode.com/todos/1";
//this has only one data which is why we can't use map method

function App() {
  const [userInfo, setuserInfo] = useState([]);
  console.log(userInfo);

  //function to handle promise i) then and ii) asyn await
  function apiCall() {
    const result = fetch(api) // fetch returns promise which holds result that is async
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setuserInfo(data);
      })
      .catch(() => {
        console.log(error);
      });
  }

  //async runs at the end
  useEffect(apiCall, []); //[] to not go into infinite loop

  return (
    <div>
      {userInfo.map((userInfo, index) => {
        return (
          <div key={index}>
            <p>
              {userInfo.userId} {userInfo.id} {userInfo.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
