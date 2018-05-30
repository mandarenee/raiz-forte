# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(window).ready ->
    $('.fb-video').each (index, elem) ->
        src = elem.children[0].src
        heightIndex = src.indexOf('height=')
        height = src.substring(heightIndex + 7, heightIndex + 10)
        heightInPx = '' + height + 'px'
        $(elem.children[0]).css('height', heightInPx)
        true
