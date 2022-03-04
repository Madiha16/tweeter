$(() => {

  $('textarea').on("input", function() {

    // create max char variable
    const maxlength = 140;

    // Use this to grab the value of the textarea in question
    // textarea tag has id of: #tweet-text
    const tweetText = $(this).val();
    console.log("tweetText:", tweetText);

    // and determine the length of that input value
    const tweetLength = $(this).val().length;
    console.log("tweetLength:", tweetLength);

    // To target the counter, you could just use $('.counter') but this is also bad practice.
    // Why? How should you target the counter instead? Instead of just being more explicit, leverage this again
    // to get to the counter. Not sure how? Remember that this points to the textarea. Can you perhaps
    // use jQuery to traverse up the DOM tree from that node/element and then back down to a node that
    // matches the '.counter' CSS selector? You may need to research this a bit and/or discuss it with your peers.
    
    // const counter = tweetText.children('.counter').val();
    // const counter = $('.counter').val();// 140
    // console.log("counter:", counter);
    // this.parent.thirdchild.secondchild.value
    const children = $(this).parent().children()[2];
    const $children =  $(children).children()[1];
    const counter = $($children);

    console.log("counter:", counter);

    // if (tweetLength >= maxlength) {
    //   return console.log("You have reached the maximum number of characters.");
    // } else {
    //   let char = maxlength - tweetLength;
    //   console.log("char:", char);
    // }

  });

});