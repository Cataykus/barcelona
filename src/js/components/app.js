import React from "react";
import ReactDOM from "react-dom";

import AdminChat from "./admin-chat";
import UserChat from "./user-chat";

class App extends React.Component {
  state = {
    data: [
      {
        avatar: "./images/avatar2.png",
        text:
          "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
        author: "От пользователя",
        id: 1
      },
      {
        avatar: "./images/avatar1.png",
        text:
          "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
        author: "От администратора",
        id: 2
      },
      {
        avatar: "./images/avatar2.png",
        text:
          "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
        author: "От пользователя",
        id: 3
      },
      {
        avatar: "./images/avatar1.png",
        text:
          "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
        author: "От администратора",
        id: 4
      }
    ],
    nodes: null
  };
  componentDidMount() {
    this.updateNodes(this.state.data);
  }

  componentDidUpdate() {}

  render() {
    const { nodes } = this.state;
    return (
      <div className="chat__flex">
        <UserChat nodes={nodes} updateData={this.updateData} />
        <div className="chat__flex__divider"></div>
        <AdminChat nodes={nodes} updateData={this.updateData} />
      </div>
    );
  }

  updateData = object => {
    this.setState({ data: [...this.state.data, object] });
    setTimeout(() => {
      this.updateNodes();
    }, 10);
  };
  updateNodes = () => {
    const newNodes = this.state.data.map(el => {
      return (
        <li key={el.id}>
          <img src={el.avatar} />
          <div>
            <p>{el.text}</p>
            <span>{`Вчера в 18:45 ${el.author}`}</span>
          </div>
        </li>
      );
    });
    this.setState({ nodes: newNodes });
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
