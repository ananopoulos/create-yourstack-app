Feature: Home Page

Scenario: User Visits Home Page
  Given the user visits the page at route '/'
  Then the user sees the text 'Welcome to Your App!'

Scenario: User Visits Blog Page
  Given the user is using a desktop
  And the user visits the page at route '/'
  When the user clicks on the 'Blog' link
  Then the user navigates to the page at route '/blog'
