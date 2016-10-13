require 'rails_helper'

feature 'welcome', :js => true do

  context 'content of page prior to interaction' do

    scenario 'page should have no name applied' do
      visit '/pages/welcome'
      expect(page).to have_content 'name = '
      expect(page).to have_content 'Welcome, !'
    end
  end

  scenario 'user can input name' do
    visit '/pages/welcome'
    fill_in 'name_input', with: 'Test'
    click_button 'Add your name!'

    expect(page).to have_content 'Welcome, Test!'
  end

  context 'buttons manipulate name string' do

    scenario 'upcase capitalizes name' do
      enter_name
      click_button '.upcase'
      expect(page).to have_content 'Welcome, TEST!'
    end

    scenario 'downcase makes name lowercase' do
      enter_name
      click_button '.downcase'
      expect(page).to have_content 'Welcome, test!'
    end

    scenario 'reverse prints name backwards' do
      enter_name
      click_button '.reverse'
      expect(page).to have_content 'Welcome, tseT!'
    end

    scenario 'replaces vowels in name with stars' do
      enter_name
      click_button '.replace (vowels with a ★!)'
      expect(page).to have_content 'Welcome, T★st!'
    end
  end
end
