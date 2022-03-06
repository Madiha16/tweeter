$(() => {

  $('textarea').on("input", function() {
    const tweetLength = $(this).val().length;
    const $child1 = $(this).parent().children()[2];
    const $child2 = $($child1).children()[1];
    const counter = $($child2);

    counter[0].innerText = 140 - tweetLength;
    if (counter[0].innerText < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }

  });

});