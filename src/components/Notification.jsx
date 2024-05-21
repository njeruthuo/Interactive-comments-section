import { useState } from "react";

import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import reply from "../images/icon-reply.svg";
import Reply from "./Reply";

function Notification({ id, user, createdAt, content, replies }) {
  console.log(replies);
  const [number, setNumber] = useState(0);
  const image = user?.image?.webp;
  return (
    <>
      <div className="bg-white flex p-4 gap-6 rounded-lg my-4">
        {/* Counter */}
        <div className="flex flex-col bg-LightGray p-2 rounded-md gap-3 items-center h-20">
          <button onClick={() => setNumber((prev) => prev + 1)}>
            <img src={plus} alt="" />
          </button>
          <p className="text-ModerateBlue font-bold">{number}</p>

          <button onClick={() => setNumber((prev) => prev - 1)}>
            <img src={minus} alt="" />
          </button>
        </div>

        {/* Notification */}
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <img className="rounded-full" src={image} alt="" />
              <h2 className="font-bold">{user.username}</h2>
              <p className="text-sm text-GrayishBlue">{createdAt}</p>
            </div>

            <div className="flex gap-2 place-items-center hover:cursor-pointer text-ModerateBlue">
              <img className="w-[15px] h-[18px]" src={reply} alt="" />
              <h1>Reply</h1>
            </div>
          </div>

          <div className="text-GrayishBlue text-xs mt-4" id="message">
            <p>{content}</p>
          </div>
        </div>
      </div>

      {replies ? (
        <>
          {replies.map((reply) => {
            return <Reply key={reply.id} {...reply} />;
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Notification;
