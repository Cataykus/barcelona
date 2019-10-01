import React from "react";

export default class UserChat extends React.Component {
  state = {
    value: "",
    id: 10000
  };
  componentDidUpdate() {
    document.getElementById("user-chat-id").scrollTop = document.getElementById(
      "user-chat-id"
    ).scrollHeight;
  }
  render() {
    const { nodes } = this.props;
    return (
      <div className="chat__flex__user">
        <h1>Чат с пользователем</h1>
        <div className="chat__flex__app">
          <div className="chat__flex__app__top">
            <img src="./images/avatar1.png" />
            <div className="chat__flex__app__top__name">
              <h5>Наталия Полянская</h5>
              <span>
                <img src="./images/flag.svg" />
                Гид по Баварии, фотограф
              </span>
            </div>
            <div className="chat__flex__app__top__rates">
              <img src="./images/star1.svg" />
              <img src="./images/star1.svg" />
              <img src="./images/star1.svg" />
              <img src="./images/star1.svg" />
              <img src="./images/star2.svg" />
            </div>
          </div>
          <ul id="user-chat-id">{nodes}</ul>
          <div className="chat__flex__app__bottom">
            <img src="./images/avatar1.png" />
            <input
              id="down2"
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
      avatar: "./images/avatar1.png",
      text: this.state.value,
      author: "От администратора",
      id: this.state.id
    });
    document.getElementById("down2").value = "";
    this.setState({ id: this.state.id + 1, value: "" });
  };
}
