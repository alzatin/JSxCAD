/* global Worker */

import { isBrowser, isNode } from './browserOrNode.js';
import { conversation } from './conversation.js';

// Sets up a worker with conversational interface.
export const createService = async ({ nodeWorker, webWorker, agent }) => {
  if (isNode) {
    // const { Worker } = await import('worker_threads');
    const { Worker } = require('worker_threads');
    const worker = new Worker(nodeWorker);
    const say = (message) => worker.postMessage(message);
    const { ask, hear } = conversation({ agent, say });
    const stop = async () => {
      return new Promise((resolve, reject) => {
        worker.terminate((err, exitCode) => {
          if (err) {
            reject(err);
          } else {
            resolve(exitCode);
          }
        });
      });
    };
    worker.on('message', hear);
    return { ask, stop };
  } else if (isBrowser) {
    const worker = new Worker(webWorker);
    const say = (message) => worker.postMessage(message);
    const { ask, hear } = conversation({ agent, say });
    worker.onmessage = ({ data }) => hear(data);
    return { ask };
  } else {
    throw Error('die');
  }
};
