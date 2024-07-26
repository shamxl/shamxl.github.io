import "./App.css"

import banner from "./assets/banner.png"
import Heading from "./components/Heading.jsx"
import Paragraph from "./components/Paragraph.jsx"
import Image from "./components/Image.jsx"
import Card from "./components/Card.jsx"
import Button from "./components/Button.jsx"
import LanguageCard from "./components/LanguageCard.jsx"
import ContactCard from "./components/ContactCard.jsx"
import {useEffect, useState} from "react"

function App() {
  const [ data, setData] = useState(false)

  useEffect(() => {
    fetch("/showcase.json").then(response => {
      return response.json()
    }).then(data => {
      setData(data)
    })
  }, [])
  return (
  <>
    <section>
      <Image src={banner} alt="banner"/>
      <h2 className="gradient" >Welcome Aboard!</h2>
      <Paragraph>Hello, I'm Shamil. I am a full-stack developer and systems programmer with extensive experience in building and maintaining complex software systems. My expertise spans front-end and back-end development, ensuring seamless integration and performance across various platforms. I am passionate about creating efficient, scalable solutions and continually updating my skills to stay at the forefront of technology.</Paragraph>

    </section>
    <section>
      <Heading>ShowCase</Heading>   
      {data ? (
        data.repositories.map(repo => (
          <Card key={repo.name}>
            <h2>{repo.name}</h2>
            <Paragraph>{repo.description}</Paragraph>
            <Button url={"https://github.com/shamxl/"+repo.name}>View on GitHub</Button>
          </Card>
      ))) : (
        <h2>Fetching...</h2>
      )}
    </section>

    <section>
      <Heading>My Stack</Heading>
      <h3>Languages</h3>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=python">Python</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=nodejs">NodeJS</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=rust">Rust</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=c">C</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=cpp">Cpp</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=java">Java</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=html">Html</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=css">CSS</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=javascript">Javascript</LanguageCard>
      
      <h3>Frameworks</h3>
      
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=typescript">TypeScript</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=react">React</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=express">Express</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=threejs">ThreeJS</LanguageCard>
      
      <h3>Databases</h3>
      
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=mongodb">MongoDB</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=sqlite">SqlLite</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=postgresql">PostgreSQL</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=mysql">SQL</LanguageCard>

      <h3>Tools</h3>
      
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=arduino">Arduino</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=git">GIT</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=md">MarkDown</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=neovim">Neo Vim</LanguageCard>
      <LanguageCard imgSrc="https://skillicons.dev/icons?i=vite">Vite</LanguageCard>
      
    </section>
    <br/>
    <section>
      <Heading href="#contactme">Get in touch with me</Heading>
      
      <ContactCard buttonUrl="https://github.com/shamxl" imgSrc="https://skillicons.dev/icons?i=github">Github</ContactCard>
      
    </section>

    <div className="bottom">
      <Paragraph>View this page's <a href="https://github.com/shamxl/shamxl.github.io">source code</a></Paragraph>
    </div>
  </>
  )
}

export default App
