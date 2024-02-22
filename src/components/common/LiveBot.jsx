import React from 'react'
import './bot.css';

export default function LiveBot() {
  return (
    <>
 <div className="fabs">
  <div className="chat">
    <div className="chat_header">
      <span id="chat_head">Live Chat</span>
      <div className="chat_loader" />
      <div className="chat_option"><i className="zmdi zmdi-more-vert" />
        <ul>
          <li><span className="chat_color" style={{border: 'solid 5px #2196F3'}} color="blue" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #00bcd4'}} color="cyan" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #607d8b'}} color="blue-grey" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #4caf50'}} color="green" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #8bc34a'}} color="light-green" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #cddc39'}} color="lime" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #ffc107'}} color="amber" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #ff5722'}} color="deep-orange" /></li>
          <li><span className="chat_color" style={{border: 'solid 5px #f44336'}} color="red" /></li>
        </ul>
      </div>
    </div>
    <div className="chat_login">
      <a id="chat_send_email" className="fab"><i className="zmdi zmdi-email" /></a>
      <input id="chat_log_email" placeholder="Email" />
      <div className="chat_login_alert" />
    </div>
    <div id="chat_converse" className="chat_converse">
      <span className="chat_msg_item chat_msg_item_admin">
        <div className="chat_avatar">
          <i className="zmdi zmdi-headset-mic" />
        </div>Hi! How may I be of service</span>
      <span className="chat_msg_item chat_msg_item_user">
        <div className="chat_avatar">
          <i className="zmdi zmdi-account" />
        </div>Ermm..</span>
    </div>
    <div className="fab_field">
      <a id="fab_listen" className="fab"><i className="zmdi zmdi-mic-outline" /></a>
      <a id="fab_send" className="fab"><i className="zmdi zmdi-mail-send" /></a>
      <textarea id="chatSend" name="chat_message" placeholder="Write a message" className="chat_field chat_message" defaultValue={""} />
    </div>
  </div>
  <a target="_blank" id="fab_help" className="fab"><i className="zmdi zmdi-help-outline" /></a>
  <a id="prime" className="fab"><i className="prime zmdi zmdi-plus" /></a>
</div>

    </>
  )
}
