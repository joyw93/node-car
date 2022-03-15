import axios from "axios";
const mlServerUrl = "http://127.0.0.1:5000"
export const state = () => ({
    price: null,
  });
  
  export const mutations = {
    setPrice(state, payload) {
      state.price = payload;
    },
  };
  
  export const actions = {
    predictPrice({ commit, state }, payload) {
      axios.post(`${mlServerUrl}/predict`,
      {
        model: payload.model,
        age: payload.age,
        odo: payload.odo,
        color: payload.color,
        fuel: payload.fuel,
      })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          commit("setPrice", res.data)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
