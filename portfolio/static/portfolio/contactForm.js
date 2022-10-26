


  function send(){
    id_subject = document.getElementById("id_subject").value
    id_sender = document.getElementById("id_sender").value
    id_message = document.getElementById("id_message").value
  
  
  
      sendMessage()
      
  }
  
  
  function sendMessage(){
      url = window.location.href
      url = url.split('/')
      var pk = url[url.length - 1];
      console.log(pk)
      $.ajax(
        {
            type:"GET",
            url: "contactsubmit/",
            
            dataType: 'json',
            data:{
              id_subject: String(id_subject),
              id_sender: String(id_sender),
              id_message: String(id_message),
  
            },
            success: function(asdf) {
                document.getElementById("message-send").innerHTML = "Message sent successfully!"

  
    
          }
        })  
    }
  


  
  
  