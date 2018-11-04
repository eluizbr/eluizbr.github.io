Vue.directive('mask', VueMask.VueMaskDirective);
new Vue({
  el: '#obrasCreate',
  delimiters: ['[[', ']]'],
  data: {
    textError: 'Este campo é obrigatório!',
    cep: null,
    logradouro: null,
    bairro: null,
    cidade: null,
    estado: null,
    cepError: null,
    attemptSubmit: false
  },
  watch: {
    cep: function (val) {
      this.cepError = false;
      if (val.length === 9) {
        this.getCep(val.replace('-', ''));
      }
    }
  },
  methods: {
    getCep: function (cep) {
      this.cepError = false;
      axios({
          method: 'get',
          url: `http://viacep.com.br/ws/${cep}/json/`,
          responseType: 'json'
        })
        .then(({
          data
        }) => {
          if (data.erro) {
            this.cepError = true;
            return;
          }
          this.cepError = false;
          this.logradouro = data.logradouro;
          this.bairro = data.bairro;
          this.cidade = data.localidade;
          this.estado = data.uf;
          jQuery(this.$refs.numero).focus();
        })
        .catch(err => {
          this.cepError = true;
        });
    },
    onBlur: function () {
      const element = document.getElementById(event.target.id);
      if (event.target.required) {
        event.target.value === '' ?
          element.classList.add('is-invalid') :
          element.classList.remove('is-invalid');
      }
    }
  },
  mounted: function () {}
});