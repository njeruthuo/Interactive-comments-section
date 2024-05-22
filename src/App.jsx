import Notification from "./components/Notification";
import useInformation from "./utils/useInformation";

const App = () => {
  const { dataFeed } = useInformation();

  const { comments } = dataFeed;
  return (
    <div className="min-h-screen bg-LightGray sm:flex justify-center">
      <div className="sm:my-8 sm:w-1/2  p-2">
        {comments.map((comment) => {
          const { id } = comment;
          return <Notification key={id} {...comment} />;
        })}
      </div>
    </div>
  );
};
export default App;
