class TaskController < ApplicationController

	get '/' do
		response['Access-Control-Allow-Origin'] = '*'
		@tasks = Task.all
		@tasks.to_json
	end

	post '/' do
		response['Access-Control-Allow-Origin'] = '*'
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@task = Task.new
		@task.task = params[:task]
		@task.taskdescription = params[:taskdescription]
		@task.manager = params[:manager]
		@task.deadline = params[:deadline]
		@task.hourslefttocomplete = params[:hourslefttocomplete]
		@task.save
		'saved'
	end

	put '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@task = Task.find_by(id: params[:id])
		@task.task = params[:task]
		@task.taskdescription = params[:taskdescription]
		@task.manager = params[:manager]
		@task.deadline = params[:deadline]
		@task.hourslefttocomplete = params[:hourslefttocomplete]
		@task.save
		'saved'
	end

	delete '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@task = Task.find_by(id: params[:id])
		@task.delete
		'deleted'
	end

end