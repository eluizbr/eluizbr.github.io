const lancamentos = new Vue({
  el: '#lancamentos',
  delimiters: ['[[', ']]'],
  data: {
    centroCusto: '',
    coligada: '',
    contaContabil: '',
    descricaoLancamento: '',
    fornecedor: '',
    mes: [],
    ano: '',
    valor: '',
    versao: '',
    lancamentos: [],
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: '',
      precision: 2,
      masked: false
    }
  },
  methods: {
    setData: function() {
      this.mes.map(mes => {
        if (mes) {
          this.lancamentos.push({
            centroCusto: this.centroCusto,
            coligada: this.coligada,
            contaContabil: this.contaContabil,
            descricaoLancamento: this.descricaoLancamento,
            fornecedor: this.fornecedor,
            mes: mes,
            ano: this.ano,
            valor: this.clearMoney(this.valor),
            versao: this.versao
          });
        }
      });
    },
    clearMoney: function(value) {
      value = value.replace('R$ ', '');
      value = value.replace('.', '');
      value = value.replace(',', '.');
      return value;
    },
    removeData: function(event) {
      swal({
        title: 'Lançamento removido',
        timer: 2500
      });
      this.lancamentos.splice(event, 1);
    },
    createData() {
      swal({
        type: 'info',
        title: 'Salvando',
        html: 'Salvando lançamentos... Por favor aguarde',
        allowOutsideClick: false,
        allowEscapeKey: false,
        onOpen: () => {
          swal.showLoading();
        }
      });
      axios.defaults.xsrfHeaderName = 'X-CSRFToken';
      axios({
        method: 'post',
        url: '/lancamentos/api/lancamento/create',
        data: this.lancamentos
      })
        .then(() => {
          swal.close();
          this.lancamentos = [];
        })
        .catch(err => console.log(err));
    }
  }
});
