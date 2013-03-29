r.f2p.Item = Backbone.Model.extend({
    defaults: {
        "cursor": "crosshair",
        "description": "lorem ipsum dolor sit amet your hampster",
        "flavor": "flavor flavor flavor flavor flavour flavour flavour flavour flavour"
    }
})

r.f2p.Inventory = Backbone.Collection.extend({
    url: '#inventory',
    model: r.f2p.Item,

    use: function(item, targetId) {
        $.ajax({
            type: 'post',
            url: '/api/f2p/use_item',
            data: {
                item: item.get('kind'),
                target: targetId
            },
            success: _.bind(function() {
                this.remove(item)
            }, this)
        })
    }
})

r.f2p.Item.kinds = {}

r.f2p.Item.kinds.cruise = r.f2p.Item.extend({}, {
    applyEffect: function($el) {
        $el.find('.usertext-body .md').html('<p>Tom Cruise</p>')
    }
})
