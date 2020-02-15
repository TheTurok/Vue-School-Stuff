<template>
    <div class="col-large push-top">

        <h1>{{thread.title}}</h1>

        <div class="post-list">
            <div v-bind:key="postId['.key']" v-for="postId in thread.posts" class="post">
                <div class="user-info">
                    <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>

                    <a href="#">
                        <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                    </a>

                    <p class="desktop-only text-small">107 posts</p>
                </div>

                <div class="post-content">
                    <div>
                      {{posts[postId].text}}
                    </div>
                    <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
                </div>

                <div class="post-date text-faded">
                    {{posts[postId].publishesAt}}
                </div>
            </div>
          </div>
      </div>
</template>

<script>
  import sourceData from '@/data'

  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id],
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>