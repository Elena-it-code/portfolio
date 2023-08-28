import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Separator} from "./layout/section/separator/Separator";
import {Main} from "./layout/section/main/Main";
import {Skill} from "./layout/section/skills/skill/Skill";
import React from "react";
import {Skills} from "./layout/section/skills/Skills";
import {About} from "./layout/section/about/About";
import {Portfolio} from "./layout/section/portfolio/Portfolio";
import {Contacts} from "./layout/section/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Separator/>*/}
            <Main/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

