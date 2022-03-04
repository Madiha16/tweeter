/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  // You can start by having your function create hardcoded tweets, like so:
  // const $tweet = $(`<article class="tweet">Hello world</article>`);
  // console.log("$tweet:", $tweet);// $tweet: k.fn.init(1)

  // Within the client.js file, we're going to define a function createTweetElement
  // that takes in a tweet object and is responsible for
  // returning a tweet <article> element containing the entire HTML structure of the tweet.
  const createTweetElement = (tweetData) => {

    let $tweet = `
    <article class="tweet">
      <header>
        <figure>
          <img src=${tweetData.user.avatars}>
          <figcaption>${tweetData.user.name}</figcaption>
        </figure>
          <small>${tweetData.user.handle}</small>
      </header>

      <strong>${tweetData.content.text}</strong>

      <footer>
        <sub>
          <span><date>${tweetData.created_at}</date> days ago </span>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </sub>
      </footer>
    </article>
    `;

    return $tweet;

  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});

