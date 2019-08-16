$(function () {
    var $form = $(".buildingQuery-table-form");

    function initTable() {
        var settings = {
            url: ctx + "buildingQuery/list",
            pageSize: 10,
            queryParams: function (params) {
                return {
                    pageSize: params.limit,
                    pageNum: params.offset / params.limit + 1,
                    dsRegionId: $("#dsId").val(),
                    buildingName: $form.find("input[name='buildingName']").val().trim()
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
                field: 'maxBandwidth',
                title: '最高的接入速率'
            }]
        };

        $MB.initTable('buildingQueryTable', settings);
    }

    function search() {
        $MB.refreshTable('buildingQueryTable');
    }

    function refresh() {
        $form[0].reset();
        search();
    }

    initDs();
    initTable();

    $(".buildingQuery-search").click(function () {
        search();
    });

    $(".buildingQuery-refresh").click(function () {
        refresh();
    });

    $(".buildingQuery-export-excel").click(function () {
        $.utils.exportFile(ctx + "buildingQuery/excel", $form.serialize());
    });

    $(".buildingQuery-export-csv").click(function () {
        $.utils.exportFile(ctx + "buildingQuery/csv", $form.serialize());
    });

    function initDs() {
        debugger;
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
                        _ds.attr("disabled", "disabled");
                    }
                    html.push("<option value='" + data[i].regionId + "' " + isSelectStr + ">" + data[i].regionName + "</option>");
                }
                _ds.append(html.join(''));

            } else {
                $MB.n_danger(r.msg);
            }
        });
    }
});