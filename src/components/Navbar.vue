<template>
	<div class="topo">
		<b-navbar toggleable="md">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand to="/"><b-img :src="require('@/assets/logo.png')" fluid></b-img></b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav class="ml-auto">
					<b-nav-item v-for="(item,index) in menu" :to="item.to" :key="'nav-'+index" v-scroll-to="item.to">{{item.text}}</b-nav-item>
					<b-nav-item href="https://instagram.com/aagenciadigital" target="_blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']"></font-awesome-icon></b-nav-item>
					<b-nav-item href="https://api.whatsapp.com/send?phone=558433018085" target="_blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'whatsapp']"></font-awesome-icon></b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				menu: [
					{text: 'Nós', to: '/#nos'},
					{text: 'O que fazemos', to: '/#oqfazemos'},
					{text: 'Projetos', to: '/projetos'},
					{text: 'Contato', to: '/#contato'}
				]
			}
		}
	}
</script>

<style type="text/css" scoped>
.navbar {
	padding-top: 8px;
	position: absolute;
	width: 100%;
	top: 0;
	z-index: 1001;
}

.nav-item {
	font-size: 14px;
	padding: 0px 4px;
	font-weight: 500;
}

.fa-icon {
	font-size: 18px;
}
.nav-link {
	color: #fff !important;
}

.navbar-brand {
	padding-left: 64px;
}

@media (max-width: 767px) {
	.navbar-collapse {
		background: #fff;
	}

	.nav-link {
		color: #000 !important;
	}
}
</style>