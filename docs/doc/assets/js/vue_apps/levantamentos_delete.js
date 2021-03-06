new Vue({
  el: '#levantamentos_delete',
  data: {},
  methods: {
    remove(id, obra) {
      swal({
        title: 'Deseja remover este lançamento?',
        text: `Você tem certeza que deseja remover o lançamemtno ?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Remover!',
        cancelButtonText: 'Não, Cancelar!'
      }).then(result => {
        if (result.value) {
          swal({
            type: 'info',
            title: 'Removendo. Agurade...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            onOpen: () => {
              swal.showLoading();
            }
          });
          axios.defaults.xsrfHeaderName = 'X-CSRFToken';
          axios({
            method: 'delete',
            url: `/controle-obras/levatamentos/delete/${id}`
          })
            .then(() => {
              swal.close();
              swal({
                type: 'info',
                title: 'O Lançamento foi removido com sucesso!',
                timer: 3000
              });
              window.location.replace(`/controle-obras/levatamentos/${obra}`);
            })
            .catch(err => console.log(err));
        }
      });
    }
  }
});
