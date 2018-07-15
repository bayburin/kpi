app.component('kpi', {
  templateUrl: 'app/kpi/kpi.component.html',
  controller: 'KpiController',
  bindings: {
    block: '=',
    onSelect: '&'
  }
});

