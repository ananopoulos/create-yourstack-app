Feature: Blog Page

Scenario: User Visits Blog Page
  Given the user is using a desktop
  And the user visits the page at route '/blog'
  Then the user sees the text 'Latest Posts'

Scenario: User Visits a Specific Post
  Given the user is using a desktop
  And the user visits the page at route '/blog'
  When the user clicks on the link with href '/blog/time-traveling-method'
  Then the user navigates to the page at route '/blog/time-traveling-method'
  And the user sees the text 'Time Traveling Method'
