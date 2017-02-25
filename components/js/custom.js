 $(document).ready(function() {

      $('div.day-item').click(function() {
        var date_fromDatePicker = $('div.day-item.selected').attr('date');
        $("span.startdate:not(:contains('" + date_fromDatePicker + "'))").parents('#event-item').hide();
        $("span.startdate:contains('" + date_fromDatePicker + "')").parents('#event-item').show();
      });

      $('.style-scope.event-toolbar.x-scope.iron-icon-0').click(function() {
        $('.style-scope.event-toolbar.x-scope.iron-icon-0').css("cursor", "hand");
        //location.reload();
        $("span.startdate").parents('#event-item').show();
      });

    });