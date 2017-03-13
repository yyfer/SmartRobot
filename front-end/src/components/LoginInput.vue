<template>
    <div>
      <input
        v-bind="$props"
        class="idCard"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('login')"
      >
    </div>
</template>

<script>
  export default {
    name: 'loginInput',
    props: ['label', 'placeholder', 'maxlength', 'minlength', 'name', 'form', 'value', 'disabled', 'readonly', 'autofocus']
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  input.idCard{
    position: fixed;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 40px;
    padding: 3px;
  }
</style>
