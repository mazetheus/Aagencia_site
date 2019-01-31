<template>
	<b-row class="content-inner">
		<b-col :class="'images ' + image.class" v-for="image in images">
			<b-img :src="require('./'+image.src)" fluid></b-img>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	import '../media.css'
	export default {
		name: 'Content',
		data() {
			return {
				images: [
					{src: "img1.png", class: 'col-12'},
					{src: "img2.jpg", class: 'col-12'}
				]
			}
		}
	}
</script>