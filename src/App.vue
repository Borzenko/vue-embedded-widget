<template>
  <div>
    <div>
      <input type="date" v-model="date">
      <button @click="addNewRecord">Add to cart</button>
    </div>
    <div v-for="item in items" :key="item.id">
      {{ item.date }} {{ item.location }}
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v4'

export default {
  data () {
    return {
      items: [],
      date: null
    }
  },
  mounted () {
    const isExist = localStorage.getItem('embeddedWidgetCart')
    if (isExist) {
      this.items = JSON.parse(isExist)
    }
  },
  methods: {
    addNewRecord () {
      if (!this.date) return false
      this.items.push({
        id: uuid(),
        date: this.date,
        location: window.location.href
      })
      this.recordToLocalStorage()
    },
    recordToLocalStorage () {
      localStorage.setItem('embeddedWidgetCart', JSON.stringify(this.items))
    }
  }
}
</script>
