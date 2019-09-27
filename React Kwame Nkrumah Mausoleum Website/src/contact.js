import React from 'react';
import styled from 'styled-components';



const Styles = styled.div`

 {/* salvaged css code from another project of mine */}
 
body {
    margin: 0;
    padding: 0;
    background-image: url(image.jpg);
    background-size: cover;
    font-family: sans-serif;
}

.form-area {
    position: absolute;
    top: 800px;
    left: 50%;
    transform: translate(-50%, -60%);
    box-sizing: border-box;
    width: 400px;
    height: 500px;
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
    opacity : 0.8;
}

h3 {
    margin: 0;
    padding: 0 0 20px;
    font-weight: bold;
    color: white;
}

.form-area p {
    color: white;
}

.form-area input,
select {
    width: 100%;
    margin-bottom: 20px;
}

.form-area input[type=text],
.form-area input[type=number],
.form-area input[type=email] {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    outline: none;
    height: 20px;
    color: white;
    display: 16px;
}

::placeholder {
    color: white;
}

.form-area select {
    height: 25px;
}

.form-area input[type=submit] {
    border: none;
    height: 23px;
    color: white;
    outline: none;
    font-size: 15px;
    background-color: #ADD8E6;
    border-radius: 20px;
    cursor: pointer;
}

.form-area input[type=submit]:hover {
    background-color: bisque;
    color: black;
}

.form-area a {
    color: white;
    text-decoration: none;
}
.center{
    color: white;
}

::placeholder {
  color: blue;
  font-size: 1.5em;
}
`;

export const Contact = () => (
    
    <Styles>
    <h2> Contact Page</h2>
    <div className = "form-area">
        <p>
            wed be delighted to hear from you , you can contact us

            <form className = "center">
                <label>

                    <input type="text" placeholder="full Name" />
                    <br></br>
                    <br></br>

                    <input type="email" placeholder=" Email Address" />
                    <br></br>
                    <br></br>

                    <input type="number"  placeholder=" Phone number" />
                    <br></br>
                    <br></br>

                    <input type="text"  placeholder=" Message " />
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </p>
    </div>
    </Styles>

)