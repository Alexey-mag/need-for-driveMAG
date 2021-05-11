<template>
  <el-dialog
    :visible="getDialogStatus"
    width="30%"
    :show-close="false"
    :center="true"
  >
    <p class="dialog__text">Подтвердить заказ</p>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="confirm">Подтвердить</el-button>
      <el-button type="warning" @click="close">Вернуться</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogApp",
  computed: {
    ...mapGetters("shared", ["getDialogStatus"])
  },
  methods: {
    close() {
      this.$store.dispatch("shared/setDialogStatus", false);
    },
    confirm() {
      this.$store.dispatch("total/pushOrder");
      this.$store.dispatch("shared/setDialogStatus", false);
    }
  }
};
</script>

<style lang="scss">
.el-dialog__title {
  font-size: 18px !important;
  line-height: 21px !important;
}
.el-dialog {
  margin-top: 40vh !important;
}
.dialog__text {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: $main-black;
}
</style>
