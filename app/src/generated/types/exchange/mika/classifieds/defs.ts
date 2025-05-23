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
const id = 'exchange.mika.classifieds.defs'

/** width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit. */
export interface AspectRatio {
  $type?: 'exchange.mika.classifieds.defs#aspectRatio'
  width: number
  height: number
}

const hashAspectRatio = 'aspectRatio'

export function isAspectRatio<V>(v: V) {
  return is$typed(v, id, hashAspectRatio)
}

export function validateAspectRatio<V>(v: V) {
  return validate<AspectRatio & V>(v, id, hashAspectRatio)
}

/** State representing a listing that is active */
export const ACTIVE = `${id}#active`
/** State representing a listing that has been claimed */
export const CLAIMED = `${id}#claimed`

export interface ListingView {
  $type?: 'exchange.mika.classifieds.defs#listingView'
  uri: string
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
  profile: ProfileView
}

const hashListingView = 'listingView'

export function isListingView<V>(v: V) {
  return is$typed(v, id, hashListingView)
}

export function validateListingView<V>(v: V) {
  return validate<ListingView & V>(v, id, hashListingView)
}

export interface ProfileView {
  $type?: 'exchange.mika.classifieds.defs#profileView'
  did: string
}

const hashProfileView = 'profileView'

export function isProfileView<V>(v: V) {
  return is$typed(v, id, hashProfileView)
}

export function validateProfileView<V>(v: V) {
  return validate<ProfileView & V>(v, id, hashProfileView)
}
