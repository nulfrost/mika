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
  media?: $Typed<ExchangeMikaClassifiedsImages.Main> | { $type: string }
  createdAt: string
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}
