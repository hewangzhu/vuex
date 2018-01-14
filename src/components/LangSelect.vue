<template>
    <el-dropdown class="international" @command="handleSetLanguage" trigger="click">
        <el-button type="primary">{{$t('login.switchLanguage')}}</el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
            <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>                    
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: 'LangSelect',
    // data(){
    //     return {
    //         // language: 'en'
    //     }
    // },
    computed:{
        language(){
            return this.$store.getters.language
        }
    },
    methods:{
        handleSetLanguage(lang){
            // console.log(lang);
            this.$i18n.locale = lang
            // console.log(this.$store.dispatch)
            this.$store.dispatch('setLanguage', lang)

        }
    }
}
</script>

<style>

</style>
