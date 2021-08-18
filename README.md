<div align="center">
  <h1>Help Me Fish</h1>
</div>
<div align="center">
  A small web app designed to help fishermen decide what fish to target, what bait/lures to use, and just learn more about fish and fishing.</br>
  This project was built using <a href="https://reactjs.org/">React</a> and <a href="https://firebase.google.com/">Firebase</a>.
</div>
<div align="center">
  View the live version <a href="https://help-me-fish.web.app/">here</a>!
</div>
</br>

![Alt text](https://raw.githubusercontent.com/hojohn2561/help-me-fish/main/src/images/welcome.PNG "Welcome Screen")

<h2>Running in Dev</h2>
<ul>
  <li>
    <p>To run locally, navigate to project's root directory and run</p>
    <pre>npm start</pre>
  </li>
</ul>

<h2>Adding a Fish</h2>

1. Create its document in Firestore, with the name of the document being the fish species</br>

2. Create the document fields:</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. <i>fishImageUrls</i> (array containing URLS to images for the fish)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. <i>fishingTips</i> (string containing information about fishing tips for the fish)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. <i>idealCloudConditions</i> (array containing fish's ideal cloud conditions)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. <i>idealTemperatureRange</i> (string representing fish's ideal temperature range, e.g., '55°F-75°F')</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. <i>idealWaterClarities</i> (array containing fish's ideal water clarities)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. <i>identification</i> (string containing information on how to identify the fish)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. <i>intro</i> (string containing introductory paragraph about the fish)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. <i>sources</i> (array containing sources used for information)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. <i>spawnBehavior</i> (string for paragraph about fish's spawning behavior)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. <i>waterType</i> (string: either 'freshwater' or 'saltwater')</br>

3. Create corresponding module in `/public/src/utility/fishHelp`

4. Define the two functions `getSpecificHelpIntro` and `getSpecificLures`, used to create the help info strings, and export them.

5. In either `freshwaterHelp.js` or `saltwaterHelp.js`, depending on the fish, add its case to the switch statement to call and create the help info string when appropriate.
 
