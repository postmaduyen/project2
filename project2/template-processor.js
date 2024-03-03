"use strict";

function TemplateProcessor(template) {
    this.template = template;
  }
  
  TemplateProcessor.prototype.fillIn = function (dictionary) {
    var filledTemplate = this.template;
  
    for (var property in dictionary) {
      var regex = new RegExp(`{{${property}}}`, 'g');
      filledTemplate = filledTemplate.replace(regex, dictionary[property]);
    }
  
    filledTemplate = filledTemplate.replace(/{{\w+}}/g, '');
  
    return filledTemplate;
  };
  
  module.exports = TemplateProcessor;