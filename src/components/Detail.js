import "./style.module.css";

const Detail = ({ selecteditem }) => {
  if (!selecteditem) {
    return <h5>loading...</h5>;
  }
  console.log(selecteditem);
  return (
    <div className="row">
      <div className="col-12 mb-2">
        <iframe
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube.com/embed/${selecteditem.id.videoId}`}
          width="100%"
          height="460px"
        ></iframe>
      </div>
      <div className="col-12 border-bottom pt-3">
        <h5>{selecteditem.snippet.title}</h5>
        <p>{selecteditem.snippet.description}</p>
      </div>
    </div>
  );
};
export default Detail;
