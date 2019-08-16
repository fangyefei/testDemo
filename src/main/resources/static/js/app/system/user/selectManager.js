$(function () {
    var $form = $(".manager-table-form");
    var $ds = $form.find("select[name='dsRegionId']");
    var $qx = $form.find("select[name='regionId']");
    function initTable() {
        debugger;
        var pageSize = 10;
        var settings = {
            url: ctx + "user/managerList",
            pageSize: pageSize,
            queryParams: function (params) {
                return {
                    pageSize: params.limit,
                    pageNum: params.offset / params.limit + 1,
                    dsRegionId: $ds.val(),
                    username: $form.find("input[name='loginName']").val().trim(),
                    staffName: $form.find("input[name='name']").val().trim()
                };
            },
            columns: [{
                checkbox: true
            }, {
                field: 'username',
                title: '登录名'
            }, {
                field: 'staffName',
                title: '姓名'
            }, {
                field: 'regionName',
                title: '区域名称'
            }, {
                field: 'deptName',
                title: '部门名称'
            }, {
                field: 'email',
                title: '邮箱'
            }]
        };

        $MB.initTable('managerTable', settings);
    }

    function search() {
        $MB.refreshTable('managerTable');
    }

    function refresh() {
        $form[0].reset();
        search();
    }

    function selectOk() {
        var selected = $("#managerTable").bootstrapTable('getSelections');
        var selected_length = selected.length;
        if (!selected_length) {
            $MB.n_warning('请勾选需要选择的人员！');
            return;
        }
        if (selected_length > 1) {
            $MB.n_warning('一次只能选择一个人员！');
            return;
        }
        var staffId = selected[0].staffId;
        var staffName = selected[0].staffName;

        console.log("staffId:" + staffId + ", staffName:" + staffName);

        var _selectBackForm = $("#user-add-form");
        _selectBackForm.find("input[name='administrator']").val(staffId);
        _selectBackForm.find("input[name='managerName']").val(staffName);
        closeModal();
    }

    initTable();

    $(".staff-search").click(function () {
        search();
    });

    $(".staff-refresh").click(function () {
        refresh();
    });


    $(".manager-select-modal-ok").click(function () {
        selectOk();
    });

    $.region.initDsQx($ds, function () {
    }, $qx, function () {
    });

    $(".btn-close .close").click(function () {
        closeModal();
    });

    function closeModal() {
        refresh();
        setTimeout(function () {
            $('body').addClass('modal-open');
        }, 500);
        $MB.closeAndRestModal("manager-select-modal");

        // var validate = $form.validate().element("input[name='buildingNo']");
        // validate.form;
    }
});