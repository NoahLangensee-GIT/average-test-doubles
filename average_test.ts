import { expect } from "@std/expect";
import { Average } from './average.ts';
import { StubNumberProvider_Hardcoded } from './StubNumberProvider_Hardcoded.ts';
import { StubNumberProvider_Flexibel } from './StubNumberProvider_Flexibel.ts';
import { MockNumberProvider } from './MockNumberProvider.ts';

Deno.test("Calculate mean with hardcoded Stub", async () => {
  const numberProvider = new StubNumberProvider_Hardcoded();
  const averager = new Average(numberProvider);
  const mean = await averager.computeMeanOfFile();
  expect(mean).toBe(10);
});

Deno.test("Calculate mean with flexible Stub", async () => {
  const testData = [5, 10, 15];
  const numberProvider = new StubNumberProvider_Flexibel(testData);
  const averager = new Average(numberProvider);
  const mean = await averager.computeMeanOfFile();
  expect(mean).toBe(10);
});

Deno.test("Calculate mean with Mock and verify CallCount", async () => {
  const testData = [1, 2, 9];
  const numberProvider = new MockNumberProvider(testData);
  const averager = new Average(numberProvider);
  const mean = await averager.computeMeanOfFile();
  expect(mean).toBe(4);
  expect(numberProvider.callCount).toBe(1);
});
