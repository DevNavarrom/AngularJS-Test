'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for home/);
    });

  });


  describe('users', function() {

    beforeEach(function() {
      browser.get('index.html#!/users');
    });


    it('should render users when user navigates to /users', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for users/);
    });

  });


  describe('albums', function() {

    beforeEach(function() {
      browser.get('index.html#!/albums');
    });


    it('should render albums when user navigates to /albums', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for albums/);
    });

  });


  describe('posts', function() {

    beforeEach(function() {
      browser.get('index.html#!/posts');
    });


    it('should render posts when user navigates to /posts', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for posts/);
    });

  });

});
