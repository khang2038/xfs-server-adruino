import { IGetLimitAndOffset } from "../interfaces/limit-offset.interface";

export const getLimitAndOffset = ({
  limit = 10,
  offset = 0,
}: IGetLimitAndOffset) => {
  const _limit = limit > 50 ? 50 : limit;
  const _offset = offset ?? 0;

  return {
    limit: _limit,
    offset: _offset,
  };
};
