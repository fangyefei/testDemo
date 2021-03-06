(function ($) {
    $.extend({
        customer: {}
    });

    /**
     * 表格内容
     */
    $.customer.tableColumns = [{
        field: 'dsRegionName',
        title: '地市'
    }, {
        field: 'regionName',
        title: '区县'
    }, {
        field: 'custNo',
        title: '客户编码'
    }, {
        field: 'customerName',
        title: '客户名称'
    }, {
        field: 'customerNo',
        title: '用户编码'
    },{
        field: 'inspectionTotal',
        title: '巡检记录'
        // formatter: function (value, row, index) {
        //     return '<a href="javascript:void(0)" class="operate-inspection">' + value + '</a>';
        // },
        // events: {
        //     'click .operate-inspection': function (e, value, row, index) {
        //         $.inspection.view(2, row.customerNo);
        //     }
        // }
    }, {
        field: 'customerBusinessTotal',
        title: '客户业务',
        formatter: function (value, row, index) {
            return '<a href="javascript:void(0)" class="operate-customerBusiness">' + value + '</a>';
        },
        events: {
            'click .operate-customerBusiness': function (e, value, row, index) {
                $.customerBusiness.view(row.customerId, row.customerNo);
            }
        }
    }, {
        field: 'buildingTotal',
        title: '关联楼宇',
        formatter: function (value, row, index) {
            return '<a href="javascript:void(0)" class="operate-building">' + value + '</a>';
        },
        events: {
            'click .operate-building': function (e, value, row, index) {
                $.buildingCustomerRp.view(null, null, row.customerId, row.customerNo);
            }
        }
    }, {
        field: 'industryTypeName',
        title: '所属行业'
    }, {
        field: 'keyPerson',
        title: '客户联系人'
    }, {
        field: 'keyPersonContact',
        title: '客户联系电话'
    }, {
        field: 'monthFee',
        title: '月费'
    }, {
        field: 'remark',
        title: '备注'
    }];

    /**
     * 初始化
     */
    $.customer.init = function () {

    };
})(jQuery);