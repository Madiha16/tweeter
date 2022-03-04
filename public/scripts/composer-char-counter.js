$(() => {

  $('textarea').on("input", function() {

    // create max char variable
    const maxlength = 140;

    // Use 'this' to grab the value of the textarea in question
    // textarea tag has id of: #tweet-text
    const tweetText = $(this).val();
    // console.log("tweetText:", tweetText);// gives back text in textarea

    // and determine the length of that input value
    const tweetLength = $(this).val().length;
    // console.log("tweetLength:", tweetLength);// counts characters in textarea

    // const counter = $('.counter').val();// 140
    const children = $(this).parent().children()[2];
    const $children = $(children).children()[1];
    const counter = $($children);// the counter is a DOM element, using jQuery to manipulate it
    // let counterVal = $($children).text(); // 140
    // console.log("counter:", counter);

    // set innerText to counter[0] innnerText value (140)
    // let innerText = counter[0].innerText;// 140
    // console.log("innerText:", innerText);

    // set counter's innerText equal to -> maxLength - the tweetLength value (increases or decreases depending on input)
    counter[0].innerText = maxlength - tweetLength;

    // if the counter' inner text is less than 0, call a jQuery function on it
    //which takes in a string, which is styled red in new-tweet.css sheet
    // OTHERWISE, remove the class (if not less than 0, when characters over limit are deleted)
    // 'negative' is a string which matches the css class we named it
    if (counter[0].innerText < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }

  });

});