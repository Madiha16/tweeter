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
      $('#tweets-container').prepend($tweet);
    }
  };

  const createTweetElement = function(tweet) {
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

    // console.log("$(this):", $(this));
    // console.log("this", this);

    // // this is searching for textarea by it's HTML tag name
    // const textarea = $(this).find('textarea');
    // console.log("textarea::", textarea);
    // console.log("textarea.val()::", textarea.val());

    // search for jQuery element using textarea's id (#)
    const tweetText = $('#tweet-text');
    // console.log("tweetText::", tweetText);// jQuery elem with outerHTML of "<textarea name=\"text\" id=\"tweet-text\"></textarea>"
    // console.log("tweetText.val()::", tweetText.val());// tweetText.val():: hi hello



    // Serialize the form data
    // text=Whatever%20the%20tweet%20was
    const data = $(this).serialize();
    // console.log("data::", data);
    // for tweet = hello > data:: text=hello%20jello

    // The user should be given an error that their tweet content is too long
    // or that it is not present (ideally separate messages for each scenario)
    // The form should not be cleared
    // The form should not submit

    console.log("tweetText.val()::", tweetText.val());

    if (tweetText.val().length > 140) {
      alert("You have exceeded the maxiumum allowable tweet length");
      event.preventDefault();
    }
  
    if (!tweetText.val()) {
      alert("You cannot post an empty tweet!");
      event.preventDefault();
    }


    
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then(() => {
      console.log('tweet added successfully');
      renderTweets(data);
    });

    // loadTweets();

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
      $('#tweets-container').empty();

      renderTweets(tweets);
    });
  };

  // In order to test/drive the function, you can simply call it right after its definition.
  // We do want to load the tweets on page load anyway, so this is fair.
  loadTweets();
  
});