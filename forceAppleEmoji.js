(function(){
  'use strict';

  var debug = true;
  var version = "0.1.0";

  // Because sometimes things break and you can't tell if the script
  // is even loading in the Slack app.
  if(debug){
    alert('slack loader thing version ' + version);
  }
  
  console.log('replacing gross google emojis with apple emojis');
  
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
