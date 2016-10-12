require 'rails_helper'
require 'helper'

feature 'welcome' do

  context 'content of page prior to interaction' do

    scenario 'page should have no name applied' do
      visit '/pages/welcome'
      expect(page).to have_content 'name = '
      expect(page).to have_content 'Welcome, !'
    end
  end

  scenario 'user can input name' do
    visit '/pages/welcome'
    wait_for_ajax
    fill_in 'name_input', with: 'test'
    click_button 'Add your name!'
    expect(page).to have_content 'Welcome, test!'
  end

#   context 'restaurants have been added' do
#     before do
#       Restaurant.create(name: 'KFC')
#     end
#
#     scenario 'display restaurants' do
#       visit '/restaurants'
#       expect(page).to have_content('KFC')
#       expect(page).not_to have_content('No restaurants yet')
#     end
#   end

# fill_in 'Description', with: 'Deep fried goodness'
#      click_button 'Update Restaurant'
end
