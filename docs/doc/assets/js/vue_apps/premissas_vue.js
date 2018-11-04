Vue.prototype.$http = axios;

new Vue({
  el: '#add_premissas',
  delimiters: ['[[', ']]'],
  data: {
    idCargo: '',
    Valor: null,
    dataIncidencia: '2018-10-18',
    percentualReajuste: 3,
    idPremissa_id: '',
    idColigada: null,
    premissas: []
  },
  beforeCreate: function() {},
  methods: {
    getData: function(id) {
      console.log(id, this.idColigada);
      this.$http
        .get(`/pessoal/premissas/get/${this.idColigada}`)
        .then(response => {
          console.log(response.data);
          this.premissas = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPremissa: function() {
      this.premissas.push({
        Valor: this.Valor,
        PercentualReajuste: this.percentualReajuste,
        DataIncidencia: this.dataIncidencia,
        idPremissa_id: this.idPremissa_id
      });
      this.idPremissa_id = null;
      this.Valor = null;

      console.log(this.premissas);
    },
    removePremissa: function(event) {
      this.premissas.splice(event, 1);
    },
    postData: function() {
      axios.defaults.xsrfHeaderName = 'X-CSRFToken';
      axios({
        method: 'post',
        url: '/pessoal/premissas',
        data: this.premissas,
        responseType: 'json'
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
