import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainSidebar from './Component/MainSidebar'
import MainHeader from './Component/MainHeader'
import DailySidebar from './Component/Daily-Quates/DailySidebar'
import DailyLanguage from './Component/Daily-Quates/DailyLanguage'
import DailyCategory from './Component/Daily-Quates/DailyCategory'
import DailyPost from './Component/Daily-Quates/DailyPost/DailyPost'
import InvitationSidebar from './Component/Invitation/InvitationSidebar'
import InvitationCategory from './Component/Invitation/InvitationCategory'
import InvitationPost from './Component/Invitation/InvitationPost'

function App() {

  return (
    <div>
      <Router>
        <div className='App'>
          <MainSidebar></MainSidebar>
        </div>
        <div className='content'>
          {/* <MainHeader></MainHeader> */}
          <Routes>
            <Route path='/' element={<DailySidebar></DailySidebar>}></Route>
            <Route path='/dailylanguage' element={<DailyLanguage></DailyLanguage>}></Route>
            <Route path='/dailycategory' element={<DailyCategory></DailyCategory>}></Route>
            <Route path='/dailypost' element={<DailyPost></DailyPost>}></Route>
            <Route path='/invitation' element={<InvitationSidebar></InvitationSidebar>}></Route>
            <Route path='/invitationcategory' element={<InvitationCategory></InvitationCategory>}></Route>
            <Route path='/invitationpost' element={<InvitationPost></InvitationPost>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
