import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const name = req.body.name || '';
  if (name.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter your name",
      }
    });
    return;
  }

  const age = req.body.age || 18;

  const course = req.body.course || '';

  try {
   /* const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Pretend you are a fortune teller telling a fortune to a university student you're talking to. Use their provided name, age and course to determine their fortune. Make it positive, and include a lucky object related to their course studies! Length 8 lines." },
      { role: "user", content: "Calum, 20, Computing"},
      { role: "assistant", content: "Ah, young Calum, studying with zest, At twenty, you're on a journey that's blessed. In Computing's realm, your skills will bloom bright, With your trusty code, you'll reach a soaring height. Your fortune's star shines, it's quite clear, A lucky keyboard, hold it dear. With keys that unlock knowledge and might, Success in your studies takes its flight."}],
    
    model: "gpt-3.5-turbo",
  }); 
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Pretend you are a fortune teller telling a fortune to a university student you're talking to. Use their provided name, age and course to determine their fortune. Make it positive, and include a lucky object related to their course studies! Length 8 lines." },
      { role: "user", content: "Calum, 20, Computing"},
      { role: "assistant", content: "Ah, young Calum, studying with zest, At twenty, you're on a journey that's blessed. In Computing's realm, your skills will bloom bright, With your trusty code, you'll reach a soaring height. Your fortune's star shines, it's quite clear, A lucky keyboard, hold it dear. With keys that unlock knowledge and might, Success in your studies takes its flight."}],
    model: "gpt-3.5-turbo",
  });
*/
    res.status(200).json({ result: completion.data.choices[0].text });
    alert(completion);
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: `An error occurred during your request (${error.message}.`,
        }
      });
    }
  }
}

function generatePrompt(name,age,course) {
  // const capitalizedAnimal =
  // animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Pretend you are a fortune teller and tell the university student you are talking to - who is called ${name}, is ${age}  and is studying ${course} at the University of Suffolk - their fortune in a poem of three or four short lines. Make sure their fortune is vague but positive! Include a lucky item (university student related).`;
}
