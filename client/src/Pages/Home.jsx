import React from 'react'
import AppNavbar from '../components/AppNavbar'
import Profilecard from '../components/Profilecard' 
import SearchBar from '../components/SearchBar'
import Fillters from '../components/Fillters'
import NotesList from '../components/NotesList'
import { ContactUs } from '../components/ContactUs'
export const Home = () => {
  return (
    <>
    <AppNavbar/>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Profilecard />
        </div>
        <div className="col-md-8">
          <SearchBar />
          <Fillters />
          <NotesList/>
        </div>
      </div>
      <ContactUs/>
    </div>
    </>
  )
}
