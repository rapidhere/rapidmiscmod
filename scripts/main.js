const resetSpawnedUnit = (event) => {
  var unit = event.unit;
  
  if (unit.isFlying()) {
    unit.controller(new FlyingAI());
  }
};

Events.on(UnitSpawnEvent, resetSpawnedUnit);
