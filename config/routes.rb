Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  patch "messages/upload", to: "messages#upload"
  patch "messages/refresh_test", to: "messages#refresh_test", as: "refresh_test"
  root to: 'messages#index'
end
