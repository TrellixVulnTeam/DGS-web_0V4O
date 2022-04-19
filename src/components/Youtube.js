import { Component, Fragment } from "react";
import Search from "./Search";
import Detail from "./Detail";
import List from "./List";
import context from "./context.js";
import youtube from "./api";
import './Youtube.css'

class Youtube extends Component {
  state = { videos: [], selecteditem: null };
  async componentDidMount() {
    const response = await youtube.get("/search", {
      params: {
        q: "2b4BUMtSKTY"
      }
    });

    this.setState({
      videos: response.data.items,
      selecteditem: response.data.items[0]
    });
  }
  data = (videos) => {
    this.setState({ videos: videos, selecteditem: videos[0] });
  };
  selecteditem = (video) => {
    this.setState({ selecteditem: video });
  };
  render() {
    return (
      <Fragment>
        <context.Provider
          value={{ data: this.data, selecteditem: this.selecteditem }}
        >
             <Search />
          <div className="Box">
            <div className="row">
              <div className="col-md mb-5 mb-md">
                <Detail selecteditem={this.state.selecteditem} />
              </div>
              <div className="col-md-5">
                <List videos={this.state.videos} />
              </div>
            </div>
          </div>
        </context.Provider>
      </Fragment>
    );
  }
}
export default Youtube;
