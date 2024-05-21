import users from "./data.json";
import { useState } from "react";
import Notification from "./components/Notification";

const App = () => {
  const [dataFeed, setDataFeed] = useState(users);

  // console.log(dataFeed);

  const { comments } = dataFeed;
  // console.log(currentUser);
  // console.log(comments);
  return (
    <div className="min-h-screen bg-LightGray sm:flex justify-center">
      <div className="sm:my-8 sm:w-1/2 border border-red-600 p-2">
        {comments.map((comment) => {
          const { id } = comment;
          return <Notification key={id} {...comment} />;
        })}
      </div>
    </div>
  );
};
export default App;
