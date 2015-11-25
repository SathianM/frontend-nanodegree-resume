 var bio = {
     "name": "Sathian M",
     "role": "Web Developper",
     "contacts": {
         "mobile": "123-456-789",
         "email": "SathianM@example.com",
         "github": "SathianM",
         "twitter": "@SathianM",
         "location": "Paris"
     },
     "welcomeMessage": "The important thing is never to stop questioning. [Albert Einstein]",
     "skills": [
         "Problem-Solving",
         "Flexible",
         "Teamwork",
         "Multicultural Sensivity",
         "Managing Priorities"
     ],
     "biopic": "images/me.jpg",
     "display": function() {

         var formattedRole = HTMLheaderRole.replace("%data%", this.role);
         var formattedName = HTMLheaderName.replace("%data%", this.name);
         var formattedWmsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
         var FormatteBioPic = HTMLbioPic.replace("%data%", this.biopic);

         $("#header").prepend(formattedRole);
         $("#header").prepend(formattedName);
         $("#header").append(formattedWmsg);
         $("#header").append(FormatteBioPic);

         var FormattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
         var FormattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
         var FormattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
         var FormattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
         var FormattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

         $("#topContacts").append(FormattedMobile);
         $("#topContacts").append(FormattedEmail);
         $("#topContacts").append(FormattedGithub);
         $("#topContacts").append(FormattedTwitter);
         $("#topContacts").append(FormattedLocation);

         $("#footerContacts").append(FormattedMobile);
         $("#footerContacts").append(FormattedEmail);
         $("#footerContacts").append(FormattedGithub);
         $("#footerContacts").append(FormattedTwitter);
         $("#footerContacts").append(FormattedLocation);

         $("#header").append(HTMLskillsStart);
         var lenSkills = bio.skills.length;
         var item = 0;
         while (item < lenSkills) {
             var formatedSkill = HTMLskills.replace("%data%", bio.skills[item]);
             $("#skills").append(formatedSkill);
             item++;
         }
     }
 };


 var work = {
     "jobs": [{
             "employer": "Sathian Telecom",
             "title": "Consultant",
             "location": "paris",
             "dates": "2000-2005",
             "description": "If you live long enough, you'll make mistakes.But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit.[William J. Clinton]"
         }, {
             "employer": "Sathian Books",
             "title": "Publisher",
             "location": "zurich",
             "dates": "2005-2010",
             "description": "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.[Friedrich Nietzsche]"
         },

         {
             "employer": "Sathian Communication",
             "title": "P R Advisor",
             "location": "munich",
             "dates": "2010-2015",
             "description": "It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur. You take the front line when there is danger. Then people will appreciate your leadership.[Nelson Mandela]"
         }
     ],
     "display": function() {
         $("#workExperience").append(HTMLworkStart);
         var NewClassName = document.getElementById("workExperience").className;
         NewClassName = NewClassName + " center-content clear-fix";
         document.getElementById("workExperience").className = NewClassName;
         $("h2").css({
             padding: 0
         });
         for (item = 0; item < work.jobs.length; item++) {
             var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
             var FormattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
             var formattedDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
             var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
             var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);

             $("#workExperience").append(formattedEmployer + FormattedTitle);
             $("#workExperience").append(formattedDates);
             $("#workExperience").append(formattedLocation);
             $("#workExperience").append(formattedDescription);
         }
     }
 };


 var projects = {
     "project": [{
         "title": "P0-About Me",
         "dates": "2000-2005",
         "description": "My favorite way to work is...as Hemingway said: The best way is always to stop when you are going good and when you know what will happen next. If you do that every day...you will never be stuck.",
         "images": ["http://i279.photobucket.com/albums/kk141/goldn_scales/motivational%20posters/funneh.jpg"]
     }, {
         "title": "P1-Portfolio",
         "dates": "2005-2010",
         "description": "...and then, I have nature and art and poetry, and if that is not enough, what is enough? [Vincent van Gogh]",
         "images": ["images/Fashion.jpg", "images/Food.jpg", "images/Nature.jpg"]
     }, {
         "title": "P2-Resume",
         "dates": "2010-2015",
         "description": "It is time for parents to teach young people early on that in diversity there is beauty and there is strength.[Maya Angelou]",
         "images": ["images/People.jpg"]
     }],
     "display": function() {
         $("#projects").append(HTMLprojectStart);
         var NewClassName = document.getElementById("projects").className;
         NewClassName = NewClassName + " center-content clear-fix";
         document.getElementById("projects").className = NewClassName;
         for (item = 0; item < projects.project.length; item++) {
             var FormattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
             var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
             var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

             $("#projects").append(FormattedTitle);
             $("#projects").append(formattedDates);
             $("#projects").append(formattedDescription);

             var lenArrImg = projects.project[item].images.length;
             var itemArrImg = 0;
             while (itemArrImg < lenArrImg) {
                 var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[itemArrImg]);
                 $("#projects").append(formattedImage);
                 itemArrImg++;
             }
         }
     }
 };

 var education = {
     "schools": [{
         "name": "Lycee",
         "location": "Paris",
         "degree": "Baccalaureat",
         "major": ["Biology", "Maths"],
         "dates": 1990,
         "url": "www.lycee-paris.fr"
     }, {
         "name": "Nappier",
         "location": "Edinburgh",
         "degree": "Engineering",
         "major": ["Computing"],
         "dates": 1994,
         "url": "www.nappier-ac.uk"
     }, {
         "name": "Kenan",
         "location": "London",
         "degree": "Billing",
         "major": ["Arbor", "Jupiter"],
         "dates": "2000",
         "url": "www.kenan.co.uk"
     }],
     "onlineCourses": [{
         "title": "Front-End Web Development",
         "school": "Udacity",
         "dates": 2015,
         "url": "www.udacity.com"
     }, {
         "title": "Psychotherapy",
         "school": "Sfu-Paris",
         "dates": 2013,
         "url": "www.sfu-paris.com"
     }, {
         "title": "Spanish",
         "school": "Babel",
         "dates": 2010,
         "url": "www.babel.com"
     }],
     "display": function() {
         $("#education").append(HTMLschoolStart);
         var NewClassName = document.getElementById("education").className;
         NewClassName = NewClassName + " center-content clear-fix";
         document.getElementById("education").className = NewClassName;
         for (item = 0; item < education.schools.length; item++) {
             var formattedName = HTMLschoolName.replace("%data%", education.schools[item].name);
             var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
             var formattedDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
             var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
             var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major);

             $("#education").append(formattedName + formattedDegree);
             $("#education").append(formattedDates);
             $("#education").append(formattedLocation);
             $("#education").append(formattedMajor);
         }
         $("#education").append(HTMLonlineClasses);
         $("h3").css({
             padding: 10
         });
         for (item = 0; item < education.onlineCourses.length; item++) {
             var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
             var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
             var formattedODates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);
             var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);

             $("#education").append(formattedTitle + formattedSchool);
             $("#education").append(formattedODates);
             $("#education").append(formattedUrl);
         }

     }
 };


 function displayMap() {
     $("#mapDiv").append(googleMap);
 }

 function main() {
     bio.display();
     work.display();
     projects.display();
     education.display();
     displayMap();
 }

 main();