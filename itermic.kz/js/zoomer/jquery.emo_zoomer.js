(function ($)
{
    jQuery.fn.emo_zoomer = function (options)
    {
        options = jQuery.extend({
            width_from: 300,
            width_to: 700,
            height_from: 300,
            height_to: 700,
            to_pic: true,
            next_pic: "next.png",
            prev_pic: "prev.png"
        }, options);

        var doIt = function ()
        {
            var $pic = jQuery(this).find(".pic > img");
            if (options.to_pic)
            {
                $pic.on('click', function ()
                {
                    if ($pic.height() <= 300)
                    {
                        $pic.animate({
                            width: options.width_to + 'px',
                            height: options.height_to + 'px',
                            left: (options.width_from - options.width_to) / 2 + 'px',
                            top: (options.height_from - options.height_to) / 2 + 'px'
                        }, 300);
                    }
                    else
                    {
                        $pic.animate({
                            'width': options.width_from + 'px',
                            'height': options.height_from + 'px',
                            'left': '0',
                            'top': '0'
                        }, 300);
                    }
                });
                $(this).find(".thumbnails > img.thumb").on('click', function ()
                {
                    $pic.eq(0).prop("src", this.src);
                });
            }
            else
            {
                $(this).find(".thumb").click(function(){
                    var win_h = $(window).height(), win_w = $(window).width();
                    var $opacyLayer = $("<div class='opacylayer'>").css({
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "background": "rgba(50, 50, 50, 0.7)"
                    }).height($(document).height()).width($(document).width()).appendTo("body").click(function (){
                        $big_image.remove();
                        $opacyLayer.remove()
                    });

                    var $big_image = $("<img>").attr("src", this.src).appendTo("body");
                    var h, w;
                    if(($big_image.height() / win_h) > ($big_image.width() / win_w))
                    {
                        h = ($big_image.height() > win_h)?win_h-30:$big_image.height();
                        w = $big_image.width() * h / ($big_image.height());
                    }
                    else
                    {
                        w = ($big_image.width() > win_w)?win_w-30:$big_image.width();
                        h = $big_image.height() * w / ($big_image.width());
                    }

                    $big_image.css({
                        "width": 0,
                        "height": 0,
                        "position": "absolute",
                        "display": "none",
                        "border": "5px solid grey",
                        "top": win_h/2 + $(window).scrollTop() + "px",
                        "left": win_w/2 + "px"
                    }).animate({
                        "top": ((win_h - h) / 2) + $(window).scrollTop() + "px",
                        "left": ((win_w - w) / 2) + "px",
                        "height": h + "px",
                        "width": w + "px"
                    }, "slow").click(function(){
                        $big_image.remove();
                        $opacyLayer.remove()
                    });
                });
            }
        };
        return this.each(doIt);
    };
})(jQuery);