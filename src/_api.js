'use strict';

const model = require('./_model');
const groupComponent = require('./_group-view');
const projectComponent = require('./_project-view');

const groupModel = function _groupModel (candidate) {
  return model.createGroup(candidate);
};

const groupView = function _groupView (model) {
  return groupComponent.createView(model);
};

const projectModel = function _projectModel (candidate) {
  return model.createProject(candidate);
};

const projectView = function _projectView (model) {
  return projectComponent.createView(model);
};

const group = {
  createModel: groupModel,
  createView: groupView
};

const project = {
  createModel: projectModel,
  createView: projectView
};

const api = {
  group,
  project
};

module.exports = api;
