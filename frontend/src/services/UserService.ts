import { callAPI } from "@/utils/apiUtils";

export class UserService {
  static apiVersion = "v1";
  static apiRoot = "user";

  static async login(username: string, password: string) {
    return await callAPI("POST", `${this.apiVersion}/${this.apiRoot}/login`, {
      username,
      password,
    });
  }
}
