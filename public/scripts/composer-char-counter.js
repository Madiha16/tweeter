$(() => {

  $('textarea').on("input", function() {

    // create max char variable
    const maxlength = 140;

    // Use this to grab the value of the textarea in question
    // textarea tag has id of: #tweet-text
    const tweetText = $(this).val();
    // console.log("tweetText:", tweetText);

    // and determine the length of that input value
    const tweetLength = $(this).val().length;
    // console.log("tweetLength:", tweetLength);

    // const counter = $('.counter').val();// 140
    const children = $(this).parent().children()[2];
    const $children = $(children).children()[1];
    const counter = $($children);// the counter is a DOM element, using jQuery to manipulate it
    // let counterVal = $($children).text(); // 140
    console.log("counter:", counter);
    let innerText = counter[0].innerText;// 140
    counter[0].innerText = maxlength - tweetLength;
    // console.log("innerText:", innerText);

    // 'negative' is a string which matches the css class we named it
    if (counter[0].innerText < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }

  });

});