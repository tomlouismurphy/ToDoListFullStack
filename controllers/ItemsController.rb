class ItemController < ApplicationController

	get '/' do
		@items = Item.all
		@items.to_json
	end

	post '/' do
		@item = Item.new
		@item.task = params[:task]
		@item.taskDescription = params[:taskDescription]
		@item.manager = params[:manager]
		@item.deadline = params[:deadline]
		@item.hoursLeftToComplete = params[:HoursLeftToComplete]
		@item.save
		'saved'
	end

	put '/:id' do
		@item = Item.find_by(id: params[:id])
		@item.task = params[:task]
		@item.taskDescription = params[:taskDescription]
		@item.manager = params[:manager]
		@item.deadline = params[:deadline]
		@item.hoursLeftToComplete = params[:HoursLeftToComplete]
		@item.save
		'saved'
	end

	delete '/:id' do
		@item = Item.find_by(id: params[:id])
		@item.delete
		'deleted'
	end

end