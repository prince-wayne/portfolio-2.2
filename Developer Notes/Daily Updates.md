# Daily Updates

## [YYYY-MM-DD]
- What I worked on
- Problems faced
- Solutions/Resources
- Next steps

---

### 2025-06-18 (Tusday Night)

#### What I worked on
    This was day one, I needed to see if the code would function, why it wasn't, and what my opitons were. 

#### Problems Fixed
    None, not directly, we need to transfer our files from the original to see if it boots (opens and runs)

#### Solutions
    Transfer or Rebuild, our files should work in theory if they're moved to this version. 
#### Next Steps
   -  to repeat ourselves one more time. Transfer or rebuild. One by one to find where our project loses support, as in indivual compondents. 
   - Attempt to remove the unsupported files to see if we can get it to run.


### 2025-06-20 (Friday Night)

- What I worked on
    transfered main files, Home page is commmented out, we just need to correctly connect everything. file paths and correct minor bugs like Line 51:5: "Expected an assignment or function call and instead saw an expression" pd.jsx.

- Problems faced
    file paths mainly, easy fix. slight bugs, too late in the night for me to fix right now.
- Solutions/Resources
    Me and old files
- Next steps
    Fix bug in the project display (pd.jsx), or comment it out  completely. Continue to build the hone page. 

### 20205-06-27

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

## Week 31 (8/3/2025) Sunday 

### 2025-08-02 (Saturday) 

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

handle first dot logic (0 <= x ! 0 <- x)
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
neat things up some.then the filling in the icons and making things nice again. 


**We're back boys** 

unrelated but definetly worth mention, 6:1:4 is pretty good for coffee without favor (carmel/mocha)

**starting back up**

commenting out stlyes (in case style breaks our component visually during moval to sheet)  <!-- done, only change was the blue background on the frontend skills group icon section -->

applying final structure <!-- done, we have one that actively works as intended with placeholders, no polish (for later stages of development)-->

filling in icons <!-- done -->

^ **ran into issue** instead of things just working textbook style, our pathfinding doesn't see anything anywhere in any predictable manner. **our incomplete solution** &rarrw; [Installing module that allows the same allias as vite](https://www.npmjs.com/package/module-alias)

**starting break @ 1AM** <!-- don't judge me I'm used to a nightshift "day" job -->
**Having lunch @ 2AM** <!-- We did chores, and reheated a meal, decent break vibes -->
**Starting back up? @2:30 AM** <!-- attempting to began again. not unwillfully but the "should I" is creeping in -->

attempting to add [CRACO](https://github.com/dilanx/craco), the other one wasn't a true solution, it would've done the same ironically. For future me and those wondering, both the current environment(raw create react app - cra) and the node module linked before can only do this within the src folder as it needs to be compiled/bundled for intented usage and the public / external files are only copy and pasted meaning the bundler (as is) can't "see" the path we're trying to shorthand / clean. 

I would like to call bullshit, pardon my french, public folder doesn't exist post bundle, we forgot that. 

But at the least we have a new tool to use for larger projects where this mistake could pay off. 

**the next issue** we didn't save the group icons in the right color, go back and get the sever, display, and toolbox in #121212 I believe. 

**fixed** 

adding icon level style (the colored dots) <!-- close, we just need to evaluate our skill levels  --> 
Just the colors, it already works as intented aside form color scale.

This is basically complete, literally just changing colors;



adding hover affect <!-- todo  -->



issues in case of miss

-) node.js icon doesn't fit well due to dark on dark. &rarr; replace with a white text node.js icon <!-- fixed -->
-) due to adjustments and forgetfullness (the headers) we have three light colors with to little difference to work together, &rarr; change the color(header), group icon and background (skill group), to be the group icon color. rbga (white, 0.1) <!-- acceptably fixed -->

remaining tasks from earlier:

-) level evaluation, where would peers place you. ✅
-) hover affect, just a basic tooltip text showing where I am on the skill / tool. things like my usage or understanding ✅  
-) adding the gmail icon for emails 🗑️

#### Things to finsh the home page,

-) our current component 
-) hero image plus overlay box (only interactive buttons, not like our other ones)
-) introduction section (header, img, paragraph)
-) contact handler conpontent - header, img, paragraph, btn (opens overlay, which is our interactive handler)


## Week 42 

### 2025-10-13 (Monday) & 10-14 (Tuesday)

###### Notes section 1 

as we get in here, we might not do much coding, but we will be reviewing and planning. To start, we will have a new system to keep track of tasks, we will mark the files with to dos, then call them complete once finished. 
In short, our tack system will require us to build a rough file with placeholder code, then tack places where things will go, and call a file complete once those are removed. I think this will help with quick view of what we need within files for when we come back.

**Tasks** <!-- active task will be mared todo -->
<!-- For copy and paste  -->
✅  
- Builidng a external data source, why? because for scale, icons/skill are shared and if we wanted to change them in x, we'd have to follow with y and z. ✅
- Gauging our level in our perspective skills, ✅

- Adding the gmail Icon to our socials 🗑️
- Hover effects / tooltip ✅  
- Build a data file similar to our `projects.json` to load our icons in so we can share them and allow easiler edits / scale. ✅

**Home page tasks**

- Hero section, image and overlay
- Introduction, no image
- contact handler, 

**For us later,**

Do those from bottom to top, then worry about building our progress tracker; I am happy with the ammount we've done considering how little it feels like we've worked on it. But, we should finish soon if we can provide a consisent effort instead of a few pushes like before.

**Acknowledging Actions within first two hours of work**

We have been looking at and slightly coding a tool to help us give more consistent notes, we will be back shortly and this tool is something that could help future coworkers with reading my notes through means of automated structures. 

###### Non important to repo

This system would take my regular notes and convert them into a template structure (of my design) to help others view quickly and follow smoothly, in a way more optimized for others. 

__At a glace

- We continue our style of structed notes, 
- bash checks headers, compares diff, then sends the file with listed difference to an Ai call,
- Ai reads and corrects typos, summarizes conent, places into a structured template i.e "Summary, What was worked on, files involved, issues we faced, how we solved them/attempted to, etc." 
- bash recieves Ai response, appends to file. 
- bash then runs git commit, commit + push, and other tags. 

there will be layers to prevent double appending the same note, and flags(bash) + tags(notes) to allow a resync. 

We've externaled enough back to business

###### Notes section 2

-0 added the json file and successfully loaded the data into a usable format. 
-1 task at hand (tah) convert usage of SKILLGROUPS obj and GROUP_IMAGES obj
-2 Used emotes to help visuall separate logs, though unprofressional faster than additional code, line 1 still in progress.
-1.1
    Data mount conditional render ✅ 
    Object used instead ✅
    Data (hard) removed
-x &rarr; y, 
    build hover affect/tooptip
    Skill ratings based on AI evaluation benchmarked against industry peers (~1,000 developer dataset)
    Decided not to use gmail because we have a current contact box (in process)


###### Review results

**Qualifications**

-) Skills are displayed dymanically     <!-- Passed ✅ -->
-) dots response to lv changes (1-5)    <!-- Passed ✅ -->
-) tooltips appear on hover             <!-- Passed ✅ -->


*Style comes later* we focus on structure and function within this phase. 

###### Last hour of the day

**Summary:** We are going to do as many little tasks as possible, to complete the home page, starting with images. did a little clean up, now downloading images. 

We downloaded the images but because they're figma editted images we got the editted versions instead of raw files, meaning we wouldn't be able to adjust them past what we had. 

While things went fine, we still have that pathing issue. in this case, we couldn't load our hero section background in `home page.css`, we will make one more attempt, but if not, here are the next tasks to focus on in next sesson;

_Emotes for completion & general file smybols:
❌🗑️✅🟥🟩

- Hero section, image and overlay
- Introduction, no image
- contact handler & pop up component, 

once those are complete, likely within next session; we will have four components to complete before this becomes, "place here, style there, edit here" 

no idea how many hours we spent on this but we'll use this file plus the old note files to estimate a range (more of a personal reminder for deadline estimation datasheet)