<template>
  <div>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    + Add new task
  </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <form @submit.prevent='submitQuestion(formQuestion)'>
        <div class="form-group">
        <label for="title">Title</label>
        <input v-model='formQuestion.title' type="text" class="form-control" id="title" placeholder="Title">
        </div>
        <div class="form-group">
        <label for="body">Body</label>
        <input v-model='formQuestion.body' type="text" class="form-control" id="body" placeholder="explanation">
        </div>
        <div class="form-group">
        <label for="points">Points</label>
        <input v-model='formQuestion.points' type="text" class="form-control" id="points" placeholder="1 to 10 level of difficulty">
        </div>
        <div class="form-group">
        <label for="assigned">Assigned to:</label>
        <input v-model='formQuestion.assigned' type="text" class="form-control" id="assigned" placeholder="Assign to anyone?">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>

</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formQuestion: {
        title: null,
        body: null,
        points: null,
        assigned: null
      }
    }
  },
  methods: {
    submitQuestion (formQuestion) {
      console.log(formQuestion, 'this is form question')
      formQuestion.status = 'back-log'
      this.$db.ref('tasks').push(formQuestion)
    }
  }
}
</script>

<style scoped>

</style>
