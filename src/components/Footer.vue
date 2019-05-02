<template>
	<footer class="container-fluid" :style="{background: $route.name == 'home' ? '#00F8C7' : '#F3F3F3'}">
		<b-row class="footer-inner">
			<b-col class="col-md-12 col-12 align-self-center">
				<p class="copyright">© 2019 aagênciadigital. Todos os direitos reservados.</p>
				<div class="copy-border mx-auto"></div>
			</b-col>
		</b-row>
	</footer>
</template>

<style type="text/css" scoped>
	.footer-inner {
		padding: 20px 0px 14px 0px;
	}

	.copy-border {
		width: 10%;
		height: 2px;
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