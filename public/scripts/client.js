/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  $('div.error').hide();

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    let $tweet = `  
    <article class="tweet">
      <header>
        <figure>
          <img src="${escape(tweet.user.avatars)}">
          <figcaption>${escape(tweet.user.name)}</figcaption>
        </figure>
        <small>${escape(tweet.user.handle)}</small>
      </header>
      <strong>${escape(tweet.content.text)}</strong>
      <footer>
        <sub>
          <p>${escape(timeago.format(tweet.created_at))}</p>
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

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };

  $("#tweet-submit").submit(function(event) {
    event.preventDefault();
    // get tweet-text input
    const tweetText = $('#tweet-text');

    if (!tweetText.val()) {
      $('div.error').slideDown().text('🛑 Cannot post an empty tweet');
      event.preventDefault();

    } else if (tweetText.val().length > 140) {
      event.preventDefault();
      $('div.error').slideDown().text('🛑 Maximum tweet length exceeded');

    } else {

      const data = $(this).serialize();

      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
      }).then(() => {
        $('div.error').slideUp()
        loadTweets();
        // empty textarea and reset counter
        $(this).find('textarea').val('');
        $(this).find('.counter').val('140');
      });
    }

  });
  
  const loadTweets = function() {
    $.ajax({
      url: 'tweets',
      method: 'GET',
    }).then((tweets) => {
      $('#tweets-container').empty();
      renderTweets(tweets);
    });
  };

  loadTweets();
  
});