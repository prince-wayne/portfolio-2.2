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