<template>
	<div class="projetos">
		<b-container fluid>
			<b-row>
				<!--<b-col class="col-12 p-0">
					<b-img :src="require('@/projetos/'+destaque+'/destaque.png')" fluid></b-img>
				</b-col>
				<b-col v-for="projeto in projetos" class="p-0 col-md-4 col-6">
					<b-img :src="require('@/projetos/'+projeto+'/'+projeto+'.jpg')" fluid></b-img>
				</b-col>-->
				<!--<projeto-thumb :projeto="destaque" destaque></projeto-thumb>-->
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
				destaque: 'planourbanismo',
				projetos: this.$appData.projetos,
				width: 0,
				height: 0
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},
		methods: {
			handleResize() {
				this.width = window.innerWidth;
				this.height = window.innerHeight;
			}
		}
	}
</script>

<style type="text/css">
</style>