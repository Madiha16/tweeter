/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  const createTweetElement = function(tweet) {
    // let tweetCreatedDate = timeago.format(tweet.created_at);

    let $tweet = `  
    <article class="tweet">
      <header>
        <figure>
          <img src=${tweet.user.avatars}>
          <figcaption>${tweet.user.name}</figcaption>
        </figure>
        <small>${tweet.user.handle}</small>
      </header>
      <strong>${tweet.content.text}</strong>
      <footer>
        <sub>
          <p>${timeago.format(tweet.created_at)}</p>
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

  // renderTweets(data);

  $("#tweet-submit").submit(function(event) {
    // alert( "Handler for .submit() called." );

    // Add an event listener for submit and prevent its default behaviour
    event.preventDefault();

    // Serialize the form data
    const data = $(this).serialize();
    console.log("data::", data);

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then(() => {
      console.log('tweet added successfully');
      renderTweets(data);
    });

  });
  
  // The loadtweets function will use jQuery to make an AJAX GET request to /tweets
  // and receive the array of tweets as JSON.
  const loadTweets = function() {
    $.ajax({
      url: 'tweets',
      method: 'GET',
    }).then((tweets) => {
      console.log(tweets);

      // // ??? empty the parent element before we append new children to it
      // $('#tweets-container').empty();

      renderTweets(tweets);
    });
  };

  // In order to test/drive the function, you can simply call it right after its definition.
  // We do want to load the tweets on page load anyway, so this is fair.
  loadTweets();
  
});