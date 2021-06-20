import { RailwayStockDocument } from '../db/types.d';
import { Query, Params } from './types.d';

export interface MiddlewareHandlerResult {
  status: number;
  json?: object;
}

export interface ExpressRequest {
  method: string;
  body: RailwayStockDocument;
  params: Params;
  query: Query;
  url: string;
}

export interface ExpressResult {
  status: Function;
}

type MiddlewareHandler = (body: RailwayStockDocument, params: Params, query: Query) => Promise<MiddlewareHandlerResult>;

export interface Query {
  q: string;
}

export interface Params {
  railwayStockId: string;
}

export interface ApiError {
  error: string;
}
