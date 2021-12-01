<template>
    <div class="404notfound">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: '404notfound',
    data() { 
        return {
        dialogFormVisible:false,
        MSGtitle:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
        }
    },
    methods:{
        add(num,title){
            this.MSGtitle = title
            this.dialogFormVisible = true
            // if(num == 1){
            //     MSGtitle = title
            // }else(num == 2){

            // }
        }
    }
}
</script>