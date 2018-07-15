app.controller('KpiFormController', KpiFormController);

KpiFormController.$inject = ['KpiListService'];

function KpiFormController(KpiListService) {
  this.data = KpiListService.data;
}