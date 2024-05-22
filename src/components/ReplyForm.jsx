// import useInformation from "../utils/useInformation";
// import juliusomo from "../images/avatars/image-juliusomo.png";
// import { comment } from "postcss";

// const ReplyForm = ({ user }) => {
//   const { dataFeed, setDataFeed } = useInformation();
//   const { currentUser, comments } = dataFeed;

//   //   console.log(user);

//   const handleSubmit = (e) => {
//     // Use user object to determine which object to add a reply to. The replier should be the currentUser
//     e.preventDefault();

//     const content = new FormData(e.currentTarget).get("response");
//     // console.log(content);

//     const repliedTo = comments.find(
//       (comment) => comment.user.username === user.username
//     );
//   };

//   return (
//     <div className="flex place-items-start gap-4">
//       <div className="w-[10%]">
//         <img src={juliusomo} className="h-[35px] w-[35px]" alt="" />
//       </div>
//       <form className="w-[90%] " onSubmit={handleSubmit}>
//         <div className="flex place-items-start space-x-4">
//           <input
//             type="text"
//             className="border border-LightGrayishBlue rounded h-20 w-[250px]"
//             name="response"
//             id="response"
//           />
//           <button
//             className="bg-ModerateBlue rounded-md text-white py-2 px-4"
//             type="submit"
//           >
//             Reply
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default ReplyForm;


import React from "react";
import useInformation from "../utils/useInformation";
import juliusomo from "../images/avatars/image-juliusomo.png";

const ReplyForm = ({ user }) => {
  const { dataFeed, setDataFeed } = useInformation();
  const { currentUser, comments } = dataFeed;

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = new FormData(e.currentTarget).get("response");

    const updatedComments = comments.map((comment) => {
      if (comment.user.username === user.username) {
        const newReply = {
          id: Date.now(), // unique ID for the new reply
          content: content,
          createdAt: "Just now",
          score: 0,
          replyingTo: user.username,
          user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
        };

        // Add the new reply to the replies array
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setDataFeed((prevDataFeed) => ({
      ...prevDataFeed,
      comments: updatedComments,
    }));
  };

  return (
    <div className="flex place-items-start gap-4">
      <div className="w-[10%]">
        <img src={juliusomo} className="h-[35px] w-[35px]" alt="" />
      </div>
      <form className="w-[90%] " onSubmit={handleSubmit}>
        <div className="flex place-items-start space-x-4">
          <input
            type="text"
            className="border border-LightGrayishBlue rounded h-20 w-[250px]"
            name="response"
            id="response"
          />
          <button
            className="bg-ModerateBlue rounded-md text-white py-2 px-4"
            type="submit"
          >
            Reply
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;
