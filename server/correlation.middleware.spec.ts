import { CorrelationMiddleware } from './correlation.middleware';

describe('CorrelationMiddleware', () => {
  it('should be defined', () => {
    expect(new CorrelationMiddleware()).toBeDefined();
  });
});
