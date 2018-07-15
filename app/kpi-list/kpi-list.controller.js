app.controller('KpiListController', KpiListController);

KpiListController.$inject = ['KpiListService'];

function KpiListController(KpiListService) {
  KpiListService.loadList().then(
    () => this.list = KpiListService.getList()
  );

  // Выбрать kpi
  this.selectKpi = function(kpi_block) {
    KpiListService.setSelectedKpi(kpi_block);
  };
}