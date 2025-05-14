class ParserBuilder {
  constructor() {
    this.parsers = new Map();
  }

  // Método para registrar un nuevo tipo de parser
  registerParser(type, ParserClass) {
    if (typeof ParserClass !== 'function') {
      throw new Error('El parser debe ser una clase o función constructora');
    }
    this.parsers.set(type, ParserClass);
    return this; // Permite chaining
  }

  // Método para construir el parser específico
  build(type) {
    if (!this.parsers.has(type)) {
      throw new Error(`No existe el tipo de parser: ${type}`);
    }
    const ParserClass = this.parsers.get(type);
    return new ParserClass();
  }

  // Método para verificar si un tipo de parser está registrado
  hasParser(type) {
    return this.parsers.has(type);
  }
}

