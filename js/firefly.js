(function ($) {
    var defaults = {
        total: 10,
        ofTop: 0,
        ofLeft: 0,
        on: "document.body",
        twinkle: 0.2,
        minPixel: 1,
        maxPixel: 2,
        color: "#fff",
        namespace: "jqueryFireFly",
        zIndex: Math.ceil(20 * Math.random()) - 1,
        borderRadius: "50%",
        _paused: false
    };

    $.firefly = function (config) {
        var settings = $.extend({}, defaults, config);

        function randomValue(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (var i = 0; i < settings.total; i++) {
            var pixelSize = randomValue(settings.minPixel, settings.maxPixel);
            var spark = createSpark(pixelSize);
            flySpark(spark);
        }
    };

})(jQuery);
