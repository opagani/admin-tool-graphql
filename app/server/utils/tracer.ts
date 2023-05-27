import { DatadogTracerPlugin, NodeTracer } from '@zg-rentals/trace-node';

const service = process.env.DD_SERVICE || __APP_NAME__;
const hostname = process.env.DD_TRACE_AGENT_HOSTNAME || process.env.DD_AGENT_HOST || 'datadog-agent';

const plugin = new DatadogTracerPlugin({
  service: __APP_NAME__,
  version: String(__BUILD_NUMBER__),
  sampleRate: 0.5,
  hostname,
});

plugin.tracer.use('express', { service });
plugin.tracer.use('graphql', { service });

export const tracer = new NodeTracer({ plugin });
