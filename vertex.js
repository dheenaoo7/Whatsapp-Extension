const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const autoComplete = async (history, output_user) => {
 
  const configuration = new Configuration({
    apiKey:"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",
  });
  const openai = new OpenAIApi(configuration);
  try { 

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      you are an ai embedded in an AI powered chat app. I will pass you a context of the 20 latest messages of the chat labelled by who said it, and you will give me options on how to appropriately respond in the next message, provide 3 options, each option delimited by a line break character so that i can parse the options easily.
  
  example:
  
  Elliott: yo are you coming to the dinner tnight?\n
  Sithu: where and when?\n
  Timothy: hmm i need to check with my parents\n
  Elliott: we're going to holland village for some drinks\n
  Timothy:
  
  output:
  * I'll check with them and let you know
  * Hmm I think i'll pass for tonight
  * Alright let's go! I love holland village
  
  be sure that the output is in the format of a bulleted list, and that the output is a string with the options delimited by a line break character.
  there should not be backticks in the output, and the output should not be wrapped in a code block.
  
  ${history.map((h) => `${h.user}: ${h.text}`).join("\n")}
  ${output_user}:
      `,
      max_tokens: 50,
      temperature: 1,
    });
    

    if (response.status === 200) {
      const data = response.data;
      console.error(data);
      return data;
    } else {
      console.error(response.data);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  autoComplete,
};
