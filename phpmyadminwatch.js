$(  function(){
  //Should not take more then 20 seconds to load
  var maxCt = 20;
  chrome.storage.sync.get({
    targetUrl: ''
  }, function(items) {
    items.targetUrl;
    var tmpInterval = setInterval(
      function(){
        if( $(".result_query").find(".sql-highlight").text().split(" ")[0] == "ALTER" ){
          if( items.targetUrl !== ""){
            $.ajax({
              type: "POST",
              url: items.targetUrl ,
              data: { query: $(".result_query").find(".sql-highlight").text() },
              complete: function (data) {}
            } );
            clearInterval( tmpInterval );
          } else {
            if( maxCt <= 0 ){
              clearInterval( tmpInterval );
            }
            maxCt--;
          }
        }
      },
      1000
    );

  });


 } );
