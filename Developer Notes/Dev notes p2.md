# Daily Updates 2/Dev Notes p2

## Summary, 

we were pulled away for nearly a year, for anyone following, I apologize. From memory, we faced a contact handler issue and were starting the page linking component, inital thoughts are, the API is disconnected and I need to review and renew it somehow. 

## 2026

We should be a lot farther but life happens. This year goals are something we will come back to after this session. 

## Week 22, 5-24

### Saturday

What we're working on, 
contact handler not working? gmail issue, we fixed it, non code related, no reason to update code aside from notes and new service id. 

**Hamburger Menu,**
It should've worked before we left, it might've at first, but I think it was a version issue which once we push this code we will merge and switch to have a view of what's going on. 

Shouldn't be any merge conflicts. ... Shouldn't.
Success, much time consumed, next time perform from terminal. 

Issue: link was supposed to be Link and version mismatch with React and React-dom

**Hammy completes and stays** 

it links to the next page, but doesn't remove itself. Likely due to the overlay coponent group. 

Somehow managed to keep it on the page... possible the closeOverlay() isn't passing through. 

#### End of day

We fixed the contact issue and hamburger isse our next steps will be to review page checking for bugs and issues, note the style of the overlay not being polsihed (pre productino phase), and decide what page to build out next. 


## Week 23, 5-31

### Last week

we fixed an issue we was fighting for seemingly have a week, 24 hours worth of effort for something we fixed in 1.5 hours... gotta love it
Now, we are unsure of next step and after we review the running site, we will go from there. (current session)

### Today

As mentioned, checking functionality, fixing anything wrong (starting with the overlay wrapper, wrapping hamburger, showing in home page.)

### Issues and solutions

#### Organization

I - mentioned in improvements, notes are very messy, folder structure is misleading, and some files aren't being used as intended. 
S - update files, move unused notes, update readme <!-- todo -->

#### Hamburger issues/solution

I - can't visually see anything falling, I'm starting to fix the **hamburger menu** showing a btn on top the home page (and everyother page), 
S - thinking I will remove it from the home page, and put it in the index since it needs to be there to act as the navigation. Css issue just move and clasify the bar as the name 
F - Replaced index's overlay values with home page's value, removed from home. 

I - displays over everything but hides under the homepage hero section/pic
S - Likely z-index issue. -> no current index on home page
F - z index on `Overlay` solved the issue. 

#### Next feature, Desktop nav bar. 

Should I give it it's own branch? maybe, will I, no, it's a navigation exactly like our hammy, and we will likely need to work with them together. 

We will likely be renaming the branch to reflect that hamburger and nav bar are within the same group. Plus, the nav bar should be relatively easily...

##### A weird and irriating issue

we fixed it but for future reference, overlay is either struggling when used with multiple children or the simple {""} that was in it casued it to break internally for a moment. 


### End of day

- reviewed notes, mentioned issue, need to organize what's going in terms of what each note is and routinely update notes like `Tasks.md`
- fixed slight hamburger issues, operationally should be fine. 
- wrote a function to switch navigation components, `hamburger menu` and `Nav bar` in `navigationSelector()` index.js. 
- build Nav bar, functionally fine, we want to do the styles, likely going to move on and come back. by starting the projects page or about page. 


