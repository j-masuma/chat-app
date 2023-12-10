
import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './components/Chat';
const socket=io.connect("http://localhost:3001");
function App() {
  const [username,setUsername]=useState("");
  const [room,setRoom]=useState("");

  const joinRoom=()=>{
    if(username!=="" && room!==""){
      socket.emit("join_room",room );
    }
  }
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input 
        className="form-control mb-2 mr-sm-2"
        type="text" 
        placeholder="Jane Doe" 
        onChange={(event)=>setUsername(event.target.value)}
      />
      
      <input 
        className="form-control mb-2 mr-sm-2"
        type="text" 
        placeholder="Room Id"
        onChange={(event)=>setRoom(event.target.value)}
      />

      <button onClick={joinRoom}>Join Room</button>
      <Chat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;
