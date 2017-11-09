class TaskController < ApplicationController

	options "*" do
		response.headers["Access-Control-Allow-Methods"] = ["HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"]
	end

	get '/' do
		@tasks = Task.all
		@tasks.to_json
	end

	post '/' do
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@task = Task.new
		@task.task = payload[:task]
		@task.taskdescription = payload[:taskdescription]
		@task.manager = payload[:manager]
		@task.deadline = payload[:deadline]
		@task.hourslefttocomplete = payload[:hourslefttocomplete]
		@task.save
		'saved'
	end

	put '/:id' do
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@task = Task.find_by(id: payload[:id])
		@task.task = payload[:task]
		@task.taskdescription = payload[:taskdescription]
		@task.manager = payload[:manager]
		@task.deadline = payload[:deadline]
		@task.hourslefttocomplete = payload[:hourslefttocomplete]
		@task.save
		'saved'
	end

	delete '/:id' do
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@task = Task.find_by(id: payload[:id])
		@task.delete
		'deleted'
	end

end