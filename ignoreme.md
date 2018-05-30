# Jasmine
Is everyone familar with Jasmine?
* If NOT
* Very quick walk-through of an existing test file (licensed-end-user-model-test.js)
  
# Node

Is everyone familiar with node/npm?
If NOT
* Node is an execution environment (JVM) for Javascript.  That is all.
* Start with npm, and its parallels with Maven.  Dependencies in package.json
*   This is a config file for npm, really. 
*   Other node modules keep their configuration there, too (like semistandard)
*   This is super confusing, until you realize that package.json is a big junk drawer...
  
# Karma
Is everyone familar with Karma?

If NOT  
* Karma is a node application that runs Jasmine tests (and other kinds)
* Karma has its own config files, which are JS
*   These JS files RUN IN NODE, which means you can do anything in them...

Demo creating a run configuration in IntelliJ for a single config
    
Show how specific config files pull in shared config

Show how files to be loaded are listed using commonDependencies and suite-specific testfiles file
* Files have to be loaded in the right order because they are not really modules
* Since we use HMD, that has to be loaded first.
* Reminder: Karma cannot load files that are not local (http://...) even though the documentation says it can.  If someone has a solution for this, I'd love to see it.
* If you are running your tests, and you change the *testfiles.js file, you need to restart Karma