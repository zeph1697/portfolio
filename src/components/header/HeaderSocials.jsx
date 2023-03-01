import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaDribbbleSquare} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target="blank"><FaLinkedin /></a>
        <a href="https://github.com" target="blank"><FaGithubSquare /></a>
        <a href="https://dribbble.com" target="blank"><FaDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials