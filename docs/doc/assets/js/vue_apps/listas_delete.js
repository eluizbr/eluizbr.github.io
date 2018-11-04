new Vue({
  el: '#listas_delete',
  data: {},
  methods: {
    removeLista(id, lista) {
      swal({
        title: 'Deseja remover este listas?',
        text: `Você tem certeza que deseja remover a lista ?`,
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
            url: `/controle-obras/levantamentos/listas/delete/${id}`
          })
            .then(() => {
              swal.close();
              swal({
                type: 'info',
                title: 'A Lista foi removida com sucesso!',
                timer: 3000
              });
              window.location.replace(
                `/controle-obras/levantamentos/listas/${lista}`
              );
            })
            .catch(err => console.log(err));
        } else {
          swal.close();
        }
      });
    }
  }
});
