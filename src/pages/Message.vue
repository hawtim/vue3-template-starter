<template>
<div>
  <h1>{{ msg }}</h1>
  <a-button @click="info">Show Message</a-button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    info() {
      this.$message.info('This is a normal message')
    }
  }
}
</script>
