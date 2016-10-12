Rails.application.routes.draw do
  get 'pages/home'

  get 'pages/welcome'

  get 'pages/page1'

  get 'pages/page2'

  get 'pages/page3'

  get 'pages/page4'

  get 'pages/quiz'

  root 'pages#home'
end
