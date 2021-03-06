// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// = require jquery

import $ from 'jquery'
import axios from 'axios'
import { debuglog } from 'util'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener(
  "DOMContentLoaded", e => {
    let modal_open = document.getElementById("modalopen");
    modal_open.onclick = function () {
      $('#overlay').fadeIn();
      document.getElementById('modal-close-btn').onclick = function () {
        $('#overlay').fadeOut();
      };
      document.getElementById("submit-btn").onclick = function () {
        $('#overlay').fadeOut();
      };
    }

    const dataset = $('#post_show').data()
    const postId = dataset.postId
    

    // axios.get(`/posts/${postId}/like`)
    //   .then((response) => {
    //     const hasLiked = response.data.hasLiked
    //     if (hasLiked) {
    //       $(`.onheart` ).removeClass('hidden')
    //     }
    //     else {
    //       $(`.offheart`).removeClass('hidden')
    //     }
    //   })
    
    
    

    $('.offheart').on('click', function() {
      const postId = $(this).attr('id')

      axios.post(`/posts/${postId}/like`)
      .then((response) => {
        if(response.data.status === 'ok') {
          $(this).addClass('hidden')
          $(`#${postId}.onheart`).removeClass('hidden')
        }
      })

        .catch((e) => {
          window.alert('Error')
          console.log(e)
        })
    })

    $('.onheart').on('click', function() {
      const postId = $(this).attr('id')

      axios.delete(`/posts/${postId}/like`)
        .then((response) => {
          if(response.data.status === 'ok') {
            $(this).addClass('hidden')
            $(`#${postId}.offheart`).removeClass('hidden') 
          }
        })

        .catch((e) => {
          window.alert('Error')
          console.log(e)
        })
    })
    
  })