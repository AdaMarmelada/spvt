var obTabs = {
    defWrapperTarget: "body",
    defTabTarget: ".js-tabs",

    /**
     *
     * @param strWrapper
     */
    init: function(strWrapper){
        var ctx = this;

        if(!strWrapper) strWrapper = ctx.defWrapperTarget;

        $(strWrapper).find(ctx.defTabTarget).each(function(){
            ctx.initBtns(
                ctx.getOnlyChilds(
                    $(this).find("[data-tab_target]"),
                    $(this)
                )
            );
            ctx.initContent(
                $(this).find('[data-tab_content]').first().find('[data-tab_item]')
            );
        })
        ctx.initEvents();
    },

    /**
     *
     * @param collection
     */
    initBtns: function(collection){
        collection.forEach(function ($item) {
            $item.removeClass("active");
        })

        if (!!collection[0]) {
            collection[0].addClass("active");
        }
    },

    /**
     *
     * @param $collection
     */
    initContent: function($collection){
        $collection.hide();
        $collection.first().fadeIn();
    },

    /**
     *
     */
    initEvents: function(){
        var ctx = this;

        $(ctx.defTabTarget).on("click", "[data-tab_target]", function(e){
            ctx.tabClickCallBack(e, this);
        });
    },

    /**
     *
     * @param evt
     * @param self
     */
    tabClickCallBack: function(evt, self){

        evt.preventDefault();

        var ctx = this,
            $wrap = $(self).parents(ctx.defTabTarget).first(),
            $target = $($(self).attr("data-tab_target"));

        this.getOnlyChilds($wrap.find("[data-tab_target]"), $wrap).forEach(function ($item) {
            $item.removeClass("active");
        })

        this.getOnlyChilds(
            $wrap.find('[data-tab_content]').first().find('[data-tab_item]'),
            $wrap
        )
            .forEach(function ($item) {
                $item.hide();
            });

        $(self).addClass("active");
        $target.show();
    },

    /**
     *
     * @param collection
     * @param $wrapper
     * @returns {[]}
     */
    getOnlyChilds: function (collection, $wrapper) {
        var result = [],
            ctx = this;

        collection.each(function () {
            if ($(this).parents(ctx.defTabTarget).first().is($wrapper)) {
                result.push($(this));
            }
        });

        return result;
    }
}
