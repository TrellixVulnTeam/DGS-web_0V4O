import con from "./context";
import { useContext } from "react";
const List = ({ videos }) => {
  const context = useContext(con);
  const clickhandler = (video) => {
    context.selecteditem(video);
  };

  var v = videos.map((video) => {
    return (
      <div
        onClick={() => {
          clickhandler(video);
        }}
        className="row  mb-3 mb-md-2 border-bottom shadow-sm"
      >
        <div className="col-5">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="loading"
            className="img-fluid"
          />
        </div>
        <div className="col-7">
          <h6>{video.snippet.title}</h6>
        </div>
      </div>
    );
  });

  return v;
};
export default List;
