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
      <h2>To Do</h2>
      {userInfo.map((userInfo, index) => {
        return (
          <div key={index}>
            <div>
              <span style={{ color: "red" }}>UserId:</span> {userInfo.userId}{" "}
              <span style={{ color: "red" }}>Id:</span> {userInfo.id}
              <span style={{ color: "red" }}> UserTitle:</span>
              {userInfo.title}{" "}
              <span style={{ color: "red" }}> Completed: </span>
              {userInfo.completed ? "true" : "false"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
