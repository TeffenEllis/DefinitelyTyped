// Type definitions for match-sorter 4.0
// Project: https://github.com/kentcdodds/match-sorter#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
//                 Christian Ruigrok <https://github.com/chrisru>
//                 Timo Riski <https://github.com/rriski>
//                 Teffen Ellis <https://github.com/TeffenEllis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

declare module "match-sorter" {
  export enum rankings {
    CASE_SENSITIVE_EQUAL = 9,
    EQUAL = 8,
    STARTS_WITH = 7,
    WORD_STARTS_WITH = 6,
    STRING_CASE = 5,
    STRING_CASE_ACRONYM = 4,
    CONTAINS = 3,
    ACRONYM = 2,
    MATCHES = 1,
    NO_MATCH = 0,
  }

  export type KeyOptions<T> = (item: T) => string | string[]

  export type ExtendedKeyOptions<T> = { key: KeyOptions<T> } & (
    | { minRanking: number }
    | { maxRanking: number }
    | { threshold: number }
  )

  export interface Options<T> {
    keys?: Array<keyof T | KeyOptions<T> | ExtendedKeyOptions<T>>
    threshold?: number
    keepDiacritics?: boolean
  }

  /**
   * Takes an array of items and a value and returns a new array with the items that match the given value
   * @param items - the items to sort
   * @param value - the value to use for ranking
   * @param options - Some options to configure the sorter
   * @return the new sorted array
   */
  function matchSorter<T>(items: ReadonlyArray<T>, value: string, options?: Options<T>): T[]

  export default matchSorter
}
