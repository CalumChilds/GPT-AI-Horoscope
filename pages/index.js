import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      // This will send a request to the OpenAI Chat API with your API key (which)
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer {YOUR_OPEN_AI_API_KEY}",
        },
        body: JSON.stringify({
          messages: [{ role: "system", content: "Pretend you are a fortune teller telling a fortune to a university student you're talking to. Use their provided name, age and course to determine their fortune. Make it positive, and include a lucky object related to their course studies! Make it 4 lines long." },
          { role: "user", content: `${nameInput}, ${ageInput}, ${courseInput}`}],
          model: "gpt-3.5-turbo",
        })
      });

      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.choices[0].message.content);
      setNameInput("");
      setAgeInput("");
      setCourseInput("");
    } catch(error) {
      // If there's an error, it will print it to the browser's console
      console.error(error);
      alert(error.message);
    }
  }
  // This returns the HTML that makes up the page
  return (
    <div>
      <Head>
        <title>AI Horoscope</title>
        <link rel="icon" href="/crystal.png" />
      </Head>

      <main className={styles.main}>
        <img src="/crystal.png" className={styles.icon} />
        <h3>Predict your future</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            type="text"
            name="age"
            placeholder="How old are you?"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
          />
          <input
            type="text"
            name="course"
            placeholder="What course are you studying?"
            value={courseInput}
            onChange={(e) => setCourseInput(e.target.value)}
          />
          <input type="submit" value="Generate your horoscope" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
