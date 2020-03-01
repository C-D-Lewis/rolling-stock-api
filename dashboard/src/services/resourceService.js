import store from '../store';

/** Port where the service is located. TODO: Put in config. */
const SERVICE_PORT = 8000;

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
