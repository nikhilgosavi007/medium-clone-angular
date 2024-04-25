export interface ArticleInterface {
  body: string,
  createdAt: string,
  description: string,
  favourited: boolean,
  favouritesCount: number,
  slug: string,
  tagList: string[],
  title: string,
  updatedAt: string
  // TODO: Add author interface
}
