import Router from './Router';
import Block from './Block';

export class page extends Block {
  protected render(): string {
    return `
      <p>Page</p>
    `;
  }
}

describe('mypracticum/Router', () => {
  Router.use('/page-1', page).use('/page-2', page).start();

  it('defined', () => {
    expect(Router).toBeDefined();
  });

  it('getRouters', () => {
    expect(Router.getRouters().length).toEqual(2);
  });
});
