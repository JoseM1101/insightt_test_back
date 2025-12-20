import * as taskService from "../../services/task.service"
import * as taskRepository from "../../repositories/task.repository"

jest.mock("../../repositories/task.repository")

describe("Task creation workflow", () => {
  it("creates a task for a given user", async () => {
    const userId = "user-123"
    const input = { title: "Write unit test" }

    const createdTask = {
      id: "task-1",
      title: "Write unit test",
      completed: false,
      userId,
      createdAt: new Date(),
    }

    jest.spyOn(taskRepository, "create").mockResolvedValue(createdTask as any)

    const result = await taskService.createTask(input, userId)

    expect(taskRepository.create).toHaveBeenCalledTimes(1)
    expect(taskRepository.create).toHaveBeenCalledWith(input, userId)
    expect(result).toEqual(createdTask)
  })
})
