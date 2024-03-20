import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

type Theme = 'skeleton'
const theme: Writable<Theme> = writable<Theme>('skeleton')

export { theme }
export type { Theme }
