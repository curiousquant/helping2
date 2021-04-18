


$(document).ready(function(){
    const $ids = $('#ids');

    $ids.on("click",function(){
      console.log("hi");
    //   $.ajax({
    //     url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
    //     type: 'GET',
    //     xhrFields: {
    //         withCredentials: true,
    //     },
    //     success: function(res) {
    //         console.log(res);
    //     }
    //   })

      const result = await axios({
        method: 'get',
        url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
        withCredentials: true,
       });
       console.log(result)
    });
    
    
  });

  