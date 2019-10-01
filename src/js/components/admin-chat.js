import React from "react";

export default class AdminChat extends React.Component {
  state = {
    value: "",
    id: 10000
  };
  componentDidUpdate() {
    document.getElementById(
      "admin-chat-id"
    ).scrollTop = document.getElementById("admin-chat-id").scrollHeight;
  }
  render() {
    const { nodes } = this.props;
    return (
      <div className="chat__flex__admin">
        <h1>Чат с администратором</h1>
        <div className="chat__flex__app">
          <div className="chat__flex__app__top">
            <img src="./images/avatar1.png" />
            <div className="chat__flex__app__top__name">
              <h5>Администратор</h5>
              <span>
                <img src="./images/flag.svg" />
                TravelAsk
              </span>
            </div>
          </div>
          <ul id="admin-chat-id">{nodes}</ul>
          <div className="chat__flex__app__bottom">
            <img src="./images/avatar2.png" />
            <input
              id="down1"
              type="text"
              placeholder="Напишите сообщение..."
              onChange={this.onInputChange}
            />
            <button onClick={this.onSendClick}>
              <img src="./images/send.svg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  onInputChange = e => {
    this.setState({ value: e.target.value });
  };
  onSendClick = () => {
    const { updateData } = this.props;
    updateData({
      avatar: "./images/avatar2.png",
      text: this.state.value,
      author: "От пользователя",
      id: this.state.id
    });
    document.getElementById("down1").value = "";
    this.setState({ id: this.state.id + 1, value: "" });
  };
}
