describe('skyzoneHQ', () => {
  it('is a function', () => {
    expect(typeof skyzoneHQ).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = skyzoneHQ();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct string', () => {
    let returnedValue = skyzoneHQ();
    expect(returnedValue).toEqual(
      'skyzoneHQ is online, United States, Illinois, Chicago'
    );
  });
});
