import store from "./Store"

describe('mypracticum/Store', () => {
  it('defined', () => {
    expect(store).toBeDefined();
  });

  it('emit event', () => {
    const tryemit = jest.fn();
    store.on("update", tryemit);
    store.set({ users: 'test' });
    expect(tryemit).toHaveBeenCalled();
  });
  it('set state', () => {
    store.set({users:"123"});

    const state = store.get();

    expect(state?.users).toEqual("123");
  });
});
