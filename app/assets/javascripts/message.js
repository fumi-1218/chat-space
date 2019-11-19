$(function(){
  function buildHTML(message){
    var image = message.image ? `<img src ="${message.image}">`: ""
    var html = `<div class="maincontents__toptext" data-message-id=${message.id}>
                  <div class="maincontents__toptext__left">
                    ${message.user_name}
                  </div>
                  <div class="maincontents__toptext__right">
                    ${message.date}
                  </div>
                </div>
                <div class="maincontents__bottomtext">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  ${image}
                </div>`
    return html;
    } 

  $('.new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.maincontents').append(html);
      $('.maincontents').animate({scrollTop: $('.maincontents')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });
});