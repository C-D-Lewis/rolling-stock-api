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

  const queryString = query ? `?q=${query}` : '';
  const res = await fetch(`http://${ip}:${SERVICE_PORT}/rollingStock${queryString}`);
  if (!res.ok) {
    throw new Error(`Failed to find resources: ${res.statusText}`);
  }

  return await res.json();
};

/**
 * Update a resource.
 *
 * @param {Object} json - Resource to update.
 * @returns {Promise<Object>} Resource updated.
 */
export const updateResource = async (json) => {
  const { ip } = store.getState();

  const opts = {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json),
  };
  const res = await fetch(`http://${ip}:${SERVICE_PORT}/rollingStock/${json.id}`, opts);
  if (!res.ok) {
    throw new Error(`Failed to update resource: ${res.statusText}`);
  }

  return await res.json();
};
