
<template>
  <div class="columns">
      <div
        class="column is-half is-offset-one-quarter box mb-6"
        style="text-align: center; background-color: #d2e9c3"
      >
        <strong style="font-size: 25px"> {{ msg }}</strong>
      </div>
    </div>
</template>

<script>
export default {
  name: "Title",
  props: ["msg"]
}
</script>
