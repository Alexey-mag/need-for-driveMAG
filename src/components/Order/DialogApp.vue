<template>
  <el-dialog
    :visible="isDialogVisible"
    width="30%"
    :show-close="false"
    center
    :modal="false"
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
    ...mapGetters("shared", ["isDialogVisible"])
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
  border: none !important;
  box-shadow: none !important;
  background: #FFFFFF !important;
}
.el-dialog__wrapper {
  background: rgba(255, 255, 255, 0.9) !important;
}
.dialog__text {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: $main-black;
}
</style>
