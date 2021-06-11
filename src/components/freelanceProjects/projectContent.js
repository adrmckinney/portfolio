import { BriefcaseIcon, DatabaseIcon, DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline'

export const FEATURES = [
  {
    name: 'UX',
    description:
        'My client was finding it difficult to spread the word about the sessions that she offers. She needed a site to display information and to allow users to signup for sessions. I built a site that is clean and informative, allowing users to browse for information, register for sessions, and contact my client with questions.',
    icon: UserGroupIcon
  },
  {
    name: 'Admin Workstation',
    description:
        'My client needed an easier way to keep track of people who are interested in signing up for sessions and an easy way to update the site with new sessions. I created a session registration database that allows my client to easily email registrants and update their accounts. The admin has access to a handful of CRUD forms related to sessions, other administrators, and registrants.',
    icon: BriefcaseIcon
  },
  {
    name: 'Front End',
    description:
        'I built the front end with React and deployed on Netlify. I used a few libraries for styling and logistics: Tailwindcss, React Datepicker, Moment.js. I built templates on the front end to use for Djoser\'s password and username reset features. Users are able to experience the site on mobile; full mobile utility is still in the works for admin.',
    icon: DesktopComputerIcon
  },
  {
    name: 'Back End',
    description:
        'I built the API with Django REST Framework. I used Djoser for authentication and password and username resets. I deployed through Heroku and use the Mailgun add-on to send emails to registrants when they sign up for sessions.',
    icon: DatabaseIcon
  }
]
