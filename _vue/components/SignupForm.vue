<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> 회원가입 </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h4 justify-center font-weight-bold">
          <span style="color: #2196f3">회원가입</span>
        </v-card-title>
        <div class="subtitle">
          <div id="already">
            이미 회원이신가요?&nbsp;&nbsp;<span id="login">로그인하기</span>
          </div>
        </div>
        <v-container class="container">
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <span>이름</span>
            <v-text-field
              v-model="name"
              label="김코딩"
              placeholder="김코딩"
              solo
              type="email"
              :rules="nameRules"
              required
            />
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
              label="비밀번호"
              type="password"
              required
            />
            <span>비밀번호확인</span>
            <v-text-field
              v-model="passwordCheck"
              placeholder="비밀번호확인"
              solo
              label="비밀번호확인"
              type="password"
              required
            />
            <v-checkbox
              hide-details
              class="checkbox"
              v-model="termsAll"
              required
              label="전체동의"
              @click="checkAll"
              :rules="termsRules"
            />
            <v-checkbox
              hide-details
              class="checkbox"
              v-model="terms1"
              required
              label="개인정보처리방침에 동의"
              @click="check1"
              :rules="termsRules"
              ><span class="detail">자세히보기</span></v-checkbox
            >
            <v-checkbox
              hide-details
              class="checkbox"
              v-model="terms2"
              required
              label="이용약관에 동의"
              @click="check2"
              :rules="termsRules"
            />
            <v-btn
              class="submit-btn"
              :disabled="!valid"
              large
              block
              @click="dialog = false"
              color="primary"
              type="submit"
              >회원가입</v-btn
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
      return this.$store.state.users.me
    }
  },
  data() {
    return {
      valid: false,
      dialog: false,
      termsAll: false,
      terms1: false,
      terms2: false,
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      emailRules: [
        (v) => !!v || "이메일은 필수입니다.",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
        (v) => v.length <= 100 || "이름은 100글자를 넘을 수 없습니다.",
      ],
      nameRules: [
        (v) => !!v || "이름은 필수입니다.",
        (v) => v.length <= 20 || "이름은 20글자를 넘을 수 없습니다.",
      ],
      passwordRules: [
        (v) => !!v || "비밀번호는 필수입니다.",
        (v) => v.length >= 8 || "비밀번호는 8글자 이상입니다.",
        (v) => v.length <= 30 || "비밀번호는 30글자 이하입니다.",
      ],
      passwordCheckRules: [
        (v) => !!v || "비밀번호 확인은 필수입니다.",
        (v) => v === this.password || "비밀번호가 일치하지 않습니다.",
      ],
      termsRules: [(v) => !!v || "약관에 동의해야 합니다."],
    };
  },
  methods: {
    onSubmitForm() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.$store
          .dispatch("users/signUp", {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            console.log("회원가입 성공");
          })
          .catch(() => {
            console.log("회원가입 실패");
          });
      } else {
        console.log("회원가입 양식이 유효하지 않습니다.");
      }
    },
    checkAll() {
      if (this.termsAll) {
        (this.terms1 = true), (this.terms2 = true);
      }
    },
    check1() {
      if (!this.terms1) {
        this.termsAll = false;
      }
      if (this.terms1 && this.terms2) {
        this.termsAll = true;
      }
    },
    check2() {
      if (!this.terms2) {
        this.termsAll = false;
      }
      if (this.terms1 && this.terms2) {
        this.termsAll = true;
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
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
