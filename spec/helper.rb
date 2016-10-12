def enter_name
  visit '/pages/welcome'
  fill_in 'name_input', with: 'Test'
  click_button 'Add your name!'
end
