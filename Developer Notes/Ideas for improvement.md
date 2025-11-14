# Improvement Ideas

**Use this to list headers quickly**

<!--todo--> crl + shift + O (used for contrast)

## Global Improvement

### Prerender, suspend, lazy

**Summary:** A prerender would save upwards of 3 renders per loadfile call, roughly, and lazy loading is a simple improvement that reduces inital time along side memory usage. 

prerenders as of **10/14/25** 
- project display, 
- skills (both inline and grid)

### Code readibility and scalibility

#### Code Pathfinding 

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

#### Contact handler / Node Mailer

[Jump to Contact handler/ node mailer](#professional-contact-handler-nodemailer)


### Docs/Notes

we need to review and clean them up, we have no true reason to keep them how they all and they could easily be filtered through, combimed, removed (jokes, failed/dragged out solutions, etc.)

## File / Component Specific

### Home page

#### Hero image

it's too zoomed in, for desktop it's a heavy issue and mobile we simply get by but we do want our drink to show on desktop. 

### Project display

**Pre-render code execution**

we have a lot of code that requires an inital wasted render (sort of, barely noticeable) and a prerender would save resources (waste scales with users/traffic)

a swipe gesture for mobile users.

### A leetcode display

**In short** we can use: https:// leetcode-stats-api.herokuapp.com/YOUR_USERNAME, to get our stats for a component. 

**what we'd need** if we chose to do this with efficency in mind:

Fetch data from https://leetcode-stats-api.herokuapp.com/<username> using Bash.
Cache response to src/data/leetcode.json.
Display cached data in React component for speed and reliability.
Update cache daily/weekly via Bash script or GitHub Action.
(Optional) Keep live fetch behind flag for development use.

Benefit: consistent uptime, no rate limits, static performance, low maintenance.

as for now, if we do it within this week or a week from live, a static one-time pull should be fine. but as we grow, we should use this format: week, day, hour. 
but that's more dependant on how often I complete leetcode problems. 

### Professional Contact handler (nodeMailer)

It's not a bad thing to use the easy and fast one with no control (very little in comparsion) instead of nodemailer, but nodemailer would help us show our desire to grow into the role of a full stack developer and allow a reduced effort when hiring others to handle communitication / sales down the line (more for personal endevours than this project) 
In short, later use nodeMailer to improve readibility for others and display full stack role growth desire. 


## Design Adjustments 

### home page hero section; 

the header is too much for mobile but fine on desktop. 
