// There is a delay in the unhead/vue library that
// causes the head section to update a bit later, causing flaky tests.
// This is a workaround to wait for the head to be updated before continuing.
// see: https://github.com/unjs/unhead/discussions/144
export const waitForHead = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
}
