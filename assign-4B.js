// Parent class
class Engine {
    constructor(type) {
      this.type = type;
    }
  
    start() {
      console.log(`${this.type} engine started.`);
    }
  }
  
  // Child classes inheriting from Engine
  class V6Engine extends Engine {
    constructor() {
      super("FORD");
    }
  }
  
  class V8Engine extends Engine {
    constructor() {
      super("BMW");
    }
  }
  
  class V12Engine extends Engine {
    constructor() {
      super("TOYOTA");
    }
  }
  
  // Custom iterator using a generator function
  class EngineIterator {
    constructor(engines) {
      this.engines = engines;
      this.currentIndex = 0;
    }
  
    *next() {
      while (this.currentIndex < this.engines.length) {
        yield this.engines[this.currentIndex];
        this.currentIndex++;
      }
    }
  }
  
  // Creating instances
  const v6Engine = new V6Engine();
  const v8Engine = new V8Engine();
  const v12Engine = new V12Engine();
  
  const engines = [v6Engine, v8Engine, v12Engine];
  
  // Using the custom iterator with generator
  const engineIterator = new EngineIterator(engines);
  const iterator = engineIterator.next();
  
  console.log("Using iterator with generator:");
  for (const engine of iterator) {
    engine.start();
  }
  
  