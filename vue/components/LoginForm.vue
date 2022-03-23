<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
          로그인
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h4 justify-center font-weight-bold">
          <span style="color: #2196f3">로그인</span>
        </v-card-title>
        <div class="subtitle">
          <div id="already">
            회원이 아니신가요?&nbsp;&nbsp;<span id="login">회원가입 하기</span>
          </div>
        </div>
        <v-container class="container">
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <span>이메일</span>
            <v-text-field
              v-model="email"
              label="cocoding@cocoding.com"
              placeholder="cocoding@cocoding.com"
              solo
              type="email"
              :rules="emailRules"
              required
            />
            <span>비밀번호</span>
            <v-text-field
              v-model="password"
              placeholder="비밀번호"
              solo
              :rules="passwordRules"
              label="비밀번호"
              type="password"
              required
            />
            <v-btn
              class="submit-btn"
              :disabled="!valid"
              large
              block
              @click="dialog = false"
              color="primary"
              type="submit"
              >로그인</v-btn
            >
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  data() {
    return {
      valid: false,
      dialog: false,
      name: "",
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "이메일은 필수입니다.",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      passwordRules: [(v) => !!v || "비밀번호는 필수입니다."],
    };
  },
  methods: {
    onSubmitForm() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.$store
          .dispatch("users/login", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            console.log("로그인 성공");
          })
          .catch(() => {
            console.log("로그인 실패");
          });
      } else {
        console.log("로그인 양식이 유효하지 않습니다.");
      }
    },
  },
};
</script>

<style scoped>
.subtitle {
  text-align: center;
  font-size: small;
}
#already {
  color: gray;
}
#login {
  color: #2196f3;
}

.container {
  width: 400px;
  margin-top: 20px;
}

.container span {
  color: #2196f3;
}
.checkbox {
  margin-top: 0px;
  width: 230px;
}

.submit-btn {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>
