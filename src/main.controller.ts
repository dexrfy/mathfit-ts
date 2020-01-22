import { NewsService } from "./services/newsPage.service";

export class Controller {
  private newsService: NewsService;

  constructor(private app: any) {
    this.newsService = new NewsService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.newsService.welcomeMessage);
    
    this.app.route("/news").get(this.newsService.getAllNews);
    this.app.route("/news/add").post(this.newsService.addNewPage);

    this.app
      .route("/news/:id")
      .delete(this.newsService.deletePage)
      .put(this.newsService.updatePage);
  }
}
