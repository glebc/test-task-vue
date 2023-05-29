import { Server, Response } from 'miragejs'

export function makeServer() {

  return new Server({
    routes() {
      this.namespace = 'api';
      this.get('/articles', schema => {
        return new Response(200, {}, [
          {
            id: 1,
            title: 'title 1',
            img: '',
            description: 'description for article',
            likes: 1,
          },
          {
            id: 2,
            title: 'title 2',
            img: '',
            description: 'description for article',
            likes: 3,
          },
          {
            id: 3,
            title: 'title 3',
            img: '',
            description: 'description for article',
            likes: 2,
          }
        ])
      });

    },
  });
}