require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/HomeController'
require './controllers/TasksController'

require './models/Task'

map ('/') {run ApplicationController}
map ('/') {run HomeController}
map ('/') {run TaskController}