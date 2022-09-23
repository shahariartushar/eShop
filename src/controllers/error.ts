import express, { Application, Request, Response, NextFunction } from "express";

const get404: any = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/" });
};

export default { get404 };
