import { useState } from "react"


function Form() {
    const [fName, setFName] = useState("xyz")
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Dob, setDob] = useState()
    const [education, setEducation] = useState()
    const [gender, setGender] = useState()
    function printData(event) {
        event.preventDefault();
        console.log(fName, email, password, Dob, gender, education)
    }
    return (
        <div>

            <form onSubmit={printData}>

                <div>
                    <label htmlFor="fName">FirstName</label>
                    <input type="text" id="fName" name="fName" placeholder="Enter your First Name"
                        value={fName} onChange={(event) => { setFName(event.target.value) }} />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email "
                        value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your First Name"
                        value={password} onChange={(event) => { setPassword(event.target.value) }} autoComplete="on" />
                </div>


                <div>
                    <h1>Choose Your Gender</h1>
                    <label htmlFor="male">male</label>
                    <input type="radio" id="male" name="gender" value="male"
                        onChange={(event) => { setGender(event.target.value) }} />
                    <label htmlFor="Female">Female</label>
                    <input type="radio" id="Female" name="gender" value="Female"
                        onChange={(event) => { setGender(event.target.value) }} />
                    <label htmlFor="Others">Others</label>
                    <input type="radio" id="Others" name="gender" value="Others"
                        onChange={(event) => { setGender(event.target.value) }} />
                </div>
                <div>
                    <label htmlFor="Dob">Dob</label>
                    <input type="date" id="Dob" name="Dob" placeholder="Enter your First Name"
                        value={Dob}   onChange={(event)=>{ setDob(event.target.value)}} />
                </div>
                <div>
                    <label htmlFor="education">Write yourself for Education</label>
                    <textarea id="education" name="education" placeholder="Enter your Thoughts"
                        value={education}   onChange={(event)=>{ setEducation(event.target.value)}} />
                </div>

                <div>
                    <button >submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form