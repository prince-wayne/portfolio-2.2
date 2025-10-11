# Daily Updates

## [YYYY-MM-DD]
- What I worked on
- Problems faced
- Solutions/Resources
- Next steps

---

## 2025-06-18 (Tusday Night)

### What I worked on
    This was day one, I needed to see if the code would function, why it wasn't, and what my opitons were. 

### Problems Fixed
    None, not directly, we need to transfer our files from the original to see if it boots (opens and runs)

### Solutions
    Transfer or Rebuild, our files should work in theory if they're moved to this version. 
### Next Steps
   -  to repeat ourselves one more time. Transfer or rebuild. One by one to find where our project loses support, as in indivual compondents. 
   - Attempt to remove the unsupported files to see if we can get it to run.


## 2025-06-20 (Friday Night)

- What I worked on
    transfered main files, Home page is commmented out, we just need to correctly connect everything. file paths and correct minor bugs like Line 51:5: "Expected an assignment or function call and instead saw an expression" pd.jsx.

- Problems faced
    file paths mainly, easy fix. slight bugs, too late in the night for me to fix right now.
- Solutions/Resources
    Me and old files
- Next steps
    Fix bug in the project display (pd.jsx), or comment it out  completely. Continue to build the hone page. 

## 20205-06-27

- What I worked on


- Problems faced
- Solutions/Resources
- Next steps

## Week 30 

### 2025-07-20

**What I've Done**

Added branches for clafity 
Dev - for all dev work
Project display - specific to project display and it's functionality

worked on project display functionality, mostly ready and running;

**Issues for later**

Styles on home don't seem to be linking through; very strange linked the exact same way as project display which seems to get it;

**Solutions** -> purely within our project display notes

**Next steps** 

1) dots functionallity; just the visual aid we are building for display placement; build test to ensure it works (we will start doing test driven building after this although it would be new.)

2) Next major compondent; either focus on a complex component or just the next on the home page; 

3) Build basic nav bar, we appearently completely left that out; *a quick discription*: it needs both a back ground to block out everything, and a overlay that softens the transition from background of page to the nav bar / header

**Note** We don't want to stay and make this perfect; we want to get the site running then start refactoring and fixing minor bugs, 

### 2025-07-23 (Wednesday)

We updated the logic for dots to realise it wouldn't work with our current count of projects, 5 cards total, size for 1440 laptop 3 cards, 2 clicks to cycle, So four dots with the active state being based on the middle card makes the active dot jump everywhere which might confuse the user. 

our solution for later development (upcoming break) 

clicks const
dot count based on clicks
logic preventing too many dots rendering
updating current logic to match the range of dots (five dots means we divide the range into five) 

*getting closer to a finished component*

we also added in some tags for our projects in our data json file. 

for once we're back: 

Dots as mentioned above
Tests
Next Component

### 2025-07-26 (Saturday)
In case of confusion: We've been in project display.jsx for the past forever, to avoid future WTFs' I'd start noting what files we worked on. 

So, we want three cards on desktop/laptop, appearantly our code gives us 2 on our personal laptop; of course that means **changing our calculation for cards**

but picking up: 

Dots, Test; 

first process, dymanic dots including the logic. 

For deeper notes look into project display dated for today

**Issues for later** 

1) clicks reasignment

Then we can move onto the dot array logic loop, and the dots render function.

### Week 31 (8/3/2025) Sunday 

## 2025-08-02 (Saturday) 

It's saturday but we are too close to week 31 to call it anything else. 

Blurry memory to be honest, but we are trying to pick up on the dot rendering, and it's likely done already. 

## Week 33

### Before we continue

these notes have unoffically become the daily update notes, but we will begin to make an intentional effort to work the daily update file to it's original purpose. 

### 2025-08-16 (Saturday)


#### file -> project display

**What I can remember** 

We are strugling with the formula that builds our dots logic for active status, but we progress slightly, there we didn't get no dots becasue the conditional assignment would assign dots to zero, but now we get false positives where both dots can be true, false, or true and false. *the issue* is that only one should ever be true at a time.

**What I'm seeing**

good so far, reasonable path to visble possible within thought, no dots on first render, which is weird but likely easy to fix. feel like something else in this project had the same issue. 

first render issue, resolved, state is required for objects that require rerenders or renders based on value, because a useRef won't trigger a rerender when updated + useEffect() won't trigger rerenders but runs post render. 

##### Logic array logic issues:

1: mobile stops at dot 2 reguardless
2: incorrect range calculations

2: for some reason, when we compare our middle cards index value to our clicks well get ones that aren't within either range. 

debugging attempt, condition 1 and two logged separately
**issue** our multiplier causes the conditional values to be shewed, for our two click laptop (two clicks to travel complete list), we test all values to be within 0-1 1-2, so when project 4 comes in, we get false values

**haha**, so, our issue was using clicks which changed everytime even though we wasn't comparing it (we was unintentionally), when we wanted a sliding coverage from dot 0 through dot 5* 

**first render**; no true status imeditately, which should have been fixed eariler unless we accidently undid it (crl + z). 

**When we're back from break 30 mins** 

handle first dot logic (0 <= x ! 0 < x)
handle final dot logic, slightly weird, unlocked at, should be working (data length * 5/5 should be datalength)

test some more, pray that everything works, test again, thank God twice

good news, it's functional, bad news, it's functional. 

shouldn't have made that joke. Only correct on laptop, mobile seems to stick the value

Yeah, quick little scare for a little misplacement, assignment for last dot was within the mid dot conditionals

#### What we've done today

1) fixed our logic array to correctly and dymanically map dots and state
2) included edge statements

#### What we need once we're back

1) make resize rerender the dots, there's probably a function or call to directly do that. just lookded, there isn't, figure it out pretty boy

2) ensure complete compondent
3) Write test for compondent
4) move on

### 2025-08-19

#### Files interacted with

- project display.jsx &rarr; complete file unless testing fails
- Icon group & Social Icons &rarr; these work together. 

#### Pre review

Plan to test our `project display.jsx` to ensure completion, then write test to ensure continuous functionallity as we add projects or integrate Docker and APIs. 

likely that we focus on moving on without Docker until we've learned it and got a good understanding. 

#### As we work

dots now rerender during changed states (resized or btn click). 
Debating writing test 

Issues running test, moving on, see if someone can see our issues with this

#### File #2 

a weird 'icon not defined within props' but we don't use icon within the file
Also after slight addjustment we realized we were still on the branch for project display. 

okay a few more changes made outside of branch scope but no much, currently a link issue, merging back to main, then starting our other branch.

Now on the next branch, unsure if we should call it `Feature/Icon-Group but it's a solo project so we should be okay aside from external reviews. 

## Week 35

**Summary** 

We lost our computer, lucky we found it, unknowledgable of where we left off but I remember debating our restart of our `Icon group.jsx`. 

### 2025-08-26 (tuesday)

The day we lost our computer

## Week 36

### 2025-09-04 (Thursday)

debating if we should 
a) rebuild the compondent
b) adjust the compondent to load in the links once they come,
c) build static link compondent (they load in basically hard coded but repeatable/reusable)

## Week 37 

### 2025-09-09 (Tuesday)

we are going to use krita or figma to map out visual how these compondents work together. 

## Week 38 

### 2025-09-19 (Friday)

#### Morning Shift

Files: 
- `project display.jsx` only reference in notes
- All current icon components, moved to an archive like folder. (unmade, check further notes or repo directory if not mentioned here)

We stumbled but hopful our new system of working could make things easier. To refresh and update future me, we basically stopped after finishing our `project display.jsx` file. But, we faced a weird issue that we are in too much of a rush to handle currently, (we could spend more time trying to fix this small issue than we would if we just used mostly static compondents). 

That said, we should work towards indivual reuseable elements and save a "layered" component system for later once we have an actively runing site. 

My first step, drawing the indivual components (visually) in my notebook. Then, we can translate it into code, shouldn't be hard, I'm an artst. (jokingly)

**7:11 AM**

As I hope my tone isn't seen as "unprofessional", I notice I've drawn this before, just with a different goal in mind. So, we either continue goal above, or make a last attempt to fix things neatly without losing too much more time. Best middle ground I can think of is attempting to solve within 30 mins... Don't think it could be solved that fast.

a) review, 15 mins
b) attempt, 30 mins,
c) either we're finished or we move on to originally goal (rewriting) 

reviw notes: 

Structure/Flow - 
    Icon group -> social icons (static with links)
    Icon group -> skill groups (dymanic)
    skill group, gird or in line. 

an untouched issue, we are passing in strings instead of images for our skill groups, although this is more of a placeholder filled component it's worth mention. 

Forgot about my test today, but basically we might be able to fix these issues with an useEffect() and forced rerender. ({}, [hasLoaded]) should allow a State change which rerenders once data is loaded. But, we really don't need the data, just direct prop checking should work just fine. 

before we go: 

We removed/commented out all intentional error throws because seeing what goes on withing our personal errors happening should give us more insight.

**10:50 AM**

My life could be an instagram reel page, if you've made it this far either you're very deciated or very bored, but I'm thankful and pround of your determination. So, we will now attempt to pick up where we were a few hours ago. 

&rarr; direct proping and checking, no rerender after load. 
The one piece is real. (coming back soon... again.)


## Week 40

### 2025-09-29 (Monday)

**Important** 

We more than likely need to go through these notes to one) condense them into a readable and clear format, and two) remove all of the unnecessary lines of chaos.

**Before we start**

Apologies to anyone following my process or reading through these notes, I will try to improve them as we go. So, to start our main focus will be giving our icon groups a raw static compondent instead of the layers we attempted. 

This will be for the moment to get our site complete, and it should be one of few immediate topics for us to revisit post public production (day to market comparsition)

**Before we go**

Not much accomplished, but enough to finish during next session. We make basic static copies of our code which will likely replace the other in the end game with few adjustments. 

not much else done, **new rule** no phone calls during codes unless important, don't get arrested. 

**^ I lied, there was actual work done, it just doesn't look like much due to complexitity of other components**

### 2025-10-01 (Wednesday) 

**Before we start** 

we want to finish the build out of the icon groups and ensure proper linkage. We have two hours, if we finish with enough time we want to follow downward of the home page, we only did project display first because it was the most complex at face value. 

Also we will be starting a naming convention to help us with cleanliness and readablitity. 

There was no work, we had something come up. 

## Week 41 

### 2025-10-10 (Friday)

Today we began a new routine, for whatever reason it's been difficult to sit and start, so we will attempt separating things or having a routine anchor to get us back to working consistently. 

**What we will attempt today**

- Our icon groups

Soical "done" 
skill - in line "in process"
Skill - grid "on deck" (a wrestling term for next)


**skills - inline**

we have this basically done, just missing the icons and using placeholders, be sure to go back and remove things marked with `temp` or simliar. 
We have repeating code, but the trade off between readibilitity and scalabitity are to great for me to rationalize building it that way - code that runs through the entire object instead of the sections one by one. 

Logic - if our backend skills display funny only adjust that part; we don't have to add our headers (literal h2/h3 etc.) into the object value; 

for resizing at scale, we should do a max and just allow the icons to srink, but this isn't worth doing currently, we won't have twenty plus icons here a week past production

instead of using `level: 1, 2, 3` we used `lv-1 -2 -3`

**before we leave** 

all we did was, review, note, map function for icons. pretty straghtforward but double check for bugs laters.

**Once we're back**

build them into there structures and add that hover affect to give slight details of skill level. 
place our headers and wrappers along with our group icons.
neat things up some. 

(this is only meant to be a fifthteen mintue break, stay disipliee)

**...** we didn't leave but we are now, so same level of adjustment, get ready to remove in line styles and add the structure into the other sections (tools & backend) then the filling in the icons and making things nice again. 
