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
  "DOMContentLoaded", e => {
    let modal_open = document.getElementById("your-img");
    modal_open.onclick = function () {
      $('#overlay').fadeIn();
      document.getElementById('modal-close-btn').onclick = function () {
        $('#overlay').fadeOut();
      };
      document.getElementById("submit-btn").onclick = function () {
        $('#overlay').fadeOut();
      };
    }

    // $("#profile-form").on("#submit-btn", function(e) {
    //     e.preventDefault();
    //     const nickname = $("#nickname-form").val();
    //     const avatar = $("#yourimg-form").val();
    //     const dataset = $("#profile_container").data();
    //     const profileId = dataset.profileId
        
    //     $.ajax({
    //       url: `/profile/{profileId}`,
    //       type: "PUT",
    //       data: {
    //         profile: {
    //           nickname:nickname,
    //           avatar:avatar
    //         }
    //       },
    //       dataType: "json"
    //     })
    //   })

    // axios.get(`/profile/${profileId}`)
    //   .then((response) => {
    //     debugger
    //     const profile = response.data

    //     $(".your_name").append(`<p><%=@profile.nickname=></p>`)
    //     $(".your_img").append(`<p><%=@profile.avatar=></p>`)
    //   })
  },
  
  
);