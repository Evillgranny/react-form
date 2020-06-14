import React from 'react'
import PropTypes from 'prop-types'

function FormComponent(props) {
        return (
            <main>
                <form>
                    <input
                        type="text"
                        placeholder="first name"
                        name="firstName"
                        value={props.data.firstName}
                        onInput={props.handleChange}
                    />

                    <br />

                    <input
                        type="text"
                        placeholder="last name"
                        name="lastName"
                        value={props.data.lastName}
                        onInput={props.handleChange}
                    />

                    <br />

                    <input
                        type="text"
                        placeholder="age"
                        name="age"
                        value={props.data.age}
                        onInput={props.handleChange}
                    />

                    <br/>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                        /> male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                        /> female
                    </label>

                    <br/>

                    <select
                        value={props.data.destination}
                        name="destination"
                        onBlur={props.handleChange}
                    >
                        <option value="">-- Please a choose destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>

                    <br/>

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={props.handleChange}
                            checked={props.data.isVegan}
                        /> Vegan?
                    </label>

                    <br/>

                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={props.handleChange}
                            checked={props.data.isKosher}
                        /> Kosher?
                    </label>

                    <br/>

                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={props.handleChange}
                            checked={props.data.isLactoseFree}
                        /> Lactose Free?
                    </label>

                    <br/>

                    <button>submit</button>
                </form>


                <hr/>


                <h2>Entered information</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>Dietary restrictions  <br/>
                    Vegan: {props.data.isVegan ? "Yes" : "No"} <br/>
                    Kosher: {props.data.isKosher ? "Yes" : "No"} <br/>
                    Lactose free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
}

FormComponent.propTypes = {
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default FormComponent
