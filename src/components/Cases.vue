<template>
	<b-row id="cases" class="cases">
		<b-row class="cases-inner">
			<b-col class="offset-1 col-2 align-self-center">
				<div class="cases-header-border"></div>
			</b-col>
			<b-col class="col-9">
				<h2 class="text-left cases-header">não somos um lugar comum.</h2>
			</b-col>
			<div class="cases-space w-100"></div>
			<b-col v-for="projeto in projetos" class="col-md-2 col-4 p-0" v-b-popover.hover.top="projeto">
				<router-link :to="'/projeto/'+projeto"><b-img :src="require('@/projetos/'+projeto+'/thumb.jpg')" fluid></b-img></router-link>
			</b-col>
		</b-row>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			let nums = [];
			let size = this.$appData.projetos.length;
			console.log(size);
			var max_len = Math.min(size, 6);
			while (nums.length < max_len) {
				var num = Math.floor(Math.random() * size);

				if (!nums.includes(num)) {
					nums.push(num);
				}
			}
			var projs = [];
			for (var i = 0; i < max_len; i++) {
				projs.push(this.$appData.projetos[nums[i]]);
			}
			return {
				projetos: projs
			}
		}
	}
</script>

<style type="text/css">
	.cases {
		background: url('../assets/cases-bg-1.png');
		background-size: cover;
		padding: 96px 86px 64px 96px;
		margin-top: -20px;
		background-position: 0px 0px;
		background-attachment: scroll;
	}

	.cases-inner {
		border: 1px solid #fff;
		background: transparent;
		width: 100%;
		padding: 96px 24px 164px 24px;
	}

	.cases-header-border {
		width: 100%;
		height: 2px;
		background: #fff;
	}

	.cases-header {
		font-weight: 500s;
		color: #ffcd00;
	}

	.cases-space {
		padding: 32px 0px;
	}

	@media (max-width: 768px) {
		.cases {
			margin-top: 0px;
		}
	}

	@media (max-width: 576px) {
		.cases {
			padding: 96px 8px 64px 32px;
			margin-top: 0px;
		}

		.cases-inner {
			padding: 96px 8px 164px 16px;
		}
	}
</style>