import store from '../store';

/** Port where the service is located. TODO: Put in config. */
const SERVICE_PORT = 8000;

/**
 * Create a resource.
 *
 * @param {Object} json - Resource to create.
 * @returns {Promise<Object>} Resource created.
 */
export const createResource = async (json) => {
  const { ip } = store.getState();

  const opts = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json),
  };
  const res = await fetch(`http://${ip}:${SERVICE_PORT}/rollingStock`, opts);
  if (!res.ok) {
    throw new Error(`Failed to create resource: ${res.statusText}`);
  }

  return await res.json();
};

/**
 * Find one or more resources.
 *
 * @param {Object} query - Query string.
 * @returns {Promise<Object[]>} Resources found.
 */
export const findResources = async (query) => {
  const { ip } = store.getState();

  const res = await fetch(`http://${ip}:${SERVICE_PORT}/rollingStock`);
  if (!res.ok) {
    throw new Error(`Failed to create resource: ${res.statusText}`);
  }

  return await res.json();
};
