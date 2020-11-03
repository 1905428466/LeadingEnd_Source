/**
 * Created by 30947 on 2018/8/15.
 */
$(function(){
    caseTable();
})
function caseTable(){

    $('#table').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/allFind.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                checkbox: "true",
                field: 'check',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: "案件编号",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '案件名称',
                field: 'logo',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '案件类别',
                field: 'color',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '提交阶段',
                field: 'type',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '提交时间',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '接收人',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '签收状态',
                field: 'number',
                align: 'center'
            }

        ]
    });

}
function detail(){
    layer.open({
        type: 2,
        title: '案件详情界面',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['90%', '90%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'detail.html'
    })
}
function enter(){
    layer.open({
        type: 2,
        title: '案件录入',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['90%', '90%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'caseDtail.html'
    })
}