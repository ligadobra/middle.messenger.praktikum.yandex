import { DefaultHeader } from "../../constants/api-headers";
import { TestAPIInstance } from "../../constants/api-instances";

export class GetTest {
  static async create() {
    return TestAPIInstance.get("/anything", {
      headers: DefaultHeader,
      data: {
        test: "123",
      },
    });
  }
}

export class PostTest {
  static async create() {
    return TestAPIInstance.post("/post", {
      headers: DefaultHeader,
      data: {
        test: "123",
      },
    });
  }
}

export class PutTest {
  static async create() {
    return TestAPIInstance.put("/put", {
      headers: DefaultHeader,
      data: {
        test: "123",
      },
    });
  }
}

export class DeleteTest {
  static async create() {
    return TestAPIInstance.delete("/delete", {
      headers: DefaultHeader,
      data: {
        test: "123",
      },
    });
  }
}
