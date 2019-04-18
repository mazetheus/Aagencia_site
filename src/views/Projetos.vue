<template>
	<div class="projetos" onload="shuffle(projetos)">
		<b-container fluid>
			<b-row>
				<projeto-thumb v-for="(projeto,index) in projetos" :projeto="projeto" :key="'projeto-'+index" :destaque="index == 0 && width > 576"></projeto-thumb>
			</b-row>
		</b-container>
	
	</div>
</template>

<script type="text/javascript">
	import ProjetoThumb from '@/components/ProjetoThumb.vue'


	export default {
		components: {
			ProjetoThumb
		},
		data() {
			return {
				projetos: this.$appData.projetos,
				width: 0,
				height: 0
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
			this.projetos.sort((() => Math.random() - 0.5));
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},
		methods: {
			handleResize() {
				this.width = window.innerWidth;
				this.height = window.innerHeight;
			},
		},
	}
</script>

<style type="text/css">
</style>