window.onload = () => { 
  let main = $('main');
  let frame = $('.iframe');
  $('#works').click(() => { 
    main.attr('style', 'opacity: 0;');
    $('body').attr('overflow-y: hidden');
    $(frame).append(` 
      <iframe id='youtubeVideo' src="https://www.youtube-nocookie.com/embed/MuU0W15zBB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
    `);
    frame.toggle();
  })

  $('.closeIcon').click(() => { 
    main.attr('style', 'opacity: 1;');
    $('body').attr('overflow-y: scroll');
    $('iframe').remove();
    frame.toggle();
  })
}