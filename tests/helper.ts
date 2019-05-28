process.on('unhandledRejection', error => {
  throw error;
});

afterEach(function() {
  // Fail any tests that encountered an unhandled promise rejection AssertionError.
  if ((global as any).unhandledRejection != null) {
    (this.test as any).error((global as any).unhandledRejection.error);
    (global as any).unhandledRejection.error = null;
  }
  (global as any).sandbox.restore();
});
