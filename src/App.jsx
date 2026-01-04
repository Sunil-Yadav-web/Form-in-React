import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Radio from './components/Radio'
import SubjectRadio from './components/SubjectRadio'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [gender, setGender] = useState('')
  const [subjects, setSubjects] = useState({
    english: false,
    maths: false,
    physics: false,
  })
  const [resume, setResume] = useState('')
  const [url, setUrl] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [about, setAbout] = useState('')

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleReset = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setContact('')
    setGender('')
    setSubjects({
      english: false,
      maths: false,
      physics: false,
    })
    setResume('')
    setUrl('')
    setSelectedOption('')
    setAbout('')
  }

  return (
    <>
      <div className="App">
        <h1>Form in React</h1>
        <fieldset>
          <form action="#" method="get">
            <Input
              label="First Name"
              name="firstname"
              type="text"
              firstName={firstName}
              onHandleChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter FirstName"
              required="required"
            />
            <Input
              label="Last Name"
              name="lastname"
              type="text"
              firstName={lastName}
              onHandleChange={(e) => setLastName(e.target.value)}
              placeholder="Enter LastName"
              required="required"
            />
            <Input
              label="Enter Email"
              name="email"
              type="email"
              firstName={email}
              onHandleChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required="required"
            />
            <Input
              label="Enter Contact"
              name="contact"
              type="tel"
              firstName={contact}
              onHandleChange={(e) => setContact(e.target.value)}
              placeholder="Enter Mobile Number"
              required="required"
            />
            <label htmlFor="gender">Gender*</label>
            <Radio
              name="gender"
              type="radio"
              value="male"
              gender={gender}
              onHandleChange={(e) => setGender(e.target.value)}
            />
            Male
            <Radio
              name="gender"
              type="radio"
              value="female"
              gender={gender}
              onHandleChange={(e) => setGender(e.target.value)}
            />
            Female
            <Radio
              name="gender"
              type="radio"
              value="others"
              gender={gender}
              onHandleChange={(e) => setGender(e.target.value)}
            />
            Others
            <label htmlFor="lang">Your best Subject</label>
            <SubjectRadio
              name="lang"
              type="checkbox"
              id="english"
              checked={subjects.english}
              onHandleChange={(e) => handleSubjectChange('english')}
            />
            English
            <SubjectRadio
              name="lang"
              type="checkbox"
              id="maths"
              checked={subjects.maths}
              onHandleChange={(e) => handleSubjectChange('maths')}
            />
            Maths
            <SubjectRadio
              name="lang"
              type="checkbox"
              id="physics"
              checked={subjects.physics}
              onHandleChange={(e) => handleSubjectChange('physics')}
            />
            Physics
            <Input
              label="Upload Resume"
              type="file"
              name="file"
              id="file"
              onHandleChange={(e) => setResume(e.target.files[0])}
              placeholder="Enter Upload File"
              require
            />
            <Input
              label="Enter URL"
              type="url"
              name="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter url"
              required
            />
            <label>Select your choice</label>
            <select
              name="select"
              id="select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value= "" disabled >
                Select your Ans
              </option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="t">MongoDB</option>
              </optgroup>
            </select>
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About your self"
              required
            ></textarea>
            <button type="reset" value="reset" onClick={() => handleReset()}>
              Reset
            </button>
            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </>
  )
}

export default App
