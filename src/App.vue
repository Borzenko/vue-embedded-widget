<template>
  <div>
    <div class="datepicker-wrapper">
      <datepicker :input-class="'vdp-datepicker-custom-input'" v-model="date" />
      <button class="add-to-cart-btn" @click="addNewRecord">Add to cart</button>
    </div>
    <div class="date-table">
      <div v-for="item in items" :key="item.id">{{ item.date }} {{ item.location }}</div>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v4'
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
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
        date: moment(this.date).format('YYYY MM DD'),
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

<style scoped>
  .datepicker-wrapper {
    display: flex;
    margin-bottom: 15px;
  }
  .add-to-cart-btn {
    font-size: 14px;
    background: #fff;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
  }
  .date-table div {
    margin-bottom: 5px;
  }
</style>

<style>
  .vdp-datepicker-custom-input {
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid;
    font-size: 14px;
    margin-right: 5px;
  }

  .vdp-datepicker-custom-input:focus {
    outline: none
  }
</style>
