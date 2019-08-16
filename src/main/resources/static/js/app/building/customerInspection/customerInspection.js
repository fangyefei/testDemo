$(function () {
    var $form = $(".customerInspection-table-form");

    function initTable() {
        var settings = {
            url: ctx + "customerInspection/list",
            pageSize: 10,
            queryParams: function (params) {
                return {
                    pageSize: params.limit,
                    pageNum: params.offset / params.limit + 1,
                    dsRegionId: $("#dsId").val(),
                    regionId: $("#qxId").val(),
                    buildingNo: $form.find("input[name='buildingNo']").val().trim(),
                    buildingName: $form.find("input[name='buildingName']").val().trim(),
                    custNo: $form.find("input[name='custNo']").val().trim(),
                    customerName: $form.find("input[name='customerName']").val().trim(),
                    createStaffName: $form.find("input[name='createStaffName']").val()
                };
            },
            columns:[{
                checkbox: true
            }, {
                field: 'buildingId',
                visible: false
            },{
                field: 'buildingName',
                title: '楼宇名称'
            }, {
                field: 'buildingNo',
                title: '楼宇编码'
            },{
                field: 'customerName',
                title: '客户名称'
            }, {
                field: 'custNo',
                title: '客户编码'
            },{
                field: 'position',
                title: '自动定位新消息'
            }, {
                field: 'introduction',
                title: '拜访描述'
            }, {
                field: 'createStaffName',
                title: '巡检人'
            }, {
                field: 'createDate',
                title: '巡检时间'
            }]
        };

        $MB.initTable('customerInspectionTable', settings);
    }

    function search() {
        $MB.refreshTable('customerInspectionTable');
    }

    function refresh() {
        $form[0].reset();
        search();
    }

    initTable();

    $(".customerInspection-search").click(function () {
        search();
    });

    $(".customerInspection-refresh").click(function () {
        refresh();
    });

    $(".customerInspection-export-excel").click(function () {
        $.utils.exportFile(ctx + "customerInspection/excel", $form.serialize());
    });

    $(".customerInspection-export-csv").click(function () {
        $.utils.exportFile(ctx + "customerInspection/csv", $form.serialize());
    });

    function initDs() {
        var _ds = $("#dsId");
        _ds.empty();
        $.post(ctx + "region/options", {
            gradeId: "2000004"
        }, function (r) {
            if (r.code === 0) {
                var data = r.msg;
                var html = [];
                html.push("<option value='' selected>---请选择---</option>");
                for (var i = 0; i < data.length; i++) {
                    var isSelectStr = "";
                    if (G_REGION_ID === data[i].regionId) {
                        isSelectStr = "selected=true";
                        $("#dsId").attr("disabled", "disabled");
                    }
                    html.push("<option value='" + data[i].regionId + "' " + isSelectStr + ">" + data[i].regionName + "</option>");
                }
                _ds.append(html.join(''));

                _ds.change(function () {
                    initQx();
                });

                initQx();
            } else {
                $MB.n_danger(r.msg);
            }
        });
    }

    function initQx() {
        var _ds = $("#dsId");
        var _qx = $("#qxId");
        _qx.empty();
        if (null !== _ds.val() && "" !== _ds.val()) {
            $.post(ctx + "region/options", {
                gradeId: "2000011",
                superRegionId: $("#dsId").val()
            }, function (r) {
                if (r.code === 0) {
                    var data = r.msg;
                    var html = [];
                    html.push("<option value='' selected>---请选择---</option>");
                    for (var i = 0; i < data.length; i++) {
                        html.push("<option value='" + data[i].regionId + "'>" + data[i].regionName + "</option>");
                    }
                    _qx.append(html.join(''));
                } else {
                    $MB.n_danger(r.msg);
                }
            });
        }
    }

    initDs();
});