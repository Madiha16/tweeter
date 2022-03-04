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

  // const createTweetElement = function() {
  //   // const $article = $(`<article class="tweet"></article>`);
  //   // $article.children()

  // };

  const createTweetElement = `
  <article class="user">
    <header>
      <figure>
        <img src=${tweetData.user.avatars}>
        <figcaption>
          ${tweetData.user.name}
        </figcaption>
      </figure>
        <small>${tweetData.user.handle}</small>
    </header>
    <strong>${tweetData.content.text}</strong>
    <footer>
      <sub>
        <span>
          <date>${tweetData.created_at}</date>
        </span>
      </sub>
    </footer>
  `;
  
  console.log("createTweetElement::", createTweetElement);

  // const $tweet = $(`<article class="tweet">Hello world</article>`);
  // console.log("$tweet:", $tweet);// $tweet: k.fn.init(1)

  // const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});

