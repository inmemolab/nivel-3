import request from "supertest";
import { Arrays } from "@prisma/client";
import { prisma } from "../prisma/index";

describe("Arrys Endpoints", () => {
  let server;
  beforeAll(async () => {
    const mod = await import("../src/server");
    server = (mod as any).default;
  });
  it("should fetch all array", async () => {
    const res = await request(server).get("/api/all").expect(200);
    expect(JSON.parse(res.text)).toMatchObject({});
  });
  it("should fetch detail array", async () => {
    const id = 1;
    const res = await request(server).get(`/api/item/${id}`).expect(200);
    expect(JSON.parse(res.text)).toMatchObject({});
  });
  it("should fetch stat array", async () => {
    const id = 1;
    const res = await request(server).get("/api/stats").query({ isnumber: 5 }).expect(200);
    expect(JSON.parse(res.text)).toMatchObject({});
  });
  afterAll((done) => {
    server.close();
    done();
  });
});
