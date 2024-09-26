import { describe, it } from "node:test";
import assert from "node:assert";
import { toTitleCase } from "./toTitleCase.js";

describe('toTitleCase()', () => {
  it('Mot en minuscules', () => {
    const result = toTitleCase("oclock");
    assert.equal(result, "Oclock");
  });
});