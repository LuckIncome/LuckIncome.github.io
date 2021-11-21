(function ($)
{
    jQuery.fn.emo_gallery = function (options)
    {
        var settings = jQuery.extend({
            label_color: "#fff",
            border_style: "5px solid grey",
            background_style: "rgba(50, 50, 50, 0.7)"
        }, options);

        var doIt = function ()
        {
            var $header = jQuery(this).find("h2");
            var tmpStr = $header.html();
            $header.html("<a class='header' href='#'>" + tmpStr + "</a>").find("a.header").on("click", function (){
                $(this).parent().parent().find("img").toggle("slow");
                return false;
            });

            $(this).find("img").click(function(){
                var $body = $('body');
                var win_h = $(window).height(), win_w = $(window).width();
                var $opacyLayer = $("<div class='opacylayer'>").css({
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "background": settings.background_style
                }).height($(document).height()).width($(document).width()).appendTo($body).click(function (){
                    $label.remove();
                    $big_image.remove();
                    $opacyLayer.remove()
                });
                var $big_image = $("<img>").attr("src", this.src.replace("thumb/", "/")).appendTo($body);
                var $label = $("<span style='font-size: 2em'>").html(this.alt + "<br><em style='font-size: 0.5em'>" + this.title + "</em>").appendTo($body);

                $big_image.css({
                    "position": "absolute",
                    "display": "none",
                    "border": settings.border_style,
                    "top": win_h/2 + $(window).scrollTop() + "px",
                    "left": win_w/2 + "px"
                }).on("load", function(){
                    var h, w;
                    if((this.height / win_h) > (this.width / win_w))
                    {
                        h = (this.height > win_h)?win_h-30:this.height;
                        w = this.width * h / (this.height);
                    }
                    else
                    {
                        w = (this.width > win_w)?win_w-30:this.width;
                        h = this.height * w / (this.width);
                    }

                    $(this).css({
                        "width": 0,
                        "height": 0
                    });
                    $(this).animate({
                        "top": ((win_h - h)/2) + $(window).scrollTop() + "px",
                        "left": ((win_w - w)/2) + "px",
                        "height": h + "px",
                        "width": w + "px"
                    }, 300, function(){
                        $label.css({
                            "position": "absolute",
                            "top": $(window).scrollTop() + 20 + "px",
                            "left": ((win_w - w)/2) + "px",
                            "padding": "0 0 0 20px",
                            "color": settings.label_color
                        })
                    });
                });
                $big_image.click(function (){
                    $label.remove();
                    $big_image.remove();
                    $opacyLayer.remove()
                });
            });

        };
        return this.each(doIt);
    };
})(jQuery);