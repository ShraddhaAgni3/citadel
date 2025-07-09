import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);

  const handleLike = () => setIndex((prev) => prev + 1);
  const handleDislike = () => setIndex((prev) => prev + 1);

  const user = users[index];
  if (!user) return <div className="text-center mt-20 text-xl">No more profiles!</div>;

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center text-white">

      {/* Top-left Time */}
      <div className="absolute top-4 left-4 text-sm font-semibold">12:45</div>

      {/* Top-right Icons */}
      <div className="absolute top-4 right-4 flex justify-items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-white" />
        <div className="w-6 h-6 rounded-full bg-white" />
        <div className="w-6 h-4 bg-black text-white text-3xl flex items-center justify-center rounded-full">≡</div>
      </div>

      {/* Profile Card */}
      <div className="w-[90vw] max-w-sm rounded-xl overflow-hidden relative shadow-xl">

        {/* Image with overlay */}
        <div className="relative">
          <img
            src={user.photo}
            alt={user.name}
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
            <span className="bg-white text-black text-lg px-2 py-0.5 font-bold rounded-xl">Friend</span>
            <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
            <p className="text-sm text-gray-300">{user.tags.join(', ')}</p>
            <p className="text-sm text-gray-400">{user.college} • {user.degree}</p>
          </div>

          {/* Year badge */}
          <div className="absolute bottom-28 right-4 bg-white text-black px-3 py-1 rounded-xl text-lg font-bold shadow-lg">
            Year {user.year}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between px-4 py-4 bg-black">
          <button
            onClick={handleDislike}
            className="w-1/2 bg-gray-700 text-white py-2 rounded-xl font-semibold mr-2 hover:bg-gray-600"
          >
            Dislike
          </button>
          <button
            onClick={handleLike}
            className="w-1/2 bg-green-500 text-white py-2 rounded-xl font-semibold ml-2 hover:bg-green-600"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
