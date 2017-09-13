<template>
  <div>
    <div container>
    <div class="row">
      <div class="col-sm-3">
        <card title="Back-logs" :tasks="backlogs"></card>
      </div>
      <div class="col-sm-3">
        <card title="Todo" :tasks="todos"></card>
      </div>
      <div class="col-sm-3">
        <card title="Doing" :tasks="doings"></card>
      </div>
      <div class="col-sm-3">
        <card title="Done" :tasks="dones"></card>
      </div>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
import card from '@/components/card'
export default {
  components: {
    card
  },
  data () {
    return {
    }
  },
  firebase () {
    return {
      tasks: this.$db.ref('tasks')
    }
  },
  methods: {
  },
  computed: {
    backlogs () {
      const filteredBacklog = this.tasks.filter((list) => list.status === 'back-log')
      return filteredBacklog
    },
    todos () {
      const filteredTodo = this.tasks.filter((list) => list.status === 'to-do')
      return filteredTodo
    },
    doings () {
      const filteredDoing = this.tasks.filter((list) => list.status === 'doing')
      return filteredDoing
    },
    dones () {
      const filteredDone = this.tasks.filter((list) => list.status === 'done')
      return filteredDone
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
