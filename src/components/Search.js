import { useRef } from "react";
import "./style.module.css";
import youtube from "./api";
import { useContext } from "react";
import con from "./context";
const Search = () => {
  const input = useRef();
  const context = useContext(con);

  const submithandler = async (e) => {
    e.preventDefault();
    const response = await youtube.get("/search", {
      params: {
        q: e.target[0].value
      }
    });
    context.data(response.data.items);
  };
  return (
    <div className="justify-content-center p-5 Box">
         <form onSubmit={submithandler}>
            <input
              type="text"
              ref={input}
              name="search"
              placeholder="Search"
              className="border py-2 shadow rounded"
            />
          </form>
    </div>
  );
};
export default Search;
