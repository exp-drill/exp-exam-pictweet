$(document).on('turbolinks:load', function(){
    $(function() {
      $('#animal').on("click", function() {
        $(this).css('background-color', '#f5f5f3');
        $('#view').css('background-color', 'forestgreen');
        $('#machine').css('background-color', 'forestgreen');
        $('#food').css('background-color', 'forestgreen');
        $('#program').css('background-color', 'forestgreen');

        $('#two').css('display', 'none')
        $('#three').css('display', 'none')
        $('#four').css('display', 'none')
        $('#five').css('display', 'none')
        $('#many').css('display', 'none')
        $('#one').show();
      })
  
      $('#view').on("click", function() {
        $(this).css('background-color', '#f5f5f3');
        $('#animal').css('background-color', 'forestgreen');
        $('#machine').css('background-color', 'forestgreen');
        $('#food').css('background-color', 'forestgreen');
        $('#program').css('background-color', 'forestgreen');
  
        $('#one').css('display', 'none')
        $('#three').css('display', 'none')
        $('#four').css('display', 'none')
        $('#five').css('display', 'none')
        $('#many').css('display', 'none')
        $('#two').show();
      })

      $('#machine').on("click", function() {
        $(this).css('background-color', '#f5f5f3');
        $('#animal').css('background-color', 'forestgreen');
        $('#view').css('background-color', 'forestgreen');
        $('#food').css('background-color', 'forestgreen');
        $('#program').css('background-color', 'forestgreen');

        $('#one').css('display', 'none')
        $('#two').css('display', 'none')
        $('#four').css('display', 'none')
        $('#five').css('display', 'none')
        $('#many').css('display', 'none')
        $('#three').show();
      })

      $('#food').on("click", function() {
        $(this).css('background-color', '#f5f5f3');
        $('#animal').css('background-color', 'forestgreen');
        $('#view').css('background-color', 'forestgreen');
        $('#machine').css('background-color', 'forestgreen');
        $('#program').css('background-color', 'forestgreen');

        $('#one').css('display', 'none')
        $('#two').css('display', 'none')
        $('#three').css('display', 'none')
        $('#five').css('display', 'none')
        $('#many').css('display', 'none')
        $('#four').show();
      })

      $('#program').on("click", function() {
        $(this).css('background-color', '#f5f5f3');
        $('#animal').css('background-color', 'forestgreen');
        $('#view').css('background-color', 'forestgreen');
        $('#machine').css('background-color', 'forestgreen');
        $('#food').css('background-color', 'forestgreen');

        $('#one').css('display', 'none')
        $('#two').css('display', 'none')
        $('#three').css('display', 'none')
        $('#four').css('display', 'none')
        $('#many').css('display', 'none')
        $('#five').show();
      })
  
      $('#view').hover(
        function() {
          $(this).css('color', 'orangered');
        }, function() {
          $(this).css('color', '#A9A9A9');
        }
      );
  
      $('#animal').hover(
        function() {
          $(this).css('color', 'orangered');
        }, function() {
          $(this).css('color', '#A9A9A9');
        }
      );

      $('#machine').hover(
        function() {
          $(this).css('color', 'orangered');
        }, function() {
          $(this).css('color', '#A9A9A9');
        }
      );

      $('#food').hover(
        function() {
          $(this).css('color', 'orangered');
        }, function() {
          $(this).css('color', '#A9A9A9');
        }
      );

      $('#program').hover(
        function() {
          $(this).css('color', 'orangered');
        }, function() {
          $(this).css('color', '#A9A9A9');
        }
      );
  
    })
  });