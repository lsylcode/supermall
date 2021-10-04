<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center" >购物街</div>
  </nav-bar>
  <home-swiper :banners="banners"/>
  <recommend-view  :recommends="recommends"/>
  <feature-view />
  <tab-control class="tab-control"  :titles="['流行','新款','精选']" />
</div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata,getHomeGoods} from "network/home";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import TabControl from "../../components/content/tabControl/TabControl";

  export default {
    name: "Home",
    data(){
      return{
        banners:[],//上轮播图数据
        recommends:[],//下轮播图数据
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        }
      }
    },
    components:{
      HomeSwiper,
      NavBar,
      RecommendView,
      FeatureView,

      TabControl
    },
    created(){
      //1.请求多个数据,调用方法
      this.getHomeMultidata()
      //1.请求商品数据,调用方法,默认为每个分类调用第一页
      this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.data.banner.list//data中的变量保存请求出来的数据，防止函数结束之后数据消失
          this.recommends=res.data.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1//动态获取页数
        getHomeGoods(type,page).then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; /*z-index越大，越是显示在最外层*/


  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
