require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/HomeController'
require './controllers/TasksController'

require './models/Task'

map ('/') {run ApplicationController}
map ('/home') {run HomeController}
map ('/tasks') {run TaskController}