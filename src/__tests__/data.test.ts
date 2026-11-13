import { describe, expect, it } from "vitest";
import { products, services } from "../lib/data";
import { quoteSchema } from "../lib/validators";

describe("catalogue", () => {
  it("has unique product identifiers", () => {
    const keys = products.map(p => p.slug);
    expect(new Set(keys).size).toBe(keys.length);
  });
  it("has unique service identifiers", () => {
    const keys = services.map(s => s.slug);
    expect(new Set(keys).size).toBe(keys.length);
  });
  it("rejects quote requests without products", () => {
    expect(quoteSchema.safeParse({kind: "quotation",fullName: "A Client",email: "client@example.org",organization:"Entreprise",phone:"+22612345678",country:"Burkina Faso",items:[]}).success).toBe(false);
  });
});
