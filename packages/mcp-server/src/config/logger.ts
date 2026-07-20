import pino from 'pino';

export const logger = pino({
  enabled: false,
});

export function withCorrelation(correlationId: string) {
  return logger.child({ correlationId });
}