<template>
	<b-row class="content-inner">
		<b-col :class="'images ' + media.class" v-for="media in medias">
			<b-img v-if="media.src" :src="require('./'+media.src)" fluid></b-img>
			<div v-if="media.content" v-html="media.content"></div>
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
				]
			}
		}
	}
</script>