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

## Current status

 We have A functioning return, apparently we set it to just a text block, 
 Moving onto the function of loading the projects contents. 

We want: 
- listed projects from file (we've done this in react study app, an old portfolio project, and simliar )
- ability to fliter projects without losing data (also have done before)
- ability to move to next group and last group (1, 2, 3 -> 2, 3, 4/ -1, 1, 2)

current step, list projects as a whole. Done (kinda, it selects one, but make sure we can adjust that before moving on.)



**7/2/2025**

