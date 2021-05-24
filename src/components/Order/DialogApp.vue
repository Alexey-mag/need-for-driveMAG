<template>
  <el-dialog
    :visible="isDialogVisible"
    width="40%"
    :show-close="false"
    center
    :modal="false">
    <p class="dialog__text">Подтвердить заказ</p>
    <span slot="footer" class="dialog-footer">
      <button class="dialog__button_confirm dialog__button_text" @click="confirm">Подтвердить</button>
      <button class="dialog__button_close dialog__button_text" @click="close">Вернуться</button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DialogApp",
  computed: {
    ...mapGetters("shared", ["isDialogVisible", ''])
  },
  methods: {
    ...mapMutations('shared', ['invertPriceVisible']),
    close() {
      this.$store.dispatch("shared/setDialogStatus", false);
      this.invertPriceVisible();
    },
    confirm() {
      this.$store.dispatch("total/pushOrder");
      this.$store.dispatch("shared/setDialogStatus", false);
      this.invertPriceVisible();
    }
  }
};
</script>

<style lang="scss">

.dialog__text {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: $main-black;
}
  .dialog__button_confirm {
    background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%);
    background-blend-mode: darken;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    height: 48px;
    width: 170px;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.8);
    }
  }
  .dialog__button_close {
    background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%);
    border-radius: 4px;
    height: 48px;
    width: 170px;
    border: none;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.8);
    }
  }
  .dialog__button_text {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: $main-light-gray;
  }
  .dialog-footer {
    display: flex;
    justify-content: space-evenly;
    max-width: 400px;
    justify-self: center;
    margin: auto;
  }
// --------------------------------568------------------------------------
@media screen and (max-width: $mobile) {
  .el-dialog {
    width: 100% !important;
  }
}
</style>
