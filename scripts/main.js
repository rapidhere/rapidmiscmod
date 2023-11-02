const resetSpawnedUnit = (event) => {
  var unit = event.unit;
  Vars.ui.hudfrag.showToast("spawnunit!");
  
  if (unit.isFlying()) {
    Vars.ui.hudfrag.showToast("flyingunit!");
    unit.controller(new FlyingAI());
    Vars.ui.hudfrag.showToast("flyingunit done!");
  }
};

Events.on(UnitSpawnEvent, setup);
