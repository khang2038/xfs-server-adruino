import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as specificationService from '../services/specification.service';

export const getTemperature = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const temperatures = await specificationService.getTemperature();
    return res.status(StatusCodes.OK).json(temperatures);
  } catch (error) {
    next(error);
  }
};

export const getCOConcentration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const COConcentration = await specificationService.getCOConcentration();
    return res.status(StatusCodes.OK).json(COConcentration);
  } catch (error) {
    next(error);
  }
};

export const getLPGGasConcentration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const LPGGasConcentration = await specificationService.getLPGGasConcentration();
    return res.status(StatusCodes.OK).json(LPGGasConcentration);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const specifications = await specificationService.getAll();
    return res.status(StatusCodes.OK).json(specifications);
  } catch (error) {
    next(error);
  }
};




