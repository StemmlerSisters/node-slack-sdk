import assert from 'node:assert';
import { WebClient } from '../../../dist/index.js';

const client = new WebClient('invalid-token');
try {
  await client.auth.test();
  console.error('❌ Unexpected auth.test success! Exiting ESM project integration test with non-zero exit code.');
  process.exit(1);
} catch (e) {
  assert(
    e.message.includes('invalid_auth'),
    '❌ Did not receive expected "invalid_auth" response from `auth.test` API, ESM project integration test failed.',
  );
  console.log('✅ ESM project integration test succeeded!');
}
