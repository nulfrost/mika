/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  XrpcClient,
  type FetchHandler,
  type FetchHandlerOptions,
} from '@atproto/xrpc'
import { schemas } from './lexicons.js'
import { CID } from 'multiformats/cid'
import { type OmitKey, type Un$Typed } from './util.js'
import * as ExchangeMikaClassifiedsDefs from './types/exchange/mika/classifieds/defs.js'
import * as ExchangeMikaClassifiedsImages from './types/exchange/mika/classifieds/images.js'
import * as ExchangeMikaClassifiedsListing from './types/exchange/mika/classifieds/listing.js'

export * as ExchangeMikaClassifiedsDefs from './types/exchange/mika/classifieds/defs.js'
export * as ExchangeMikaClassifiedsImages from './types/exchange/mika/classifieds/images.js'
export * as ExchangeMikaClassifiedsListing from './types/exchange/mika/classifieds/listing.js'

export const EXCHANGE_MIKA_CLASSIFIEDS = {
  DefsActive: 'exchange.mika.classifieds.defs#active',
  DefsClaimed: 'exchange.mika.classifieds.defs#claimed',
}

export class AtpBaseClient extends XrpcClient {
  exchange: ExchangeNS

  constructor(options: FetchHandler | FetchHandlerOptions) {
    super(options, schemas)
    this.exchange = new ExchangeNS(this)
  }

  /** @deprecated use `this` instead */
  get xrpc(): XrpcClient {
    return this
  }
}

export class ExchangeNS {
  _client: XrpcClient
  mika: ExchangeMikaNS

  constructor(client: XrpcClient) {
    this._client = client
    this.mika = new ExchangeMikaNS(client)
  }
}

export class ExchangeMikaNS {
  _client: XrpcClient
  classifieds: ExchangeMikaClassifiedsNS

  constructor(client: XrpcClient) {
    this._client = client
    this.classifieds = new ExchangeMikaClassifiedsNS(client)
  }
}

export class ExchangeMikaClassifiedsNS {
  _client: XrpcClient
  listing: ExchangeMikaClassifiedsListingRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.listing = new ExchangeMikaClassifiedsListingRecord(client)
  }
}

export class ExchangeMikaClassifiedsListingRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: ExchangeMikaClassifiedsListing.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'exchange.mika.classifieds.listing',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: ExchangeMikaClassifiedsListing.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'exchange.mika.classifieds.listing',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<ExchangeMikaClassifiedsListing.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'exchange.mika.classifieds.listing'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'exchange.mika.classifieds.listing', ...params },
      { headers },
    )
  }
}
