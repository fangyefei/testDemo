$(function () {
    var $modal = $('#select-region-modal');
    var $form = $(".region-table-form");
    var settings = {
        url: ctx + "region/list",
        pageSize: 10,
        queryParams: function (params) {
            return {
                pageSize: params.limit,
                pageNum: params.offset / params.limit + 1,
                regionName: $form.find("input[name='regionName']").val().trim(),
                regionNo: $form.find("input[name='regionNo']").val().trim(),
                superRegionName: $form.find("input[name='superRegionName']").val().trim(),
                gradeId: $form.find("select[name='gradeId']").val()
            };
        },
        columns: [{
            checkbox: true
        }, {
            field: 'regionId',
            visible: false
        }, {
            field: 'regionName',
            title: '区域名称'
        }, {
            field: 'regionNo',
            title: '区域编码'
        }, {
            field: 'chinaNameAb',
            title: '区域简称'
        }, {
            field: 'superRegionName',
            title: '上级区域'
        }, {
            field: 'gradeName',
            title: '区域等级'
        }, {
            field: 'address',
            title: '区域中心地址'
        }, {
            field: 'createDate',
            title: '创建时间'
        }]
    };

    function search() {
        $MB.refreshTable('regionTable');
    }

    function refresh() {
        $(".region-table-form")[0].reset();
        search();
    }

    $MB.initTable('regionTable', settings);

    $(".region-search").click(function () {
        search()
    });

    $(".region-refresh").click(function () {
        refresh();
    });

    $(".staff-select-modal-ok").click(function () {
        selectOk()
    });


    function selectOk() {
        var selected = $("#regionTable").bootstrapTable('getSelections');
        var selected_length = selected.length;
        if (!selected_length) {
            $MB.n_warning('请勾选需要选择的人员！');
            return;
        }

        var regionName = [];
        var regionId = [];
        for (var i = 0; i < selected.length; i++) {
            regionName.push(selected[i].regionName);
            regionId.push(selected[i].regionId);
        }

        var $roleAddForm = $("#role-add-form");
        $roleAddForm.find("input[name='regionName']").val(regionName.join(','));
        $roleAddForm.find("input[name='regionIds']").val(regionId);
        // $modal.modal('hide');
        closeModal();
    }


    //打开事件
    $modal.on('show.bs.modal', function (event) {

    });

    //隐藏事件
    $modal.on('hidden.bs.modal', function (event) {
        $.utils.toggleBodyModal();
    });

    $(".btn-close .close").click(function () {
        closeModal();
    });

    function closeModal() {
        refresh();
        setTimeout(function () {
            $('body').addClass('modal-open');
        }, 500);
        $MB.closeAndRestModal("select-region-modal");

        // var validate = $form.validate().element("input[name='buildingNo']");
        // validate.form;
    }

});