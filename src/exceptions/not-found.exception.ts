import { StatusCodes } from "http-status-codes";
import { HttpException } from "../shares/http-exception";

export class NotFoundException extends HttpException {
  constructor(target: string) {
    super(StatusCodes.BAD_REQUEST, `${target}_not_found`);
  }
}