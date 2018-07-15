app.component('bigKpi', {
  templateUrl: 'app/kpi/kpi.component.html',
  controller: 'KpiController',
  bindings: {
    block: '=',
    onSelect: '&'
  }
});

