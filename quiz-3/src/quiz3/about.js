import React from 'react'

const About = (props) => {
    return (
        <>
            <div style={{ padding: "75px", border: "1px solid #ccc", marginTop: "100px", width: "50%", marginLeft: "auto", marginRight: "auto", backgroundColor: "white" }}>
                <h1 style={{ textAlign: "center" }}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong style={{ width: "100px" }}>Nama:</strong> Luluk Mufida </li>
                    <li><strong style={{ width: "100px" }}>Email:</strong> lulukmufida0015@gmail.com</li>
                    <li><strong style={{ width: "100px" }}>Sistem Operasi yang digunakan:</strong> Windows </li>
                    <li><strong style={{ width: "100px" }}>Akun Github:</strong> https://github.com/LulukMufida015</li>
                    <li><strong style={{ width: "100px" }}>Akun Telegram:</strong> @lulukmufida</li>
                </ol>
            </div>
        </>
    )
}

export default About;