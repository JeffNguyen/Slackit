      return  (
        <div key={message.id} className='message-item'>
          <div>{message.username} <div className='message-time'>{message.time}</div></div>
          <div className='message-text'>{message.text}</div>
        </div>
      );