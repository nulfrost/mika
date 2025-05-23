/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import type * as ExchangeMikaClassifiedsImages from './images.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'exchange.mika.classifieds.listing'

export interface Record {
  $type: 'exchange.mika.classifieds.listing'
  /** The title for the listing. */
  title: string
  /** The description for the listing. */
  description?: string
  /** The current status for the listing. */
  status?:
    | 'exchange.mika.classifieds.defs#active'
    | 'exchange.mika.classifieds.defs#claimed'
    | (string & {})
  media?: $Typed<ExchangeMikaClassifiedsImages.Main> | { $type: string }
  /** Whether the items in the listing are free or not. */
  isFree: boolean
  createdAt: string
  /** When the listing expires, if it's time sensitive. */
  expiresAt?: string
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}
