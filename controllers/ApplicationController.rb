class ApplicationController < Sinatra::Base

	options '*' do
		response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	end

	require 'bundler'
	Bundler.require

	register Sinatra::CrossOrigin

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'tasklist'
		)

	configure do
	  enable :cross_origin
	end

  	set :method_override, true

	set :bind, '0.0.0.0'

	set :protection, false

	set :views, File.dirname(__FILE__) + '/../views'

	get '/' do
		"Hello World"
	end

end