<template>
	<b-row class="content-inner">
		<b-col :class="'images ' + media.class" v-for="media in medias">
			<b-img :src="require('./'+media.src)" fluid></b-img>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	import '../media.css'
	export default {
		name: 'Content',
		data() {
			return {
				medias: [
					{src: "img1.jpg", class: 'col-12'},
					{src: "img2.jpg", class: 'col-12'}
				]
			}
		}
	}
</script>