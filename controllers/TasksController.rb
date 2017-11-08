class TaskController < ApplicationController

	get '/' do
		@tasks = Task.all
		@tasks.to_json
	end

	post '/' do
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
		@task = Task.find_by(id: params[:id])
		@task.delete
		'deleted'
	end

end