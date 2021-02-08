// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import $ from 'jquery'
import axios from 'axios'
import { debuglog } from 'util'

document.addEventListener(
  "turbolinks:load", e => {
    let modal_open = document.getElementById("your-img");
    modal_open.onclick = function () {
      $('#overlay').fadeIn();
      document.getElementById('modal-close-btn').onclick = function () {
        $('#overlay').fadeOut();
      };
      document.getElementById("submit-btn").onclick = function () {
        $('#overlay').fadeOut();
      };
    };
  }, 

  (function(win, doc){
    "use district";

    $("form").submit(function(e){
      e.preventDefault();

      var fd = new FormData($(this)[0]);

      $ajax('/profile/'), {
        method: "PUT",
        processData: false,
        contentData: false,
        data: fd,
        dataType: 'json',
        success: function(json) {
          var img = $('<img>').attr('src', json.profile_url);
          $('profile_img').append(img);
          $('form').find(':submit').attr('disabled', true);
        },
        error: function(json) {
          alert('エラーが発生しました');
        }
      }
    });
  })(this, document)
);

