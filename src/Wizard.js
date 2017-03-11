/*jslint browser: true, undef: true *//*global Ext*/
/*!
 * ext.zeroclipboard
 * An ExtJS6 wrapper for Perceptive Media's publish wizard. The [Perceptive Media](http://www.lexmark.com/en_us/better-together-es.html) library provides an easy way to publish secure and public videos.
 * Copyright (c) 2016 Idealogy Labs
 * Licensed MIT
 * v1.0.0
 */
Ext.define('ext.twistage.Wizard', {
  extend: 'Ext.Component',
  alias: 'widget.twistage-wizard',

/**
 * Holds default config for perceptive media publishWizard api
 */
  config: {
    signature: null,
    redirect_host: null,
    twistageConfig: {}
  },

/**
 * Called after render to initialize perceptive media wizard
 */
  afterRender: function(t, eOpts) {
    var _self = this;
    _self.callParent(arguments);
    if((typeof window.publishWizard) === 'function'){
      _self.init();
      console.info('initialized Perceptive Media publish wizard');
    }else{
      _self.update('Unable to initialize perceptive media publish wizard');
      console.error('Unable to initialize perceptive media publish wizard');
    }
  },

/**
 * initializes perceptive Media publish wizard for given component
 */
  init: function() {
      var _self = this;
      window.publishWizard(
        _self.config.signature,
        _self.config.redirect_host,
        _self.config.twistageConfig
      )
  },

  onResize: function(w, h, oW, oH){
    this.callParent(arguments);
  }
});
