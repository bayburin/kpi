app.controller('KpiController', KpiController);

KpiController.$inject = ['KpiListService'];

function KpiController(KpiListService) {
  this.isEmptyKpi = () => KpiListService.isEmptyKpi(this.block);
}