const apikey = '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';
// メッセージ初期化
let messages = [];

async function requestChatAPI(text) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apikey}`,
    };
  
    const message = {
        role: "user",
        content: text,
    };

    messages.push(message);
  
    const payload = {
      model: "gpt-3.5-turbo",
      messages: messages,
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      payload,
      {
        headers: headers,
      }
    );
    messages.push(response.data.choices[0].message);
    return response.data.choices[0].message.content;
  }

  async function initCharacter(initText) {
    console.log('chara init', initText);
    requestChatAPI(initText);
  }