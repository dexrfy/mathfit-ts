import { Request, Response } from 'express';

import { NewsPage } from '../models/newsPage.model';
import { WELCOME_MESSAGE } from '../constants/mathFit.constants';

export class NewsService {
  public welcomeMessage(req: Request, res: Response) {
    res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllNews(req: Request, res: Response) {
    NewsPage.find({}, (error: Error, page: any) => {
      if (error) {
        res.send(error);
      }
      res.json(page);
    });
  }

  public addNewPage(req: Request, res: Response) {
    const newPage = new NewsPage(req.body);
    newPage.save((error: Error, page: any) => {
      if (error) {
        res.send(error);
      }
      res.json(page);
    });

  }

  public deletePage(req: Request, res: Response) {
    const pageID = req.params.id;
    NewsPage.findByIdAndDelete(pageID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Page not found :(';
      res.status(200).send(message);
    });
  }

  public updatePage(req: Request, res: Response) {
    const pageId = req.params.id;
    NewsPage.findByIdAndUpdate(
      pageId,
      req.body,
      (error: Error, page: any) => {
        if (error) {
          res.send(error);
        }
        const message = page
          ? 'Updated successfully'
          : 'Page not found :(';
        res.send(message);
      }
    );
  }
}
