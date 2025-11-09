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

adding hover affect 

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

**Tasks** <!-- active task will be mared to-do -->
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


### 2025-10-15 (Wednesday)

Tasks are above, I don't see the value in retyping them with/without copy & paste, we're startign at the top, working our way down, should be download, plug, and play, or just plug and play should we decide those images will work for our goals. 

- pathing issue, for some reason it can't be accessed through the css file within src, leaves me two options, 
one) jsx import, allows the image to be bundled and used instead of copy, pasted, then attempted to be found, however, it makes our styling more complex at face value because others would have to read notes or find the solution in place - import means the style goes in line which has a higer value than other styles should it need to be adjusted. 
two) I move style sheets to public, wins: simple and intutiative, losses: the need to restruce the system in place (not much just import adjustments), if both styles and images are in public, either are moved and could be referenced relatively / easily, hard to see many cons in this besides adjustment. 

verdict: going with option two, it preserves scalability the best and removes the need to go into files to fix visual issues (src/a/b/c/d/e/f/g etc.) as project grows and becomes bigger than expected. (growth is nice until it hits non optimized code, then it's work 😭)

-- The new system, large styles remain in public, these would currently be page styles, component styles remain within component folder, these are compondent specific. 

issue: it doesn't seem you can put styles outside of src and import them. so that system just failed, but, what we can do is bring the images to assets within the src and import from them without forcing in line styles. 

- Fixed. 
we were doing rough styles, a thing we want in this hero section - `home.jsx`, is a fade out visul not an animation but a element that blends the bottom edge of the image with the background, to save the trouble of forgetting how we did it in the design &rarrw; fade from black to full transparent black bottom to top. then none of the image colors impact the smoothness of the transition and there's no longer a rough edge, this would be done on the `hero-section__background` class not a secondary element.

We ended up just handling it from there, we now are actively working in the hero section. 

concurrent tasks, 
a, intro image isn't loading from assest, why: path finding. it's in src as well so it could be an issue from that. **fixed** &rarr; dumb thing with public / src conflicts. *remeber to see them as static/public & dymanic/src*  - later move all non hero section/background attached Images back to images !Assets.

b, catty btns on overlay, this transfers into tohe two other most complex / unfamilar methods, router and overlays, then we have the contact handler it's self. that said, last time I looked at each they didn't seem that hard. **third**

c, occasional miss on fill, our hero section occasionally leaves a gap between the background image and the wall **Fixed** Html default rules, sometimes overuled somethings not. 

**4-hour mark**

getting back in, moved images back to images (ones we moved eariler being put back in place) aside from what we needed in assets, hero sections/background images.

so, the gap we were seeing in dev tools could've just been the scroll bar acting weird and being hidden without being position: absolute, 

- Contact compontent. 

here's where we learn on our feet, we have an overlay, and we need to figure out how we close it. from my inital attempt, I can see we used isOpen to conditionally render it based on state. We did a couple things now the close btn works, but we want it to close on send, and on losing focus (pressed outside the box)

there is also the issue of the contact being closed and our event listener responding which wouldn't throw an error if it was working but since it's not it's throwing one currently, also if we didn't fix this, we would have pointless triggers and waste of resources.

currently not understanding why onClose() isn't working anywhere besides contacr.jsx. to my knowledge, context works by passing props down without the need for prop drilling (where you continues put props as props of children) 

END OF DAY Laptop is getting dangerous hot. we will be returning tomorrow to pick up where we left. 

### 2025-10-18 (Friday/Saturday)

#### Summary

We should have a working inline skills display with a tooltip on hover, meaning we need to move on to next component, like we did, and update main with last comonent, which we didn't. nothing big change wise to current component, just trouble shooting and review, some code changes, some functional, like the on close method - which I now relize could be a confusing with an event listener and a past thought. 

We will be pushing/rebasing to the main branch, then checking out a new one, to my knowledge it would be clasified as a `Feature/name` though I feel like it should be writen as a main component instead. 

that said, we will be starting now.

#### Review notes

What we need, 
- isolation of event listener `escape`; remove?
- The reason `onClose` doesn't work currently everywhere (works in some spots, is scope possible here?)
- email send to ya boi. third parties are probably the fastest rough version. If we chose to make a custom solution, we would burn effort with little gain. More of a "if we have time" improvement than a must have for functionality.

#### Working through 

##### kobe (isolation)

-0 isOpen was a thought, I believe I tried and it didn't work. Attempting again if so.
-1 as I looked at that I noticed our submit btn doesn't call onClose() but still onClose runs for fun. (it just runs, no buns) This may be due to line 16 - contact.jsx `handleSubmitContact()` where we see await, reset, and close. 
-2 comfirmed reason, it closes due to onClose() but, not as intended, it runs onClose due as a development aid. there's no connected api to handle the contact info so catch error always runs error code; however, that means our onClose reaches that scope, good sign 
-3 Quick structure view, 
Overlay, Contact form (within file >) - contact.jsx (mention of file to help), 

-4 closer to isolation, but method gives false isOpens
-5 fixed, kobes on the court (iso is active)

- onClose variation in scope, 
in short, it should just work everywhere due to useContext, but it doesn't. as I looked I couldn't find a definition for it, but it looks like it was defined in `line 39` inline useing `React.cloneElement onClose: closeOverlay`. could be the source of problem, 
found something useful, tiredness is kicking in, future me might figure it out. [MDN onClose eventlister](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close_event)

looks like .close()  

I might've found a different way to do this entirely, though the way it's done currently could be 60% finsihed. A comparision may be needed.

Considering React's actual docs show ReactDOM.createPortal(<></>) to do exactly what we're trying, it's probably the best practice or a better one. [link to refernce](https://react.dev/reference/react-dom/createPortal), man, this could've been over so long ago. also this could've been useful for our tooltip but css hover was acceptable I think, it's not complex or logic heavy. 

Also the docs showed a very simlair version to ours, don't be disapointed if it functions the same. (errors and all.)

walking though the example code once we're back. 

Portal.jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  // if event listener && is open/showModal, or just show Model, then set to false. 
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}

context: 
export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

so, basically, we would be doing the same thing but instead of the modal, as they call it, being within the parent, it will push it to the same level (I could be wrong on this) and allow the same toggling if not smoother. 

so, onClose passes in the state handler causing the compondent to demount, or remove it's self from the active render states / conditionals. 

Honestly, I think I might mess around with mines, I feel like I'm going to run into the same issues I'm already having considering that I'm running basically the same system but involving useContext.

... Frusration is real, rookie mistake, onClose / type error, all fixed becasue overlay used onclose, even though it defined it within a pass to child. 
To be fair, this entire page (home) was done when I couldn't run npm start or live test my coding and I had much less knowledge of react back then. 

seems lights helpped.

##### Out of focus event. <!-- done --> 

onclose works now, but add event of mouse not being in conponent (contact box),done within overlay mouse down event, adding listener remover. 
it's recongizing all clicks, could be class name issue. 
pretty much is, just not as I said it, it's a selector issue where the selector doesn't see the class becasue we're selecting children. 
so, we need to ensure the mouse isn't over the overlay instead of trying to select the overlay for comparsion.
pretty sure theres a children target so we should look for that. like target.children 

no children to select, we may just add a class to all of them (the children).

the best solution isn't currently visible but adding a class to each of those components (overlay + overlay childrem) looks like an acceptable path or at least a tenporary solution. Looking it up didn't bring much help but at this point we're better off finishing a functional item than a perfect item. 

`overlay__child` will be used for this. Works, with some considerations, could be due to no styles but, in the clickable background space we trigger our closeoverlay function. So, for future use, style the componted to center on the document (create portal would've made that easiler) I'm thinking of simplying styling the overlay then filling out how the contact form should be within it. since the overlay is closest to body, 
also we moved it out of the contact section but if we move it back in to the contact section - which we probably should, using position: fixed could remove our problem of structure relative to the body. 

Seems to be working now, can come back later, liekly just missed the actual content when I was testing earlier


##### Reset Form not defined @ contact.jsx line 25. <!-- done -->
(comment lines included) 

solution, remove entirely, just a helper function/wrapper, nothing changes if the consumer resets within itself (it stull updates context) **worked**

##### Email operation handler. 

Email us. We'll use a third party, so all we need is to connect the api, this will likely involve an evil key.


####  End of collective session;

we have almost a fully functional contact component and overlay - which will be usesd later, all we really need is the backend or api route, I dealing with something making it difficult to focus on learning and applying so I'd leave this for my future self. 

##### Tasks for following session

1. Contact component

- node mailer + express to handle sending me the form 
- styling to be a centered box with a close btn. 

2. Hamburber menu (mobile only) + Navbar overlay.

This should be pretty simlair, it's more of figuring out things like checking for mobile vs desktop, and we could really just use css to hide our hamburger btn and show our nav bar within the screen size ranges.

## Week 44 (2025-10-26)

### 2025-10-30 (Thursday) 

#### Summary

We started work last week monday, didn't have a place or time to work on this. We are now attempting a new space in the library with hopes of success. **the important part** we will be relying on the last notes to continue as a week break does blur the lines. I hope to accomplish a finished contact feature within this first half of this sesson and the hamburger menu in the next (moblie only)

#### A new Schedule

Sunday through Wednesday/Thursday, depending on overtime in dayjob, we won't touch this. But, we will deciate five hours on two of our three off days for a total of ten hours per week. This means Thursday and Friday or Friday and Saturday will be our software work days. 

#### An idea I had thanks to work

Our tooltips could be better, right now they're fine, they describe the level of each subject pretty cleanly they just lack a true in place description. So, thanks to a work site showing a card flip over to show a description, we decided the site could use that, now it might not be fully worth the effort but I could design it in Figma and have it peer reviewed. 

#### Starting on contact Styles 

(just to have it displayed in a rough draft of what we envisioned.) 

##### Attempt #1 / seession 1 & 2
likely best solution is just giving it a fixed positon centered on the body, current structure might discourage this but a simply calc should adjust the position well enough. 

positioning worked and we have the blur ready ish, the only issues are:
our message icon not being centered, (flex - colum fix update: converted to grid)
the boxes not lining up, doesn't matter much honestly, but converting to grid will give them better lines. decide if it's worth it or if mostly lined up makes a difference (done)
and the blur box not being a complete fill (fixed)

It's pretty good as is but it's suggested that the elements align with each other so, we will be attempting a flex solution with no structure change if it doesnt go fast then we will convert to grid. (grid isn't a hard conversion. I just don't want to do it for no reason.)

we built btn--primary and --secondary classes for global use within main.  

we seem to be awaiting the actual handler, but our styles are very fine rough draft.
we could go beyond by using icon btn classes but there's only the ones in project display to do such a thing like that. 

we seem ready to move on, handle emails once were back. we only have a rough hour left. Unless, we, push.


Update: we did not come back, so we will make up for it tomorrow;

### 2025-10-31 (Friday)

#### Summary

We didn't do much but styles yesterday, one of the most relaxing software days I've ever had, but, today we will be attacking the contact handler, and hamburger menu (don't forget to make a new branch once we're there)

We will be going with the emailJS path, said to be easy, fast, and okay for low traffic expectations. 

looks pretty plug and play but we always hit walls with those so we should be care

okay, so it's now working, we have a functional submit btn and we do get the whole message. 
Remember that we are using EmailJS and it's not a direct in email view, we have to go through the actual service to see sometimes. I lied, we get them directly to our inbox. 

before we call it good we need a different icon for the name, a person would be best and the color of the text should be white; icon - done. color done.

we also got rid of that highlight on focus. <!-- We did. -->

moving on? yes, but we are adding a compondent to acknowledge it's state and inform those under the impression that it's complete. <!-- We did -->

changed our mind, idea moved to the later this will just be a hard coded thing to remove on completion <!-- As mentioned above, It's a simple true flase statment. -->

weird style issue, somehow padding our sections creates a gap like the begin of home hero image.

the issue was the hero section getting/had padding and changed it's size making the page misinterpet the content size casuing a pushed in visual. 

solution: removing the padding with .hero-section.

images are small on desktop, not a current issue, just a reminder to fix later <!-- todo -->

## Week 46

### Start of week

We have made some adjustments and completed some work I believe, but I can't comfirm it. We just started work three weeks ago, and we're building the consistency over the weekends, however, this last one we needed to leave the city 😭. 

Our goals for this week, 
<p style="{color: red; font-size: 2px;}">
We'd later put images within this to help visualize what we're thinking of.
</p>

1. build the hamburger menu, (empty page links for now - physical pages with nothing but a header content)
2. Finish `project display.jsx`, nothing major; just adding in the images and building the style to restrict the card sections from changing (some cards longer, others shorter)
3. decide if we want to start builidng the other pages, or 
build the responsive functions (media, card size, etc). 
