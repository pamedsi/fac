import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { subtrairBinarios } from "./subtrair-binarios.ts";

// $ deno test url_test.ts

Deno.test("subtrairBinarios('0', '0') deve retornar '0'", () => {
  const resultado = subtrairBinarios("0", "0")
  assertEquals(resultado, "0");
});

Deno.test("subtrairBinarios('1', '0') deve retornar '1'", () => {
  const resultado = subtrairBinarios("1", "0")
  assertEquals(resultado, "1");
});

Deno.test("subtrairBinarios('101', '1') deve retornar '100'", () => {
  const resultado = subtrairBinarios("101", "1")
  assertEquals(resultado, "100");
});

Deno.test("subtrairBinarios('111', '10') deve retornar '101'", () => {
  const resultado = subtrairBinarios("111", "10")
  assertEquals(resultado, "101");
});

Deno.test("subtrairBinarios('101', '11') deve retornar '10'", () => {
  const resultado = subtrairBinarios("101", "11")
  assertEquals(resultado, "10");
});

Deno.test("subtrairBinarios('110', '101') deve retornar '1'", () => {
  const resultado = subtrairBinarios("110", "101")
  assertEquals(resultado, "1");
});

Deno.test("subtrairBinarios('111', '100') deve retornar '11'", () => {
  const resultado = subtrairBinarios("111", "100")
  assertEquals(resultado, "11");
});

Deno.test("subtrairBinarios('110', '100') deve retornar '10'", () => {
  const resultado = subtrairBinarios("110", "100")
  assertEquals(resultado, "10");
});
  
Deno.test("subtrairBinarios('111', '101') deve retornar '10'", () => {
  const resultado = subtrairBinarios("111", "101")
  assertEquals(resultado, "10");
});

Deno.test("subtrairBinarios('1010', '110') deve retornar '100'", () => {
  const resultado = subtrairBinarios("1010", "110")
  assertEquals(resultado, "100");
});
  
Deno.test("subtrairBinarios('1011', '1100') deve retornar '-1'", () => {
  const resultado = subtrairBinarios("1011", "1100")
  assertEquals(resultado, "-1");
});

Deno.test("subtrairBinarios('1100', '1011') deve retornar '1'", () => {
  const resultado = subtrairBinarios("1100", "1011")
  assertEquals(resultado, "1");
});

Deno.test("subtrairBinarios('10101', '10100') deve retornar '1'", () => {
  const resultado = subtrairBinarios("10101", "10100")
  assertEquals(resultado, "1");
});

Deno.test("subtrairBinarios('10101', '1111') deve retornar '110'", () => {
  const resultado = subtrairBinarios("10101", "1111")
  assertEquals(resultado, "110");
});


// test('subtrairBinarios', () => {
//   expect(subtrairBinarios('0', '0')).toBe('0');
//   expect(subtrairBinarios('1', '0')).toBe('1');
//   expect(subtrairBinarios('101', '1')).toBe('100');
//   expect(subtrairBinarios('111', '10')).toBe('101');
//   expect(subtrairBinarios('101', '11')).toBe('10');
//   expect(subtrairBinarios('110', '101')).toBe('1');
//   expect(subtrairBinarios('111', '100')).toBe('11');
//   expect(subtrairBinarios('110', '100')).toBe('10');
//   expect(subtrairBinarios('111', '101')).toBe('10');
//   expect(subtrairBinarios('1010', '110')).toBe('100');
//   expect(subtrairBinarios('1011', '1100')).toBe('-1');
//   expect(subtrairBinarios('1100', '1011')).toBe('1');
//   expect(subtrairBinarios('10101', '10100')).toBe('1');
//   expect(subtrairBinarios('10101', '1111')).toBe('110');
//   expect(subtrairBinarios('101010', '101010')).toBe('0');
//   expect(subtrairBinarios('111111', '101010')).toBe('10101');
//   expect(subtrairBinarios('1100101', '11001')).toBe('1001100');
//   expect(subtrairBinarios('1100101', '100')).toBe('1100001');
//   expect(subtrairBinarios('101010101', '11111111')).toBe('1010110');
//   expect(subtrairBinarios('100000000', '11111111')).toBe('1');
// });