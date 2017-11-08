require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/HomeController'
require './controllers/ItemsController'

require 'models/Item'

map ('/') {run ApplicationController}
map ('/') {run HomeController}
map ('/') {run ItemController}