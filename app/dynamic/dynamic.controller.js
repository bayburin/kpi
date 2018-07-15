app.controller('DynamicController', DynamicController);

function DynamicController() {
  // Минимальное значение, относительно которого смотрится, положительная динамика или отрицательная
  const STATIC_VAL = 2;

  this.positiveDynamic = () => parseFloat(this.value) > STATIC_VAL;
  this.negativeDynamic = () => parseFloat(this.value) < -STATIC_VAL;
  this.staticDynamic = () => {
    let val = parseFloat(this.value);
    return val <= STATIC_VAL && val >=-STATIC_VAL;
  };
}