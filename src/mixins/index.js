/**
 * Created by ling on 2018/1/17.
 */

export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    }
  }
}