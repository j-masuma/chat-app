// import "./App.css";
// import io from "socket.io-client";
// import { useState } from "react";
// import Chat from "./components/Chat";

// const socket = io.connect("http://localhost:3001");

// function App() {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     if (username !== "" && room !== "") {
//       socket.emit("join_room", room);
//       setShowChat(true);
//     }
//   };

//   return (
//     <div className="App">
//       {!showChat ? (
//         <div className="joinChatContainer">
//           <h3>Join A Chat</h3>
//           <input
//             type="text"
//             placeholder="John..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Room ID..."
//             onChange={(event) => {
//               setRoom(event.target.value);
//             }}
//           />
//           <button onClick={joinRoom}>Join A Room</button>
//         </div>
//       ) : (
//         <Chat socket={socket} username={username} room={room} />
//       )}
//     </div>
//   );
// }

// export default App;



import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./components/Chat";

// Update the following line with your deployed server URL
const socket = io.connect("https://chat-app-omega-ochre-79.vercel.app");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
