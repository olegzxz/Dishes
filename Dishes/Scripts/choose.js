﻿(function ($) {
    $(".chzn-select").change(selectDishes);

    var d = new ViewModel();

    ko.applyBindings(d);

    function selectDishes() {
        //var dishes = [];

        $.ajax({
            url: 'FindByIngredients',
            type: 'get',
            data: {
                dishes: $(".chzn-select").val(),
            },
            traditional: true,
            dataType: 'json',
            success: function (data) {
                
                //$('.panel-body').empty();
                //$.each(data, function (i) {
                //    $('.panel-body').append('<li><a href="/dishes/' + this.Id + '">' + this.Name + '</a></li>');
                    
                //});

                //$('.panel-body').html('<p>Full name: <strong data-bind="text: fullName"></strong></p>');
                d.updateDishes(data);
            }
        });
    };


})(jQuery);
