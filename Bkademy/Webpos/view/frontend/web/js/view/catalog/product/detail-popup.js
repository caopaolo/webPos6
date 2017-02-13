define(
    [
        'jquery',
        'ko',
        'uiComponent',
        'Bkademy_Webpos/js/model/catalog/product/detail-popup'
    ],
    function ($, ko, Component, detailPopup) {
        "use strict";
        return Component.extend({
            itemData: ko.pureComputed(function () {
                return detailPopup.itemData();
            }),
                // itemData : reference with element knockout  from detail-popup model
            defaults: {
                template: 'Bkademy_Webpos/catalog/product/detail-popup'
            },
            initialize: function () {
                this._super();
            },
            isShowAvailableQty: function(){
                return true;
            },
            closeDetailPopup: function() {
                $("#popup-product-detail").hide();
                $(".wrap-backover").hide();
                $('.notification-bell').show();
                $('#c-button--push-left').show();
            },
        });
    }
);
