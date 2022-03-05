$(() => {

  $('textarea').on("input", function() {
    const maxlength = 140;
    const tweetText = $(this).val();
    const children = $(this).parent().children()[2];
    const $children = $(children).children()[1];
    const counter = $($children);

    counter[0].innerText = maxlength - tweetLength;
    if (counter[0].innerText < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }

  });

});