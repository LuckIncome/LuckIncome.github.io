(function ($)
{
    jQuery.fn.carousel = function (options)
    {
        var jsTimeout = 0;
        var doIt = function ()
        {
            options = options || {};

            if (this.jsTimeout)
            {
                clearTimeout(this.jsTimeout);
            }

            var $options = jQuery.extend({}, jQuery.fn.carousel.defaults, options || {});

            var $carousel = $(this);
            var $images_wrapper = $carousel.find($options.images_expression);
            if ($images_wrapper.children().length < 2)
            {
                if (window.console)
                {
                    console.log('terminating; too few slides: ' + $images_wrapper.children().length);
                }
                return;
            }
            $images_wrapper.width($carousel.width() * $images_wrapper.children().length);
            $images_wrapper.css({'left': '-' + $carousel.width() * $options.current_image + 'px'});
            $images_wrapper.children().css({
                'float': 'left',
                'width': $carousel.width() + "px"
            });

            $carousel.find('#next').bind('click.carousel', function ()
            {
                $images_wrapper.stop(true, true);
                return next($images_wrapper, $options);
            });
            $carousel.find('#prev').bind('click.carousel', function ()
            {
                $images_wrapper.stop(true, true);
                return prev($images_wrapper, $options);
            });
            $carousel.hover(function ()
            {
                if (jsTimeout)
                {
                    clearTimeout(jsTimeout);
                    jsTimeout = 0;
                }
            }, function ()
            {
                if ($options.auto_rotate)
                {
                    jsTimeout = setTimeout(function ()
                    {
                        return timer($images_wrapper, $options);
                    }, $options.rotating_speed + $options.rotating_interval);
                }
            });

            if ($options.auto_rotate)
            {
                jsTimeout = setTimeout(function ()
                {
                    return timer($images_wrapper, $options);
                }, $options.rotating_speed + $options.rotating_interval);
            }
        };

        var timer = function ($images_wrapper, $options)
        {
            prev($images_wrapper, $options);
            jsTimeout = setTimeout(function ()
            {
                return timer($images_wrapper, $options);
            }, $options.rotating_speed + $options.rotating_interval)
        };
        var next = function ($images_wrapper, $options)
        {
            var $block = $images_wrapper.children().eq(-1);
            if ($options.current_image === 0)
            {
                $images_wrapper.prepend($block);
                $images_wrapper.css({'left': '-' + $block.width() + 'px'});
                $options.current_image++;
            }
            $images_wrapper.animate({'left': '+=' + $block.width() + 'px'}, $options.rotating_speed);
            $options.current_image--;
        };
        var prev = function ($images_wrapper, $options)
        {
            var $block = $images_wrapper.children().eq(0);
            if ($options.current_image === $images_wrapper.children().length - 1)
            {
                $images_wrapper.append($block);
                $images_wrapper.css({'left': '+=' + $block.width() + 'px'});
                $options.current_image--;
            }
            $images_wrapper.animate({'left': '-=' + $block.width() + 'px'}, $options.rotating_speed);
            $options.current_image++;
        };

        return this.each(doIt);
    };

    jQuery.fn.carousel.defaults = {
        images_expression: '.images',
        next_expression: '#next',
        prev_expression: '#prev',
        hover_pause: false,
        auto_rotate: true,
        rotating_interval: 2500,
        rotating_speed: 1500,
        current_image: 0
    };
})(jQuery);