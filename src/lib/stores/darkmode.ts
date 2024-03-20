import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const darkmode: Writable<boolean> = writable<boolean>(true)

export { darkmode }
