$(function(){
  function buildHTML(message){ 
    var image = message.image ? `<img src ="${message.image}">`: ""
    var content = message.content ? `${message.content}`:""
    var html = `<div class="maincontent" data-message-id= ${message.id}>
                  <div class="maincontents__toptext">
                    <div class="maincontents__toptext__left">
                      ${message.user_name}
                    </div>
                    <div class="maincontents__toptext__right">
                      ${message.date}
                    </div>
                  </div>
                  <div class="maincontents__bottomtext">
                    <p class="lower-message__content">
                      ${content}
                    </p>
                      ${image}
                  </div>`
    return html;
  };
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
  var reloadMessages = function() {
    last_message_id = $(".maincontents__toptext:last").data('message-id')
    $.ajax({
      url: location.href,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      always(function(data){
        $.each(data, function(data){
          insertHTML(data)
        });
        $('.maincontents').animate({scrollTop: $('.maincontents')[0].scrollHeight}, 'fast');   
      });
      
      })
    .fail(function() {
      console.log('error');
    });
  };
  $(function(){
    setInterval(reloadMessages, 7000);
  });
  // $('.maincontents').animate({scrollTop: $('.maincontents')[0].scrollHeight}, 'fast');
});

