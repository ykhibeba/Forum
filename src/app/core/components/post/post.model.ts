export interface PostModel {
  id: number;
  datetime: string;
  name: string;
  body: string;
  comments: [
    {
      id: number;
      datetime: string;
      name: string;
      body: string;
    }
    ];
}
