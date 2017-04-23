'use strict';

describe('myApp.news2 module', function() {

  beforeEach(module('myApp.news'));

  describe('news controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('newsCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});