import { describe, expect, it } from "vitest";
import { readLimitedJson, RequestBodyError } from "../lib/request-body";

describe("limited JSON body", () => {
  it("reads a valid JSON request", async () => {
    const input = new Request("https://example.org/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind: "contact", name: "Exemple" }),
    });
    expect(await readLimitedJson(input)).toEqual({ kind: "contact", name: "Exemple" });
  });
  it("rejects a body exceeding the byte limit even without Content-Length", async () => {
    const input = new Request("https://example.org/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: "x".repeat(100) }),
    });
    await expect(readLimitedJson(input, 25)).rejects.toMatchObject({ status: 413 });
  });
  it("rejects non-JSON content", async () => {
    const input = new Request("https://example.org/api/contact", { method: "POST", body: "abc" });
    await expect(readLimitedJson(input)).rejects.toBeInstanceOf(RequestBodyError);
  });
});
