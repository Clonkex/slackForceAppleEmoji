(function(){
  'use strict';

  var debug = true;
  var version = "0.3.0";

  // Because sometimes things break and you can't tell if the script
  // is even loading in the Slack app.
  if(debug){
    alert('slinger version ' + version);
  }

  var inApp = window.TSSSB && window.TSSSB.env && window.TSSSB.envdesktop_app_version;

  /////////////////////////////////////////////////////////////////////
  // Little link for fun.
  /////////////////////////////////////////////////////////////////////
  var $slinger = $(`
    <div id="slinger" style="display: none;">
      <style>
        #slinger {
          display: block !important;
          position: absolute;
          z-index: 100000;
          left: 5px;
          width: 210px;
          height: 20px;
          bottom: 5px;
          background: #78bbe7;
          border: 1px solid white;
          color: white;
          font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
          font-size: 10px;
          text-align: center;
        }

        #slinger a {
            pointer: cursor;
            color: white;
            line-height: 20px;
            font-weight: bold;
            text-decoration: none;
        }

        #slinger:hover a {
            text-decoration: underline;
        }

        #channels_scroller {
            padding-bottom: 50px;
        }
      </style>
      <a href="https://zachsnow.github.io/slinger/">Pingerz v${version} &raquo;</a>
    </div>
  `);
  $('#slinger').remove();
  $('body').append($slinger);
})();
