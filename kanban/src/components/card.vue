<template>
    <div>
      <div class="card">
        <div class="card-header">
          {{title}}
        </div>
        <div class="card-body">
          <div v-for='task in tasks' class="card">
            <div class="card-header">
              {{task.title}}
            </div>
            <div class="card-body">
              <p class="card-text">{{task.body}}</p>
              <a class="btn btn-success">{{task.points}}</a>
              <a class="btn btn-primary">{{task.assigned}}</a>
              <a @click="deletecard(task['.key'])" class="btn btn-danger">X</a>
              <select @change="editStatus(task['.key'])" class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect" v-model="xxx">
                 <option value="Set Status" disabled selected>Set status</option>
                 <option value="back-log">back-log</option>
                 <option value="to-do">to-do</option>
                 <option value="doing">doing</option>
                 <option value="done">done</option>
               </select>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: null,
      xxx: 'Set Status',
      tasks: null
    }
  },
  props: [
    'title',
    'tasks'
  ],
  firebase () {
    return {
      tasks: this.$db.ref('tasks')
    }
  },
  methods: {
    editStatus (id) {
      console.log(id)
      this.$db.ref(`tasks/${id}/status`).set(this.xxx)
      this.xxx = null
    },
    deletecard (id) {
      console.log(id)
      this.$db.ref(`tasks/${id}`).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
