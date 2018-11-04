$('.dataFieldMulti').datepicker({
  startView: 1,
  minViewMode: 1,
  maxViewMode: 2,
  language: 'pt-BR',
  multidate: true
});

$('.dataField').datepicker({
  language: 'pt-BR',
  todayHighlight: true,
  leftArrow: '<i class="far fa-arrow-left"></i>',
  rightArrow: '<i class="far fa-arrow-right"></i>'
});

// Selectpicker
// $.fn.selectpicker.Constructor.BootstrapVersion = '4';
$('.selectpicker').selectpicker({
  liveSearchStyle: 'contains',
  liveSearch: true,
  size: 5,
  showIcon: true,
  actionsBox: true
});

$('.cpf').mask('000.000.000-00', {
  reverse: true
});
$('.money').mask('#.##0,00', {
  reverse: true
});

$('#form-colaborador').submit(function() {
  $('.cpf').unmask();
  $('.money').cleanVal();
});

$("[data-toggle='toggle']").click(function() {
  var selector = $(this).data('target');
  $(selector).toggleClass('in');
});
