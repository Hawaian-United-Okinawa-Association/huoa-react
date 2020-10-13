# Welcome to the HUOA Dev Team! 

We are a collaborative team of engineers helping out the Hawaii United Okinawa Association organization by building a React site with a headless CMS, built on the Wordpress platform.

## Index
- [Tasks And Teamwork](#tasks-and-teamwork)
  - [Meetings](#meetings)
  - [Chat](#chat)
  - [Tracking Your Tasks](#tracking-your-tasks)
  - [Design](#design)
- [Setup](#setup)
  - [VSCode Settings](#vscode-settings)
  - [Run the Site Locally While Coding](#run-the-site-locally-while-coding)
    - [Setting Your Default Browser for the Project](#setting-your-default-browser-for-the-project)
- [Your Work](#your-work)
  - [Creating Your Feature Branch](#creating-your-feature-branch)
  - [Working With The CSS Linter](#working-with-the-css-linter)
  - [Committing Your Work](#committing-your-work)
  - [Your Work is Ready for a Pull Request](#your-work-is-ready-for-a-pull-request)
  - [After Your Branch Has Been Merged to Main](#after-your-branch-has-been-merged-to-main)
  - [Rebasing](#rebasing)

>If you haven't yet, checkout our [Readme](https://github.com/Hawaian-United-Okinawa-Association/huoa-react/blob/main/README.md) for an overview of the project, and follow the *installation instructions* to install the project dependencies before running the project locally.

# Tasks and Teamwork

## Meetings
- The **dev team meets** up *weekly* to discuss our work on the site, usually on *Tuesdays*. 
- Then we meet up with the project manager and designer on *Wednesdays* to discuss our progress.

If you can't make a meeting one week, make sure that you update both Slack channels for dev & design with your task progress.

## Chat
During the week, we chat on **Slack** in our huoa-dev channel to talk about the project and any progress/roadblocks we may be encountering.

> [Slack](https://slack.com/downloads) is an integral part of our communication system, so download the app to get notifications from the team. If you would like help with configuring the notifications, let us know. You may need to mute some channels, so the **#huoa-dev** and **#huoa-redesign** team channels get notification priority.

## Tracking Your Tasks
Tasks are tracked on our Notion [Development Plan page](https://www.notion.so/082c4debcca24e4ea32a4185c7a7e0ae?v=eef8c0338f794c67921e15c3dce41178), where you will be assigned a ticket to work on. 

Once you're assigned a ticket, make sure your ticket on Notion is assigned to yourself, and when you start to work on it, set the status to *In Progress*.

>It's a good idea to *download* the [Notion app](https://www.notion.so/desktop), if you can, since it's easier to open an app and access your work, than to navigate to the site on your browser. It's available for Mac & Windows. Sorry Linux, this isn't for you.

## Design
We are working with [Figma](https://www.figma.com/downloads/) to preview the designs and mockups of the site. So download the app on your OS, to use as we build the site.

Here is the [Figma Board for HUOA](https://www.figma.com/file/fUItcdy9fKRHPggnncr2zl/HUOA-Team?node-id=6329%3A9240&viewport=-2671%2C926%2C0.420560747385025).
There are many pages so get aquainted with the design systems and various mockup (hi-fi/lo-fi) pages. 

# Setup

It's a good idea to understand what's needed from your task and discuss your approach with the team before digging in and writing a bunch of code.

## VSCode Settings

If you are using VSCode, we use **tab size 2** and **tab width 2**. 

Turn off any prettier formatting for this project, if you use it.

After you clone the repo, and open it in VSCode, you should see a `.vscode` folder in the root of the project, and possibly a `settings.json` file. 

If the settings.json file is not there, create one.

Within that json file, you should add this, and it should configure your settings for the project.

```
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
}
```
> The .vscode folder and settings.json file are not tracked in git, so any changes you make should not be added to a commit.

## Run the Site Locally While Coding
When you're ready to contribute, make sure you are running the site locally with `npm start`, so you can see in real-time how your code is working.

### Setting Your Default Browser for the Project 
If you have a favorite browser that isn't opening when you run `npm start`, know that npm chooses your browser based on your operating system, and not the default browser you have set on your OS.

If you would like to open a different browser, say Firefox on Mac OS, then **create** a `.env.local` file in the root project directory. Within that file, enter this and save it.
```
BROWSER=firefox
```

Now when you run `npm start`, Firefox will open instead of Chrome.

**.env.local** files are not tracked by git, so you don't have to worry about it being included in your commits or to the project.

# Your Work

## Creating your Feature Branch

When you are working on a ticket, it's good to switch to main, and then make your feature branch off of that.

Locally in your repo, change your local branch to `main`, and create a **feature branch** from main that's short & semantic and describes the work you are doing on your ticket. 

Say you are working on a Notion task ticket for a layout, you would name the branch after the layout, and work from your branch.

You would commit your work to your branch following the outline in the next section.

## Working with the CSS Linter
The [StyleLint](https://stylelint.io/) we have running will provide direct feedback and error messages in your browser window. If errors appear, they will need to be fixed before the site becomes previewable again.

For our SCSS methodology we are using bem with syntax being `.block__element--modifier` if you'd like to learn more checkout: http://getbem.com/introduction/

If the errors don't make sense, refer back to the README file and checkout how the *Block Element Modifier* (BEM) styling works. If you still aren't sure what to make of the error messages, ask a teammate on Slack.

## Committing Your Work

> **Please don't commit directly to the main branch.** Undoing commits is time consuming. Make sure when you are working that you *check which branch you are working in locally*.

When committing your work, please use these prefixes:

- create
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)

Say you are working on a feature that is an individual card, you would enter something like this as your commit message:

```
"feat(card large): updated the header"
```

Or you were fixing a bug on the card:
```
"fix(card large): fixed the broken header"
```

## Your Work is Ready for a Pull Request
Now that you've completed your task, and you are ready to open a Pull Request to get your code merged into the main branch.

- Let the team know on Slack that you are opening a pull request.
- Push up your code to your branch on github.
- Go to the GitHub repo, and open a pull request.
- When you've completed your PR, copy and paste the link into the dev channel, so we can review it.

We have a PR template that will be shown whenever you open a pull request. So just fill out the form, and include a link to your Notion ticket and if there are any Figma design mockups that are associated with your work.

When you are done with your pull request, we require *at least* one engineer to review it before approving it to be merged into the main branch. 

Grab the link of the PR, and paste it into our #huoa-dev Slack channel, and get someone to review it.

## After Your Branch Has Been Merged to Main
Please delete your feature branches once they are merged to the main branch.

Check for [all active branches](https://github.com/Hawaian-United-Okinawa-Association/huoa-react/branches/active).

## Rebasing

You may not need to rebase much, since we delete our branches after they have been merged into main. But there might be a situation where you need the code that has been committed from another engineer after you created your branch. This is where we need to rebase your branch with main.

You have have been using `git merge` in the past locally to merge the code from main into your local branch. While this is fine, you can run into conflicts and fixing them can get messy when there are a lot of them. 

We've been using `git rebase` to help keep our code in sync.

Essentially git rebase is very similar to git merge, but instead of grabbing all of the code as the same time and surfacing all of the errors at once with git merge, git rebase surfaces the errors individually, and pauses the operation until the conflict is fixed.

SO with git rebase, when an individual conflict arises, the rebase will pause, throw an error and show where the conflict is located in your code. Then open your code editor, fix the error, commit that fix, and then continue the rebase process.

If you don't have much experience with git rebase, ask a fellow engineer and we will help out.