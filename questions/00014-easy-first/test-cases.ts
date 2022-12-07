import type { Equal, Expect } from '@type-challenges/utils'

type First<T extends any[]> = T extends { length: 0 } ? never : T[0]

type B = First<['abc']>

const t = [3, 2, 1]

type cases = [
  Expect<Equal<First<[3, 2, 1]>, number>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
