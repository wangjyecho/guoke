<template>
	<div>
		<div>
			<form action="">
				<input type="text" placeholder="搜索你感兴趣的内容">
				<span></span>
			</form>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}

</script>

<style lang="scss" scoped>
// 搜索框
.searchCon{
	
	z-index:6;
	width:100%;
	height:50px;
	line-height:50px;
	background:rgba(255,255,255,0.9);
	position:fixed;
	top:50px;
	
	form{
		width:100%;
		display:flex;
		input{
			margin-top:10px;
			margin-left:10px;
			flex:1;
    		height:30px;
    		border:1px solid #eee;
    		border-radius:4px;
    		font-size:14px;
    		text-indent:5px;
    		color:eee;
		}
		span{
			margin-right:10px;
			display:inline-block;
			width:30px;
			height:50px;
			background:url(https://1-im.guokr.com/static/img/search-2624b53ce8.png) right no-repeat;
			background-size:auto 40%;
		}
	}
}

</style>