import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import EssenceInfusion from './components/essenceInfusion';
import DivineInfusion from './components/divineInfusion';
import Gear from './components/gear';
import Abilities from './components/abilities';
import Tips from './components/tips';

function App() {
    // State to manage the visible build section
    const [activeBuild, setActiveBuild] = useState(null);
    const scrollToTopBtnRef = useRef(null);

    // Scroll-to-top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Scroll event to toggle visibility of the scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            if (scrollToTopBtnRef.current) {
                if (window.scrollY > 20) {
                    scrollToTopBtnRef.current.classList.remove('hidden');
                } else {
                    scrollToTopBtnRef.current.classList.add('hidden');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Button click handler to set the active build
    const handleButtonClick = (buildType) => {
      setActiveBuild(buildType); // Update the active build type
      // window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

window.onscroll = function() {
const button = document.querySelector('.scroll-to-top-btn');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.classList.remove('hidden'); // Show button
} else {
    button.classList.add('hidden'); // Hide button when at top
}
};
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Cleric Class Guide for Enveus" />
  <title>Cleric Class Guide - MMORPG</title>
  <main>
    {/* Buttons to jump to parts of guide  */}
    <h2>Cleric Class Guide</h2>
    <nav>
      <ul>
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#build">Suggested Build</a>
        </li>
        <li>
          <a href="#items">Gear &amp; Consumables</a>
        </li>
        <li>
          <a href="#abilities">Abilities</a>
        </li>
        <li>
          <a href="#tips">Tips &amp; Tricks</a>
        </li>
        <li>
          <a href="#talent-calculator">Talent Calculator</a>
        </li>
      </ul>
    </nav>
    <section id="overview">
      <div className='sectionHeader'>
      <h2 className='heading'>Overview</h2>
      </div>
      <p>
        The cleric is a strong support class and the only true healer currently
        in the game. This guide will be for two very similar builds that will
        focus on the best of both worlds for single target and AoE heals. The
        first build is more mana friendly while the later build has more
        skillful gameplay that can result in strong instant cast combos for easy
        life saving moments, or strong moments of burst and crowd control.<br/>
        Cleric's want to maximize their magic and healing power. This will come mostly from weapons
        but you should always strive to have intellect on as much gear as possible.
      </p>
    </section>
    <section id="build">
    <h2>Suggested Builds</h2>
      <ul className="build-buttons">
        <li>
          <button onClick={() => handleButtonClick("mana")} className="build-button">
            Essence Infusion
          </button>
        </li>
        <li>
          <button onClick={() => handleButtonClick("instant")} className="build-button">
            Divine Infusion
          </button>
        </li>
      </ul>
      {/* Essence Infusion build contents */}
      {activeBuild === "mana" && <EssenceInfusion/>}

      {/* Divine Infusion build contents */}
      {activeBuild === "instant" && <DivineInfusion/> }

    </section>
    <section id="items">
      <Gear/>
    </section>
    <section id="abilities">
      <Abilities/>
    </section>
    <section id="tips">
      <Tips/>
    </section>

    <section id="talent-calculator">
      <h2>Talent Calculator</h2>
      <p>
        <strong>Disclaimer:</strong> This is a work in progress. For now feel
        free to make use of AshesCodex for talent calculators.
      </p>
    </section>
    <button onClick={() => scrollToTop() } className="scroll-to-top-btn" >
      ↑
    </button>
    <p>Written by Lennox</p>
    <p>Last updated 11/12/2024</p>
  </main>
  <footer>
    <p>©2024 Enveus Gaming </p>
  </footer>
</>

  );
}

export default App;



