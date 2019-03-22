<template>
	<footer class="container-fluid" :style="{background: $route.name == 'home' ? '#00F8C7' : '#F3F3F3'}">
		<b-row class="footer-inner">
			<b-col class="col-md-6 col-12 align-self-center">
				<p class="copyright">© 2019 aagênciadigital.todos os direitos reservados.</p>
				<div class="copy-border mx-auto"></div>
			</b-col>
			<b-col class="desktop">
				<b-navbar toggleable="md">
					<b-navbar-nav class="mx-auto align-self-center">
						<b-nav-item v-for="(item,index) in menu" :to="item.link" :key="'footer-'+index">{{item.text}}</b-nav-item>
						<b-nav-item href="https://instagram.com/aagenciadigital"><font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']"></font-awesome-icon></b-nav-item>
					</b-navbar-nav>
				</b-navbar>
			</b-col>
		</b-row>
	</footer>
</template>

<script type="text/javascript">
	export default {
		props: [
			'bgCol'
		],
		data() {
			return {
				menu: [
					{text: 'Nós', link: '/#nos'},
					{text: 'O que fazemos', link: '/#oqfazemos'},
					{text: 'Projetos', link: '/projetos'},
					{text: 'Contato', link: '/#contato'}
				]
			}
		}
	}
</script>

<style type="text/css" scoped>
	.footer-inner {
		padding: 32px 0px 16px 0px;
	}

	.copy-border {
		width: 10%;
		height: 4px;
		background: #fff;
	}

	.copyright {
		font-size: 14px;
	}

	.nav-item {
		font-size: 14px;
		font-weight: 500;
	}

	.fa-icon {
		font-size: 18px;
	}

	.nav-link {
		color: #000 !important;
	}
		
	@media (max-width: 768px) {
		.desktop{
			display: none;
		}
	}
</style>