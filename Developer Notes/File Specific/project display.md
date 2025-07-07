# Project Display, working notes



## Known Issues

- images with no src
- data loading not functioning correctly
- Dots present, but they need styles to be visable,
- Dots functionality depend on data load. 

## Fixed Issues

- `children` now working properly (no jokes please zay.)
- Data looks to load, check for accuracy. (it filers out to test data currently)

## Ideas for improvement 

- slider aspect, 
    - if we used a hide overflow we could group the sections togeter with js, (how many show at a time) then use a btn triggered animation to slide the cards groups.

    This would require more resoures but it could be possible to update the next card and last card [1, 2, 3] (groups) so that we don't need the entire categlog at a time and we only load what would be present within the selection. 

    - them changing like the ones we did in the learning project might not be effective for a front facing site. (changes in place, slight delay on first load, above solution might solve this as well)

- Build a dymatic dropdown for our group selector, front facing.

## Current status

**7/2/2025 (12am+)**

 We have A functioning return, apparently we set it to just a text block, 
 Moving onto the function of loading the projects contents. 

We want: 
- listed projects from file (we've done this in react study app, an old portfolio project, and simliar )
- ability to fliter projects without losing data (also have done before)
- ability to move to next group and last group (1, 2, 3 -> 2, 3, 4/ -1, 1, 2)

current step, list projects as a whole. Done (kinda, it selects one, but make sure we can adjust that before moving on.)

**7/2/2025 day**

Functioning program, our handle btn click is our issue. It's reading length from a null property. shouldn't be hard to fix. 

btn looks fixed with the load. 

btn is function, next step: maybe try using [1, 2, 3] as selectors of the projects we want. 

**7/3/2025**

A quick hour to work: 
    Goal selectable group size, 
    it will later be based on screen size. 

above note should explain this well enough, our old pokemon joke project does this.

idea step, 

data imported 
data grouped 

okay, update after quick research, it doesn't make sense to use a singlarly update. (showing only the next one, but instead showing the next gruop). 

time's up, not much done, but decisions made, 
build the slider to slide into the next group of projects.
this could be done but having an offset, or a react hook array, 

Wouldn't mind double checking our code, since we have a few renders in the system before our data is loaded. which outputs to the console. A solution could be just a true error check affer everything has loaded, unsure in the moment but hopefully that changes soon. 

**7/4/25**

json file changed, we initialy used section, we converted accidentally, now were using `sections` to filiter them.

attempting to handle that group size task we had, bs hour call at work today...

Short term gain, or long term wealth. 

change group to selections and adjust for the filters to include array logic. if filter tag within array logic is true, hard to speak and think right now. but hopefully future you already knows what we're looking for