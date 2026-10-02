const request = require("supertest");
const app = require("./server");

describe("Health endpoint", () => {
  test("GET /health should return 200", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
  });

  test("GET /health should return status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.body.status).toBe("ok");
  });
});

describe("Tasks API", () => {
  test("GET /api/tasks should return 200", async () => {
    const response = await request(app).get("/api/tasks");

    expect(response.statusCode).toBe(200);
  });

  test("GET /api/tasks should return an array", async () => {
    const response = await request(app).get("/api/tasks");

    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /api/tasks/1 should return the first task", async () => {
    const response = await request(app).get("/api/tasks/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  test("GET /api/tasks/999 should return 404", async () => {
    const response = await request(app).get("/api/tasks/999");

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Task not found");
  });

  test("POST /api/tasks should create a task", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({
        title: "Learn automated testing"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Learn automated testing");
    expect(response.body.completed).toBe(false);
  });

  test("POST /api/tasks without title should return 400", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Title is required");
  });

  test("DELETE /api/tasks/1 should return 204", async () => {
    const response = await request(app)
      .delete("/api/tasks/1");

    expect(response.statusCode).toBe(204);
  });
});