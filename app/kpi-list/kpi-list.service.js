app.service('KpiListService', KpiListService);

function KpiListService($http) {
  let self = this;

  // Данные, с которыми работает пользователь
  this.data = {
    // Список всех kpi
    list: [],
    // Активный kpi
    kpi: {}
  };

  function _clearSelectedKpi() {
    self.data.kpi.selected = false;
  }

  function _setSelectedKpi(kpi) {
    kpi.selected = true;
    self.data.kpi = kpi;
  }

  this.loadList = () => {
    return $http.get('data.json').then(
      (response) => this.data.list = this.data.list.length === 0 ? response.data : this.data.list,
      (response) => console.log('error', response.status)
    )
  };

  this.setSelectedKpi = (kpi) => {
    if (this.isEmptyKpi(kpi)) {
      return false;
    }

    _clearSelectedKpi();
    _setSelectedKpi(kpi);
  };

  this.isEmptyKpi = (kpi) => kpi.value === '';
  this.getList = () => this.data.list;
  this.getKpi = () => this.data.kpi;
}