# Improvement Ideas

## Code readibility and scalibility

we should find the time to learn and use custom pathing/ with:

{
<br>--"compilerOptions": {
<br>----"baseUrl": ".",
<br>----"paths": {
<br>------"@/*": ["src/*"],
<br>------"@components/*": ["src/components/*"],
<br>------"@utils/*": ["src/utils/*"],
<br>------"@assets/*": ["public/assets/*"]
<br>----}
<br>--}
<br>}


## Docs/Notes

we need to review and clean them up, we have no true reason to keep them how they all and they could easily be filtered through, combimed, removed (jokes, failed/dragged out solutions, etc.)

## Project display

**Pre-render code execution**

we have a lot of code that requires an inital wasted render (sort of, barely noticeable) and a prerender would save resources (waste scales with users/traffic)

a swipe gesture for mobile users.
