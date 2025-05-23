/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type LexiconDoc,
  Lexicons,
  ValidationError,
  type ValidationResult,
} from '@atproto/lexicon'
import { type $Typed, is$typed, maybe$typed } from './util.js'

export const schemaDict = {
  ExchangeMikaClassifiedsDefs: {
    lexicon: 1,
    id: 'exchange.mika.classifieds.defs',
    defs: {
      aspectRatio: {
        type: 'object',
        description:
          'width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit.',
        required: ['width', 'height'],
        properties: {
          width: {
            type: 'integer',
            minimum: 1,
          },
          height: {
            type: 'integer',
            minimum: 1,
          },
        },
      },
      active: {
        type: 'token',
        description: 'State representing a listing that is active',
      },
      claimed: {
        type: 'token',
        description: 'State representing a listing that has been claimed',
      },
      listingView: {
        type: 'object',
        required: ['uri', 'profile', 'title', 'createdAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          title: {
            type: 'string',
            description: 'The title for the listing.',
          },
          description: {
            type: 'string',
            description: 'The description for the listing.',
          },
          status: {
            type: 'string',
            description: 'The current status for the listing.',
            knownValues: [
              'exchange.mika.classifieds.defs#active',
              'exchange.mika.classifieds.defs#claimed',
            ],
          },
          media: {
            type: 'union',
            refs: ['lex:exchange.mika.classifieds.images'],
          },
          isFree: {
            type: 'boolean',
            default: false,
            description: 'Whether the items in the listing are free or not.',
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
          expiresAt: {
            type: 'string',
            format: 'datetime',
            description: "When the listing expires, if it's time sensitive.",
          },
          profile: {
            type: 'ref',
            ref: 'lex:exchange.mika.classifieds.defs#profileView',
          },
        },
      },
      profileView: {
        type: 'object',
        required: ['did'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
        },
      },
    },
  },
  ExchangeMikaClassifiedsImages: {
    lexicon: 1,
    id: 'exchange.mika.classifieds.images',
    description: 'A set of images belonging to a listing.',
    defs: {
      main: {
        type: 'object',
        required: ['images'],
        properties: {
          images: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:exchange.mika.classifieds.images#image',
            },
            maxLength: 6,
          },
        },
      },
      image: {
        type: 'object',
        required: ['image', 'alt'],
        properties: {
          image: {
            type: 'blob',
            accept: ['image/*'],
            maxSize: 1000000,
          },
          alt: {
            type: 'string',
            description:
              'Alt text description of the image, for accessibility.',
          },
          aspectRatio: {
            type: 'ref',
            ref: 'lex:exchange.mika.classifieds.defs#aspectRatio',
          },
        },
      },
    },
  },
  ExchangeMikaClassifiedsListing: {
    lexicon: 1,
    id: 'exchange.mika.classifieds.listing',
    description:
      'An object representing a listing of items or an item a user has posted.',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          required: ['title', 'createdAt'],
          properties: {
            title: {
              type: 'string',
              description: 'The title for the listing.',
            },
            description: {
              type: 'string',
              description: 'The description for the listing.',
            },
            status: {
              type: 'string',
              description: 'The current status for the listing.',
              knownValues: [
                'exchange.mika.classifieds.defs#active',
                'exchange.mika.classifieds.defs#claimed',
              ],
            },
            media: {
              type: 'union',
              refs: ['lex:exchange.mika.classifieds.images'],
            },
            isFree: {
              type: 'boolean',
              default: false,
              description: 'Whether the items in the listing are free or not.',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            expiresAt: {
              type: 'string',
              format: 'datetime',
              description: "When the listing expires, if it's time sensitive.",
            },
          },
        },
      },
    },
  },
} as const satisfies Record<string, LexiconDoc>
export const schemas = Object.values(schemaDict) satisfies LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)

export function validate<T extends { $type: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType: true,
): ValidationResult<T>
export function validate<T extends { $type?: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: false,
): ValidationResult<T>
export function validate(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: boolean,
): ValidationResult {
  return (requiredType ? is$typed : maybe$typed)(v, id, hash)
    ? lexicons.validate(`${id}#${hash}`, v)
    : {
        success: false,
        error: new ValidationError(
          `Must be an object with "${hash === 'main' ? id : `${id}#${hash}`}" $type property`,
        ),
      }
}

export const ids = {
  ExchangeMikaClassifiedsDefs: 'exchange.mika.classifieds.defs',
  ExchangeMikaClassifiedsImages: 'exchange.mika.classifieds.images',
  ExchangeMikaClassifiedsListing: 'exchange.mika.classifieds.listing',
} as const
