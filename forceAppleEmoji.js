(function(){
  'use strict';

  var debug = false;
  var version = "0.2.0";

  if(debug){
    alert('slack loader thing version ' + version);
  }
  
  console.log('replacing gross google emojis with apple emojis');
  
  //if for some reason your slack is still using the old emoji system, don't replace it
  if($('.emoji-outer').css('background-image').indexOf('slack-resources') !== -1)
    return;
  
  var slackForceAppleEmoji = $(`
    <div id="slackForceAppleEmoji" style="display: none;">
      <style>
        .emoji-outer {
          background-image: url("https://a.slack-edge.com/c00d19/img/emoji_2017_12_06/sheet_apple_64_indexed_256.png") !important;
        }
      </style>
    </div>
  `);
  
  $('#slackForceAppleEmoji').remove();
  $('body').append(slackForceAppleEmoji);

})();
