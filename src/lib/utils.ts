import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * The function `cn` in TypeScript merges multiple class values using `clsx` and `twMerge`.
 * @param {ClassValue[]} inputs - The `cn` function takes in an array of class values as its inputs.
 * These class values can be strings, arrays, objects, or any combination of these types. The function
 * then merges these class values using the `clsx` function and returns the result after applying
 * Tailwind CSS utility classes using
 * @returns The `cn` function is returning the result of merging the class names passed as arguments
 * using the `clsx` function and then applying Tailwind CSS utility classes using the `twMerge`
 * function.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * The `sleep` function in TypeScript creates a promise that resolves after a specified number of
 * milliseconds. It's being used to make sure that page exit animation is being completed, 
 * before enter animation of a next page starts.
 * @param {number} ms - The `ms` parameter in the `sleep` function represents the number of
 * milliseconds for which the function will pause execution before resolving the promise.
 */
export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

export const PAGE_TRANSITION_DURATION = 500
