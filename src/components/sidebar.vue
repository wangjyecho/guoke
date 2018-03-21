<template>
	<div>
		<transition name="bounce">
			<aside v-show="myshow">
				<div class="head">
					<img src="https://1-im.guokr.com/static/img/logo-ed25de9c93.png" alt="">
				</div>
				<div class="content">
					<div class="classify classify1">
						<a href="">专栏
							<img src="https://1-im.guokr.com/static/img/classify0-29f0a3be3f.jpg" alt="">
						</a>
						<ul>
							<li><a href="">热点</a></li>
							<li><a href="">前沿</a></li>
							<li><a href="">观点</a></li>
							<li><a href="">视觉</a></li>
							<li><a href="">谣言粉碎机</a></li>
							<li><a href="">生活方式</a></li>
							<li><a href="">十五言</a></li>
							<li><a href="">果然知道</a></li>
						</ul>
					</div>
					<div class="classify classify2">
						<a href="">学科
							<img src="https://1-im.guokr.com/static/img/classify1-11e7bdff6b.jpg" alt="">
						</a>
					</div>
			
					<div class="classify classify3">
						<a href="">果然知道
							<img src="https://1-im.guokr.com/static/img/classify2-d563796421.png" alt="">
						</a>
					</div>
				</div>
				<div class="login">
					<p>登录</p>
				</div>
			</aside>
		</transition>
		<div class="mask" v-show="myshow" @click="handClick()"></div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handClick(){
				this.$emit('event')
			}
		},
		props:["myshow"],
	}

</script>

<style lang="scss" scoped>
 // 侧边栏
aside{
 	z-index:20;
    position:fixed;
    top:0;
    left:0;
    background:#fff;
    width:85%;
    height:100%;
    text-align:center;
    .head{
    	height:56px;
	    border-bottom: 1px solid #eee;
    	img{
    		margin:auto;
    		margin-top:16px;
    		height:23px;
		}
    }
    .content{
    	height:425px;
    	width:100%;
    	.classify{
    		width:90%;
		    margin:20px auto 0;
		    box-shadow:0 0 8px #eee;
    		a{
    			display:none;
    			color:#3f3f3f;
    			line-height:75px;
			    width:100%;
			    vertical-align:middle;
			    display:inline-block;
			    overflow:hidden;
	    		img{
				    line-height:65px;
				    height:65px;
				    width:102px;
				    float:right;
				    margin-top:5px;
				    margin-right:5px;
				    vertical-align:middle;
	    		}
	    	}
	    	ul{
	    		display:flex;
	    		li{
	    			width:50%
	    		}
	    	}
    	}
    }
    .login{
    	height:55px;
    	border-top:1px solid #eee;
    	padding:13px 20px 12px 15px;
    	p{
    		width:100%;
    		height:100%;
    		color:#3f3f3f;
    	}
    }
}
.mask{
    	z-index:10;
    	position:fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		background:#000;
		opacity:.5;
}
.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform:translateX(-100%);
	    opacity: 0;
	  }
	  100% {
	    transform:translateX(0px);
	    opacity: 1;
	  }
	}


</style>