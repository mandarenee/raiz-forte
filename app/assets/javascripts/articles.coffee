# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(window).load ->
    if document.getElementById('article_body_ifr') != null
        images = document.getElementById('article_body_ifr').contentDocument.getElementsByTagName('img')

        for i in [0...images.length]
            newUrlArray = images[i].src.split('/').filter (e) -> e != 'articles'
            newUrl = newUrlArray.join('/')
            images[i].src = newUrl
