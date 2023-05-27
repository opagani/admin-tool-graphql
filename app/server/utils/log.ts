import getNodeLogger from '@zg-rentals/logger-node';
import { tracer } from './tracer';

const log = getNodeLogger({
  logPath: process.env.NODE_OUT_FILE,
  level: process.env.LOG_LEVEL,
  mixin: () => tracer.logMixin(),
});

export default log;
