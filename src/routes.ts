import { Request, Response } from "express";
import  CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){

  CreateCourseService.execute({
      name: "nodeJS",
      educator: "Mat",
      duration: 10
  });
  CreateCourseService.execute({
    name: "Clear",
    educator: "Syu",
  });

  return response.send();
}