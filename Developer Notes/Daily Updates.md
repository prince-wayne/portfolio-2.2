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

We updated the logic for dots to realise it wouldn't work with our current count of projects, 5 displayed, size for 1440 laptop 3 cards, 2 clicks to cycle, So four dots with the active state being based on the middle card makes the active dot jump everywhere which might confuse the user. 

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