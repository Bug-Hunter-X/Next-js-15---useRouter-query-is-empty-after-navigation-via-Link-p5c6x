# Next.js 15 - useRouter.query Unexpected Behavior

This repository demonstrates an unexpected behavior in Next.js 15 when using `next/link` for navigation and accessing `router.query` in the destination page.  The `router.query` object is unexpectedly empty.  This behavior seems inconsistent with expected behavior, possibly an edge case of the new App Router and data fetching paradigms.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate from the home page to the about page using the provided link.
5. Observe that the console logs an empty object for `router.query` in the About page. This is the unexpected behavior.

## Expected Behavior

`router.query` should not be empty when navigating through internal links.