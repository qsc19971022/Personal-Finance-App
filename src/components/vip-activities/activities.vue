<template>
	<div class="acticities-list">
		<a ><img :src="data1[pid]" alt="" class="a-img"></a>
		<p class="tickte-name">{{data.vip_name}}</p>
		<button class="getbtn">马上领取</button>
		<span class="othernum">{{data.worth}}</span>
	</div>
</template>

<script>
	export default {
		name:'activities',
		props:["pid","data1","data"]
	}
</script>


<style>
	.acticities-list{
		width: 100%;
		height: 1.3rem;
		background-color: white;
		padding: 0rem 0.1rem 0.15rem;
		position: relative;
	}
	.a-img{
		width: 100%;
		height: 100%;
		border-radius: .5px;
	}
.tickte-name {
    width: 40%;
    color: black;
    font-size: 0.17rem;
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
}

.getbtn {
    width: 0.8rem;
    height: 0.3rem;
    background-color: #e62615;
    border-radius: 0.15rem;
    position: absolute;
    top: 0.7rem;
    left: 2.5rem;
    border: none;
}
.othernum {
    font-size: 0.15rem;
    position: absolute;
    top: 0.8rem;
    left: 2.8rem;
}
</style>
