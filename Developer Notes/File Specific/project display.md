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

### Week x - z

#### **7/2/2025 (12am+)**

We have A functioning return, apparently we set it to just a text block,
Moving onto the function of loading the projects contents.

We want:

- listed projects from file (we've done this in react study app, an old portfolio project, and simliar )
- ability to fliter projects without losing data (also have done before)
- ability to move to next group and last group (1, 2, 3 -> 2, 3, 4/ -1, 1, 2)

current step, list projects as a whole. Done (kinda, it selects one, but make sure we can adjust that before moving on.)

#### **7/2/2025 day**

Functioning program, our handle btn click is our issue. It's reading length from a null property. shouldn't be hard to fix.

btn looks fixed with the load.

btn is function, next step: maybe try using [1, 2, 3] as selectors of the projects we want.

#### **7/3/2025**

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

#### **7/4/25**

json file changed, we initialy used section, we converted accidentally, now were using `sections` to filiter them.

attempting to handle that group size task we had, bs hour call at work today...

Short term gain, or long term wealth.

change group to selections and adjust for the filters to include array logic. if filter tag within array logic is true, hard to speak and think right now. but hopefully future you already knows what we're looking for

#### **7/9/25**

Going to the range was amazing, I'm happy asl. Remember to ask how many points we have.

current thought: let's see how fast and accurate we could get our multi card section running. (adjustable based on screen size <- accepts card count into function.)

trying to use a map like eariler but per caed

steops,

- convert the selection into a selection of groups
- map through the array that groups them,
- display each card within list

function(size) = {
// selection defaults to 0;
// we need the first one to get 0 and still move
if (selection > 0) {
list = [0, 1, 2]
} else {
list = [selection * 1, selection * 2, selection * 3]
}

    **button next**
    {
        selection++ / selection--
    }

In theory,
[0, 1, 2] => [1, 2, 3] => [2, 4, 6] // that's broken still.

We want
[0, 1, 2] => [3, 4, 5] => [6, 7, 8] // that's broken still.
[selection * (base - 1), seltion (base + 1), selection + (base + 2)] => []

wrote on paper, a clasic

let current = .current// (the data)
cards = [Selection * size, Selection * size + 1, Selection * Size + 2];

We now decide if where the logic goes,

- withing the return or withing the code (do we a use a function to handle the group of cards in relation to the inputed size, or do we place the code within the return statement)

}

#### 7/11/2025

We haven't worked directly on the code but have writen how we should do it on a piece of paper, which we should put into this doc once we have the time.

### Week 29

#### 7/14/25

we might've lost that piece of paper; going from memory now.

thankful to our notes we've recovered them;

Weird thing going, likely giving list an undefined project

wrapping up, we're stuck with three and it removes them instead of roting them at the end

our solution will be to give map number sizes, and place the number of list to the number of .current

list.map()

{values} = .current[ele]
if .current !ele return or use the reminder function to loop the array / place the list value at the front instead;

#### 7/15/25

Good news plus bad news, we have the list semi working, it does loop but we only see three, which are removed one by one before emtpy followed by a reset.

Likely due to the numbering of selction within the list, might be because we are going in the wrong direction

when we're back,

- change list to be index numbers instead of objects
- change map to select the number of .current;
- use % to get the end of loop method and possibly remove the reset;

#### 7/17/25 (past 12am making it so)

Thought about it, it makes more sense to keep as is and load the objects directly

formula should be
`[(selection * size), (selection * size) + 1....]`

or with the for loop

list[i] = (selection \* size) + i;

**Good news** it was the placement that was causeing the issue, because we had it in an `useEffect()` block it was behaving stange,

**Next** we should try to make it loop to the start of the .current array instead of showing empty, a reset wouldn't work becuase any odd number would cause the array to cut itself off.

-> quick typing to think (we are doing this after a 12 hour shift forgive my mess please)

    size = 3,

**Completed tasks**, with the exception of the fliter, our display is functioning correctly.

Once the filter is done, we should be able to move on.
We completely forgot to write the test frist but the functionality should be correct and pass all the test we would have writen anyways;
-> does next bring the next? yes;
-> does back btn load the last? yes;
-> does it correctly handle empy cards? yes;
-> does it correctly fill in missing data? yes;
-> does it handle moving past the boundries of the array (data array)? yes;
-> **Next tests** try different screen sizes and max the amount of cards that can appear;

##### For next seesion

Work on getting that filter working, so we can exclude test data and things like that.

Test different sizes and set the max cards to like 5

\*\*We're so close to this being done; just continue multiple short sessions and down time sessions (we work 60 hours a week at our day job, don't judge me)

**uncovered error/bug** selection doesn't work when negative. using absolute vales should work

if select < 0 abs(value)

### Week 30

**summary of last week**

We worked in between shifts; a lot of shattered focus but we managed to stay within our project display which seems functional besides a few test we still should run; Fliter isn't functioning property, gave it no attention due to other issues; we sure ensure that the screen size correctly gives our cards;

Hopefully we can move on to the next compondent, I don't see us spending a week on these minor issues;

#### 7/20/2025 (Sunday)

first target: Fliter;
Saving current process before moving to protect the current version.

Added branches for clafity
Dev - for all dev work
Project display - specific to project display and it's functionality

Filter - now working; but the looping feels off, we're testing it now; we want it to display a constant number of cards;

Our to dos)

dots don't align wit selection (expected due to change)
cards don't show three ->
not a direct bad thing, but it would look and feel better if they did consisently, could be a range thing, pull a number back one or push it ahead one

our three cards -> with our return function we exit when no cards appears; we would have to write a dymanic way to get a reference number.

option one: sending the `value` all the way down. [ele, value]
option two: how about a secondary hashmap? .set .has =>

well turned out to be an indexing issue, we would always get an undeifined at the end because it would loop an index past where it would end

Thank god we didn't code uneccesary blocks

#### 7/23/2025 (Wednesday)

Paydays always feel good don't they?

Let's get the dots and test up and walking (running doesn't make sense, why's it running?)

Okay dot's are functional, but since our projects are limited the functionality seems off, could be an issue but we could reduce the dots, two might work better for now. However, our dots are perfect for mobile (phone) size since we would only load card at a time; also weird behavior, dots[0] should be active on first load, it isn't

Also, if we wanted scalablity we could min dots to two, max to five or something reasonable, then use an useEffect to load them. keeping or logic by changing to be divisable by dots. Just use math. What coach say, "just get up" (inside joke)

options for picking up after break:

- move onto next compondent
- hange dots to be dymanic (length \* screen size chages how many dots we have)
- Write Tests, just updating and ensuring we have coverage from our old ones,

**Good news, Bad news?**

we are staying and handling our dot problem. we have function, but due to short list size (datalength) and screen sizing, we have a visually unnatural dot indicator element, where we go from dot: 1, 4, 2, 1, 3; instead of 1, 2, 3, 4. also weird load behavior, instead of dot 1 being active on load, 4 is, then it gets into correct slighing.

long break coming up but our steps to fix this is:

on mount
clicks = length / size + (length % size > 0 ? 1 : 0);

logic to limit dots to x (undecided)

for (clicks) {
dots classes  
}

dot active list updated to dots we have,
divisable by current dots, ie current is for 4, dots are slipt into quarters.

^ will require a formula to dymanically place range of dots and clicks

there could be a save the logic so the math doesn't have to repeat.

#### 7/26/2025 (Saturday)

dots; card size; tests

"Smart dots"

1. clicks = cards on screen / data length; only changes on resize
2. dots logic built through for loop limited to five based on clicks
3. dots render with map and active class added in on true index

What's changing:

useEffect() that only rerenders on selection change; this contains the logic.
^ we might be able to get rid of this actually, since the array logic is taking over. We should be able to

the actual render of the dots in our final return value for the compondent
this will become a mapped value not a static or fixed vale

After Math or something

we fixed the resizing issue, introduced five more (jokingly)

we can now resize the screen and get the cards to change as we do (3 cards become 5, 5 cards become 1, 1 becomes 5, etc) while limiting it to five cards max.

**weird issue**

clicks doesn't change like size does, but size is a state and clicks are a ref, possible that we'd need to convert it but we shouldn't need to.

**Next Steps**

1. Fix clicks reassignments
2. add dot logic array
3. render dots with logic array .map
4. write the tests of doom.

### Week 31 (8/2/2025)

#### 2025-08-02 (Saturday)

It's saturday but we are too close to week 31 to call it anything else.

Blurry memory to be honest, but we are trying to pick up on the dot rendering, and it's likely done already.

A solution I don't think I've tried. and I forgot the solution due to movement... Loving it.

nice I remembered, if we have the resize logic working but the clicks aren't reassigning the we should try combining them in terms of placement, on resize recalculate the clicks.

didn't work, we should try it within the global state (component level) to casue a recal on rerender.

that worked, we now have a changing click count.

**moving on to dot render loop & logic**

remember to make the min amount of cards 1, and the min screen size enough for that, window size I mean.

idea:

loops for how many clicks it'd take, builds/renders dots and dot logic array.

for (let i = 0; i < clicks, i++) { <br>
\_\_\_build arr<br>
}

arr.map((ele, index) => { <br>
if (ele) { <br>
**\_< dot class active> <br>
else {<br>
\_\_** `dot inactive`
<br>
}
}<br>
})

so, in those two steps we will build an array of conditions which will in turn build the dots with either an active state or an inactive one through class naming.

our formula for the logic

```
let a = 0;
for (let i = 0; i < dotcount; i++) {
    arr[i] = a < value &&  value <= clicks * (i/dotcount)
    // 0 < x <= 10 * (1/5)
    // 10 * (1/5) < x <= 10 * (2/5)
    // (2/5) < x <= 3/5
    // (3/5) 4/5
    // 4/5 5/5
}

```

**note from the day after** It's likely that we didn't do much on the project, but it did see a few changes like: card styles (just inproving the user interactive testing flow), slight reorganization of const and let values, and fixing the click reasignment which now reasigns every after every resize caused rerender.

**Apologies** suffering from a lack of a proper workspace in another city.

#### 2025-08-09 (Saturday)

**Before we Start**

Ironic that we're dealing with this twice, End of week but basically the start of another. We aren't going to reclasify today as a part of the following week like last saturday. but our main task is to figure out how our dot logic will work.

okay we might have something that could work with adjustment

const dots = clicks > 5 ? 5 : clicks; 
let DLAMinValue = 0;
for (let i = 0; i < dots; i++) {
    dotLogicArray[i] = (DLAMinValue < value) && (value <= clicks * ((i + 1)/dots))
    DLAMinValue = clicks * (i/dots);
}

should build the array logic, which will later be passed into the render logic of basically, if ele true render active dot, else, render inactive. 

**Attempt to apply this/As we work ts** 

needs to adjust logic based on selection, as we move through the projects. 

initally it's undefined 

`project display.jsx:96 Value: 0, Clicks: undefined, Dots: undefined`

once pressed btn we get

`project display.jsx:91 DLMAMinValue: 0` doesn't change as we roll through, useState or red migh be the solution
`project display.jsx:91 DLMAMinValue: NaN` ^
`project display.jsx:96 Value: 1, Clicks: 2, Dots: 2` as expected


okay well we're close just a few things we can't see well right now, but I just realized clicks * (i/dots) might not be the best way becasue we will be have something that never excapes a 0-1 range (at least in laptop view) 

this 

2 * (1/2) = 1, 
2 * (2/2) = 2

oh man this is weird. 

one moment

we could try a different apporch where we track our clicks instead of the value, 

disavatage: on resize we will have to adjust the dots to reflect the change, 

... I hate to inform you, but some how, it completely breaks on mobile. Good job weirdos. (no one else is on this project, if you've made it this far, know that this is me joking with myself along any other line you might've read);

okay found out why, if the clicks > dots, we don't get a reducer but a multiplier. 
(<0 multiplication, acts as a reducer).


okay a quick break. 

raw attempt, failed but progress, 

for mobile we should probably flip the fraction, when we would have a <0 *, 
and to make the reducer we wanted work, we need to apply it to a higher number, unsure how, but should be very possible. 

also, this is based on the mid value of current row, if we based it off clicks compared to total clicks, it might be easier to code and maintain. 

our break might be a four hour nap, who knows. 