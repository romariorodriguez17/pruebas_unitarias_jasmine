const { sum ,compare,booleanOrNull } = require('../prueba.js');
describe("Prueba de suma", function() {
    it("el valor de la suma debe ser igual a 7 cuando los valores sean 3 y 4 ", function() {
        const result = sum(3,4)
      expect(result).toBe(7);
    });
  });
  

  describe("Prueba de comparacion", function() {
      it("el valor que se debe dar debe ser verdadero ,si envio dos valores para ser verdaderos deben ser iguales  ", function() {
          const result1 = compare(4,4)
        expect(result1).toBeTruthy();
      });
      it("el valor que se debe dar debe ser falso,si envio dos valores para ser falso deben ser diferentes   ", function() {
        const result1 = compare(3,4)
      expect(result1).toBeFalse();
    });
    });

    describe("Prueba de objeto definido", function() {
        it("el objeto debe estar definido", function() {
            const dateDefined= new Date();
          expect(dateDefined).toBeDefined();
        });
      });
      describe("Prueba funcion booleanOrNull", function() {  
        it("el resultado debe ser nulo ", function() {
            const result2 = booleanOrNull(4)
          expect(result2).toBeNull();
        });
        it("el resultado debe ser un booleano ", function() {
            const result3 = booleanOrNull(true)
          expect(result3).toBeTruthy();
        });
      });

      describe("Prueba del numero debe ser mayor", function() {
        it("el numero debe ser mayor ", function() {
            const result4 = sum(3,3)
          expect(result4).toBeGreaterThan(5);
        });
      });
