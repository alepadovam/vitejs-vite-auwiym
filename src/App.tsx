import { useState } from 'react';
import { Tweet } from './components/Tweet';

function App() {
  // return <h1> Hello SRTN/Unicamp</h1>;
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ]);

  function createTweet() {
    setTweets([...tweets, 'Tweet 5']);
  }
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}
      <button onClick={createTweet}>Tweetar</button>
    </div>
  );
}

export default App;
