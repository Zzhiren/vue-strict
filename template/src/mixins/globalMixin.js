/**
 * @description 数据对照
 */
const mixin = {
  data(){
    return {
      page:{
        pageSizeOpts:[20,50,100,500]
      },
      userInfo: this.$store.state.userInfo,
    }
  },
  mounted() {
  },
  methods: {
  }
}

export default mixin;
