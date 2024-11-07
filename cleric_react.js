<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Cleric Class Guide for Enveus" />
  <title>Cleric Class Guide - MMORPG</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* General Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Arial', sans-serif;\n    background-color: #f4f4f4;\n    color: #333;\n    line-height: 1.6;\n    padding-top: 20px;\n}\n\n/* Header Styling */\nheader {\n    background-color: #2e3a47;\n    color: #333;\n    padding: 20px 0;\n    text-align: center;\n}\n\nheader h1 {\n    font-size: 2.5rem;\n    margin-bottom: 10px;\n}\n\nnav ul {\n    list-style: none;\n    margin-top: 10px;\n    text-align: center;\n}\n\nnav ul li {\n    display: inline;\n    margin-right: 20px;\n}\n\nnav ul li a {\n    color: #333333;\n    text-decoration: none;\n    font-size: 1.1rem;\n    transition: color 0.3s ease;\n\n}\n\nnav ul li a:hover {\n    color: #fff881;\n}\n\n/* Main Content Styling */\nmain {\n    max-width: 1500px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n\nh2 {\n    font-size: 2rem;\n    color: #333;\n    margin-bottom: 15px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\np {\n    font-size: 1rem;\n    margin-bottom: 20px;\n}\n\nul {\n    list-style: inside;\n    margin-left: 20px;\n}\n\nul li {\n    font-size: .8rem;\n    margin-bottom: 10px;\n}\n\n/* Section Styling */\nsection {\n    margin-bottom: 30px;\n}\n\nsection:last-child {\n    margin-bottom: 0;\n}\nh2 {\n    text-align: center;\n}\n\n/* Button-style links */\na.button {\n    display: inline-block;\n    background-color: #fcf459;\n    color: #fff;\n    padding: 10px 20px;\n    text-decoration: none;\n    border-radius: 5px;\n    margin-top: 15px;\n    transition: background-color 0.3s ease;\n}\n\na.button:hover {\n    background-color: #ffffe3;\n}\n\n/* Footer Styling */\nfooter {\n    background-color: #2e3a47;\n    color: #fff;\n    text-align: center;\n    padding: 15px 0;\n    font-size: 1rem;\n    margin-top: 30px;\n}\n\nfooter p {\n    margin: 0;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n    header h1 {\n        font-size: 2rem;\n    }\n\n    nav ul {\n        text-align: center;\n    }\n\n    nav ul li {\n        display: block;\n        margin: 10px 0;\n    }\n\n    main {\n        padding: 15px;\n    }\n\n    h2 {\n        font-size: 1.5rem;\n    }\n\n    ul li {\n        font-size: 1rem;\n    }\n}\n/* Button Styling */\nul.build-buttons {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 20px;\n}\n\nul.build-buttons li {\n    margin-right: 20px;\n}\n\nul.build-buttons li button {\n    background-color: #fcf459;\n    color: Gray;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: background-color 0.3s ease;\n}\n\nul.build-buttons li button:hover {\n    background-color: #fdfdc8;\n}\n\n/* Build Content Styling */\n#build-content {\n    margin-top: 20px;\n}\n\n.build-section {\n    display: none; /* Hide all sections by default */\n}\n\n.build-section.active {\n    display: block; /* Show active section */\n}\n\nh3 {\n    font-size: 1.8rem;\n    color: #333;\n    margin-bottom: 10px;\n}\n\nul {\n    margin-left: 20px;\n}\n\nul li {\n    font-size: 1rem;\n    margin-bottom: 10px;\n}\n\n/* style for build images */\n/* Main container for the skill tree image */\n.skilltree-wrapper {\n    position: relative;\n    width: 100%;                /* Ensure it takes up the width of its parent */\n    max-width: 1400px;           \n    height: 800px;              \n    margin: 0 auto;             /* Center the container */\n    display: grid;    /* Use grid layout */\n    grid-template-columns: repeat(17, 1fr);  /* 17 equal columns */\n    grid-template-rows: repeat(17, 1fr);     /* 17 equal rows */\n    grid-gap: 15px;   \n    background-image: url('clericImages/clericBackground.png');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    place-items: center;\n\n}\n\n/* Skill tree background image */\n.skilltree-image {\n    width: 100%;                /* Make the image fill the container width */\n    height: auto;               /* Maintain the image's aspect ratio */\n    display: block;             /* Prevent any extra space around the image */\n}\n\n/* Each skill icon */\n.skill {\n    display: flex;               /* Use flexbox for centering */\n    justify-content: center;     /* Horizontally center the icon */\n    align-items: center;         /* Vertically center the icon */\n    position: relative;          /* Ensure tooltip is positioned correctly */\n    width: 50px;                 /* Size of the skill icons */\n    height: 50px;                /* Size of the skill icons */\n    cursor: pointer;\n    transition: transform 0.2s ease-in-out;\n}\n\n\n.circle {\n    border-radius: 50%;\n    overflow: hidden;\n}\n\n/* Hover effect to enlarge the icon */\n.ability-icon {\n    width: 100%;\n    height: 100%;\n    transition: transform 0.2s ease-in-out;\n    border: 3px solid #fdfdc8;\n    position: relative;\n    object-fit: cover;\n}\n.ability-icon.selected15 {\n    border: 4px solid #fff307;\n}\n.ability-icon.selected25 {\n    border: 4px solid #056cf1;\n}\n\n/* Hover effect to enlarge the ability icon */\n.ability-icon:hover {\n    transform: scale(1.2); /* Slightly enlarge the icon */\n}\n\n/* Tooltip - hidden by default, shown on hover */\n.skill-tooltip {\n    position: absolute;\n    bottom: 80px;                  /* Position the tooltip above the icon */\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    padding: 10px;\n    border-radius: 5px;\n    visibility: hidden;          /* Hide by default */\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    width: 325px;            /* Max width of the tooltip */\n    white-space: normal;         /* Allow the text to wrap and break */\n    word-wrap: break-word;       /* Break words if they're too long */\n    z-index: 1000;\n}\n\n/* Show the tooltip when hovering over an icon */\n.skill:hover .skill-tooltip {\n    visibility: visible;\n    opacity: 1;\n    \n}\n.tooltip:hover .skill-tooltip{\n    visibility: hidden;\n    opacity: 0;\n}\n/* Style for the \"Scroll to Top\" button */\n.scroll-to-top-btn {\n    position: fixed;             /* Fix the button in place */\n    bottom: 20px;                /* 20px from the bottom of the screen */\n    right: 20px;                 /* 20px from the right of the screen */\n    background-color: #fdfdc8;   /* Light yellow background */\n    color: #333;                 /* Dark text color for visibility */\n    border: none;                /* No border */\n    padding: 10px 15px;          /* Add padding for a larger clickable area */\n    font-size: 20px;             /* Make the arrow larger */\n    border-radius: 5px;          /* Rounded corners */\n    cursor: pointer;            /* Show pointer cursor on hover */\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */\n    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */\n}\n\n/* Hover effect to change background color */\n.scroll-to-top-btn:hover {\n    background-color: #ffcd00; /* Change to a darker yellow on hover */\n    transform: scale(1.1);      /* Slightly enlarge the button when hovered */\n}\n\n/* Optional: Hide button when at the top of the page */\n.scroll-to-top-btn.hidden {\n    display: none;\n}\n.video-container {\n    display: flex;               /* Use Flexbox layout */\n    justify-content: space-between; /* Space between videos */\n    align-items: flex-start;     /* Align items to the top */\n    gap: 20px;                   /* Optional: space between the video items */\n}\n\n/* Each video item (video + heading) */\n.video-item {\n    display: flex;\n    flex-direction: column;      /* Stack heading and video vertically */\n    align-items: center;         /* Center the heading and video horizontally */\n}\n\n/* Styling for gear loadout*/\n.gear-wrapper{\n    position: relative;\n    width: 100%;                /* Ensure it takes up the width of its parent */\n    max-width: 500px;           \n    height: 550px;              \n    margin: 0 auto;             /* Center the container */\n    display: grid;    /* Use grid layout */\n    grid-template-columns: repeat(5, 1fr);  /* 8 equal columns */\n    grid-template-rows: repeat(10, 1fr);     /* 8 equal rows */\n    grid-gap: 15px;   \n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    place-items: center;\n    padding: 5px;\n}\n.weapon-wrapper{\n    position: relative;\n    width: 100%;                /* Ensure it takes up the width of its parent */\n    max-width: 500px;           \n    height: 75px;              \n    margin: 0 auto;             /* Center the container */\n    display: grid;    /* Use grid layout */\n    grid-template-columns: repeat(10, 1fr);  /* 10 equal columns */\n    grid-template-rows: repeat(1, 1fr);     /* 1 equal rows */\n    grid-gap: 15px;   \n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    place-items: center;\n    padding: 5px;\n}\n.image-holder{\n    background-image: url('clericImages/gearImage.png');\n    max-width: 500px;\n    height: 650px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.equipment-image {\n    width: 100%;                /* Make the image fill the container width */\n    height: auto;               /* Maintain the image's aspect ratio */\n    display: block;             /* Prevent any extra space around the image */\n}\n\n/* Each equipment icon */\n.equipment {\n    display: flex;               /* Use flexbox for centering */\n    justify-content: center;     /* Horizontally center the icon */\n    align-items: center;         /* Vertically center the icon */\n    position: relative;          /* Ensure tooltip is positioned correctly */\n    width: 50px;                 /* Size of the skill icons */\n    height: 50px;                /* Size of the skill icons */\n    cursor: pointer;\n    transition: transform 0.2s ease-in-out;\n    border: 3px solid white;\n}\n.inner-grid{\n    display: grid;\n    position: relative;\n    grid-gap: 15px;\n    place-items: center;\n    grid-template-columns: repeat(10, 1fr);\n}\n.equipment:hover .equipment-tooltip{\n    visibility: visible;\n    opacity: 1;\n}\n.equipment:hover .weapon-tooltip{\n    visibility: visible;\n    opacity: 1;\n}\n.equipment-tooltip {\n    position: absolute;\n    bottom: -200px;                  /* Position the tooltip above the icon */\n    left: 250px;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    padding: 10px;\n    border-radius: 5px;\n    visibility: hidden;          /* Hide by default */\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    width: 325px;            /* Max width of the tooltip */\n    white-space: normal;         /* Allow the text to wrap and break */\n    word-wrap: break-word;       /* Break words if they're too long */\n    z-index: 1000;\n}\n.weapon-tooltip {\n    position: absolute;\n    bottom: 80px;                  /* Position the tooltip above the icon */\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    padding: 10px;\n    border-radius: 5px;\n    visibility: hidden;          /* Hide by default */\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    width: 325px;            /* Max width of the tooltip */\n    white-space: normal;         /* Allow the text to wrap and break */\n    word-wrap: break-word;       /* Break words if they're too long */\n    z-index: 1000;\n}\n.container{\n    content: \"\";\n    display: table;\n    clear: both;\n    width: 100%;\n\n}\n.left{\n    float: left;\n    width: 50%;\n\n}\n.right{\n    float: right;\n    width: 60%;\n}\n\n    "
    }}
  />
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
      <h2>Overview</h2>
      <p>
        The cleric is a strong support class and the only true healer currently
        in the game. This guide will be for two very similar builds that will
        focus on the best of both worlds for single target and AoE heals. The
        first build is more mana friendly while the later build has more
        skillful gameplay that can result in strong instant cast combos for easy
        life saving moments, or strong moments of burst and crowd control.
      </p>
    </section>
    <section id="build">
      <h2>Suggested Builds</h2>
      <p1 />
      {/* Buttons to switch between builds, if more builds are added, copy format below */}
      <ul className="build-buttons">
        <li>
          <button className="build-button" data-build="mana">
            Essence Infusion
          </button>
        </li>
        <li>
          <button className="build-button" data-build="instant">
            Divine Infusion
          </button>
        </li>
      </ul>
      {/* Essence Infusion build contents */}
      <div className="build-section" id="mana" style={{ display: "none" }}>
        <h2 style={{ textAlign: "center" }}>Essence Infusion Talents</h2>
        {/* Main container for the skill tree image */}
        <div className="skilltree-wrapper">
          {/* Skill icons placed in grid cells, true center is 9,9*/}
          <div className="skill" style={{ gridColumn: 9, gridRow: 15 }}>
            <img
              src="clericImages/infusion.png"
              alt="EssenceInfusion"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Essence Infusion       Toggled Ability
              <br />
              <br />
              While active, your spells consume Divine Power instead of mana or
              health.
            </div>
          </div>
          {/* Row 14 skills */}
          <div className="skill" style={{ gridColumn: 9, gridRow: 14 }}>
            <img
              src="clericImages/judgment.png"
              alt="Judgment"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Judgment         18s Cooldown
              <br />
              30m Range         4.2s Cast
              <br />
              <br />
              If cast on an ally, restore health equal to 1500% healing power.
              <br />
              If cast on an enemy deal 280% magic power radiant damage and apply
              burning. If the target is Shaken, the caster is healed for the
              damage dealt.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 14 }}>
            <img
              src="clericImages/resplendentBeam.png"
              alt="Resplendent Beam"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Resplendent Beam     20s Cooldown
              <br />
              30m Range           1.4s cast
              <br />
              <br />
              Fire a beam of healing energy towards target ally. Charging this
              spell allows the beam to bounce up to 4 additional friendly
              targets closest to the original target. The initial hit heals for
              300% healing power and reduces with each bounce.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 14 }}>
            <img
              src="clericImages/healingTouch.png"
              alt="Healing Touch"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Healing Touch         25s Cooldown
              <br />
              4m Range           Instant Cast
              <br />
              <br />
              Heal target in melee range for 500% healing.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 6, gridRow: 14 }}>
            <img
              src="clericImages/mend.png"
              alt="Plentiful Mend"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Plentiful Mend
              <br />
              <br />
              Mend has two additional charges.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 14 }}>
            <img
              src="clericImages/mend.png"
              alt="Escalating Mend"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Escalating Mend
              <br />
              <br />
              Mend's healing is increased each time it is used in quick
              succession.
            </div>
          </div>
          {/* Row 13 skills */}
          <div className="skill" style={{ gridColumn: 9, gridRow: 13 }}>
            <img
              src="clericImages/flashCure.png"
              alt="Flash Cure"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Flash Cure         6s Cooldown
              <br />
              30m Range   3 Charges   4.2s Cast
              <br />
              <br />
              Instantly heal ally target for 250% healing. This may be used
              during other abilities.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 13 }}>
            <img
              src="clericImages/deliverance.png"
              alt="Deliverance"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Deliverance
              <br />
              30m Range         3.7s Cast
              <br />
              <br />
              Charge up healing energy that heals a target ally upon release,
              scaling in power the longer it is charged, up to 1000% healing.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 13 }}>
            <img
              src="clericImages/soothingGlow.png"
              alt="Soothing Glow"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Soothing Glow       8s Cooldown
              <br />
              30m Range   2 Charges   Instant Cast
              <br />
              <br />
              Heal for 60% healing every seconds, lasts 8 seconds.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 13 }}>
            <img
              src="clericImages/soothingGlow.png"
              alt="Abundent Soothing Glow"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Abundent Soothing Glow
              <br />
              <br />
              Soothing glow has an aditional charge.
              <br />
              Casting soothing glow on a target already under its effect extends
              its duration by its base duration.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 6, gridRow: 13 }}>
            <img
              src="clericImages/deliverance.png"
              alt="Redemptive Deliverance"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Redemptive Deliverance
              <br />
              <br />
              Deliverance heals more based on the missing health percentage of
              the target.
            </div>
          </div>
          {/* Row 11 skills */}
          <div className="skill" style={{ gridColumn: 9, gridRow: 11 }}>
            <img
              src="clericImages/blessWeapon.png"
              alt="Bless Weapon"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Bless Weapon
              <br />
              30m Range           1s Cast
              <br />
              <br />
              Imbue your target's weapon with radiant light, granting them Bless
              Weapon. Weapon combo finishers deal an additional 5% radiant
              damage and apply Bless Weapon: Mana Regen
              <br />
              Bless Weapon: Mana Regen -Regenerate mana ever 1.5 seconds. Last 6
              seconds per application up to 15 seconds.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 6, gridRow: 11 }}>
            <img
              src="clericImages/blessWeapon.png"
              alt="Bountiful Bless Weapon"
              className="ability-icon circle selected15"
            />
            <div className="skill-tooltip">
              Bountiful Bless Weapon
              <br />
              <br />
              Whenever an ally attacks whose weapon you have blessed, you also
              gain Bless Weapon: Mana Regen
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 11 }}>
            <img
              src="clericImages/blessWeapon.png"
              alt="Righteous Blessed Weapon"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Righteous Bless Weapon
              <br />
              <br />
              While Bless Weapon is active, weapon attacks have a 20% chance to
              proc an additional 20% radiant damage and apply burning.
            </div>
          </div>
          {/* Row 10 skills  */}
          <div className="skill" style={{ gridColumn: 6, gridRow: 10 }}>
            <img
              src="clericImages/divineFlare.png"
              alt="Divine Retribution"
              className="ability-icon selected15 circle"
            />
            <div className="skill-tooltip">
              Divine Retribution  <br />
              <br />
              Divine Flare deals 250% radiant damage an applies Silenced to
              enemies within its area of effect when it detonates. Damage is
              divided amoungst targets hit.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 10 }}>
            <img
              src="clericImages/purify.png"
              alt="Purify"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Purify
              <br />
              30m Range           Instant Cast <br />
              Remove up to 3 dispellable debuffs from an ally.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 9, gridRow: 10 }}>
            <img
              src="clericImages/defiantLight.png"
              alt="Defiant Light"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Defiant Light         30s Cooldown
              <br />
              30m Range         Instant Cast <br />
              Heal target ally for 50% of their max health over 10 seconds. If
              they would recieve fatal damage during this time the effect is
              consumed and they are instead healed for 25% of their max health.{" "}
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 10 }}>
            <img
              src="clericImages/barrier.png"
              alt="Barrier"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Barrier             10s Cooldown
              <br />
              30m Range           Instant Cast <br />
              <br />
              Sacrifice 25% of your max health and apply that much temporary
              health to a target ally for 10 seconds. Does not stack.
            </div>
          </div>
          {/* Row 9 skills  */}
          <div className="skill" style={{ gridColumn: 8, gridRow: 9 }}>
            <img
              src="clericImages/divineFlare.png"
              alt="Devine Flare"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Devine Flare         15s Cooldown
              <br />
              30m Range           Instant Cast <br />
              Place a targeted area of effect on the ground that heals all
              targets after several seconds. Heals for 1000% healing divided
              amoungst each target.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 9, gridRow: 9 }}>
            <img
              src="clericImages/condemn.png"
              alt="Condemn"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Condemn           30s Cooldown
              <br />
              30m Range           1.8s Cast <br />
              Apply Incapcitated for 10 seconds to enemy target. If target is
              Conflagurating, target becomes stunned for 4 seconds instead.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 9 }}>
            <img
              src="clericImages/consecratingWave.png"
              alt="Consecrating Wave"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Consecrating Wave     18s Cooldown
              <br />
              20m Range           Instant Cast
              <br />
              Send forth a wave of radiance that deals 150% radiant damage and
              applies Volatile to all enemies in front of you.
              <br />
              Dispell 1 buff from each target hit that is silenced.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 9 }}>
            <img
              src="clericImages/consecratingWave.png"
              alt="Restorative Consecrating Wave"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Restorative Consecrating Wave
              <br />
              Consecrating Wave additionally heals you and up to 10 allies for
              250% healing.
            </div>
          </div>
          {/* Row 8 skills  */}
          <div className="skill" style={{ gridColumn: 6, gridRow: 8 }}>
            <img
              src="clericImages/divineFlare.png"
              alt="Divine Protection"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Divine Protection
              <br />
              Divine Flare applies Divine Protection to allies inside of its
              area of effect before detonation.
              <br />
              Divine Protection - Magical Mitigation increased by 50% for 5
              seconds.
            </div>
          </div>
          {/* Row 6 skills  */}
          <div className="skill" style={{ gridColumn: 6, gridRow: 6 }}>
            <img
              src="clericImages/wingsofSalvation.png"
              alt="Unyielding Wings of Salvation"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Unyielding Wings of Salvation
              <br />
              Wings of Salvation breaks all disabling effects on the caster.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 6 }}>
            <img
              src="clericImages/wingsofSalvation.png"
              alt="Wings of Salvation"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Wings of Salvation   30s Cooldown
              <br />
              30m Range           Instant Cast
              <br />
              Sprout phoenix-like wings and dash to the target ally, granting
              Wings of Salvation to the caster and target on arivial.
              <br />
              Wings of Salvation - Gain a shield for 250% magic power.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 9, gridRow: 6 }}>
            <img
              src="clericImages/communalRestoration.png"
              alt="Communal Restoration"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Communal Restoration   10s Cooldown
              <br />
              30m Range       2.3s Cast
              <br />
              Restore health equal to 150% healing to all party memebers in
              range and apply Communal Restoration.
              <br />
              Communal Restoration - apply a shield for 10% of targets max
              health and heal for 30% healing every second for 6 seconds.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 6 }}>
            <img
              src="clericImages/chainsofRestraint.png"
              alt="Chains of Restraint"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Chains of Restraint       30s Cooldown
              <br />
              30m Range             2.1s Cast
              <br />
              Conjure a circle of radiant chains at target location for 8
              seconds that deal 40% radiant damage every second and applies
              Snared to targets within area.
              <br />
              Each Weakened target hit by the initial pulse becomes rooted.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 6 }}>
            <img
              src="clericImages/chainsofRestraint.png"
              alt="Binding Chains of Restraint"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Binding Chains of Restraint
              <br />
              Chains of Restraint's final tick applies stunned for 3 seconds.
            </div>
          </div>
        </div>
        <h2>Talent Order:</h2>
        <p>
          <strong>Up to level 15:</strong>
          <br />
          1. Essence Infusion   2. Flash Cure   3. Soothing Glow   4. Judgment  
          5. Bless Weapon   6. Bountiful Bless Weapon 7. Defiant Light   8.
          Consecrating Wave   9. Restorative Consecrating Wave <br /> 10.
          Condemn   11. Communal Restoration   12. Wings of Salvation 13. Divine
          Flare   14. Divine Retribution{" "}
        </p>
        <p>
          <strong>To level 25:</strong>
          <br />
          15. Unyielding Wings of Salvation   16. Deliverance   17. Chains of
          Restraint   18. Binding Chains of Restraint   19. Purify   20.
          Redemptive Deliverance 21. Healing Touch   22. Barrier  <br /> 23.
          Resplendent Beam   24. Righteous Blessed Weapon
        </p>
        <p>
          Note: You will notice that the only difference in build is which
          infusion you take. Right now this is the only choice node cleric has
          so it is the only spell you change. Essence Infusion should be taken
          if you are really struggling with mana or just hate using Divine
          Infusion
        </p>
      </div>
      {/* Divine Infusion build contents */}
      <div className="build-section" id="instant" style={{ display: "none" }}>
        <h2 style={{ textAlign: "center" }}>Divine Infusion Talents</h2>
        {/* Main container for the skill tree image */}
        <div className="skilltree-wrapper">
          {/* Skill icons placed in grid cells, true center is 9,9*/}
          <div className="skill" style={{ gridColumn: 9, gridRow: 15 }}>
            <img
              src="clericImages/infusion.png"
              alt="Divine Infusion"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Divine Infusion       Toggled Ability
              <br />
              <br />
              Consume Divine Power to instantly complete the remaining cast time
              of any spell currently being cast.
            </div>
          </div>
          {/* Row 14 skills */}
          <div className="skill" style={{ gridColumn: 9, gridRow: 14 }}>
            <img
              src="clericImages/judgment.png"
              alt="Judgment"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Judgment         18s Cooldown
              <br />
              30m Range         4.2s Cast
              <br />
              <br />
              If cast on an ally, restore health equal to 1500% healing power.
              <br />
              If cast on an enemy deal 280% magic power radiant damage and apply
              burning. If the target is Shaken, the caster is healed for the
              damage dealt.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 14 }}>
            <img
              src="clericImages/resplendentBeam.png"
              alt="Resplendent Beam"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Resplendent Beam     20s Cooldown
              <br />
              30m Range           1.4s cast
              <br />
              <br />
              Fire a beam of healing energy towards target ally. Charging this
              spell allows the beam to bounce up to 4 additional friendly
              targets closest to the original target. The initial hit heals for
              300% healing power and reduces with each bounce.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 14 }}>
            <img
              src="clericImages/healingTouch.png"
              alt="Healing Touch"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Healing Touch         25s Cooldown
              <br />
              4m Range           Instant Cast
              <br />
              <br />
              Heal target in melee range for 500% healing.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 6, gridRow: 14 }}>
            <img
              src="clericImages/mend.png"
              alt="Plentiful Mend"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Plentiful Mend
              <br />
              <br />
              Mend has two additional charges.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 14 }}>
            <img
              src="clericImages/mend.png"
              alt="Escalating Mend"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Escalating Mend
              <br />
              <br />
              Mend's healing is increased each time it is used in quick
              succession.
            </div>
          </div>
          {/* Row 13 skills */}
          <div className="skill" style={{ gridColumn: 9, gridRow: 13 }}>
            <img
              src="clericImages/flashCure.png"
              alt="Flash Cure"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Flash Cure         6s Cooldown
              <br />
              30m Range   3 Charges   4.2s Cast
              <br />
              <br />
              Instantly heal ally target for 250% healing. This may be used
              during other abilities.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 13 }}>
            <img
              src="clericImages/deliverance.png"
              alt="Deliverance"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Deliverance
              <br />
              30m Range         3.7s Cast
              <br />
              <br />
              Charge up healing energy that heals a target ally upon release,
              scaling in power the longer it is charged, up to 1000% healing.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 13 }}>
            <img
              src="clericImages/soothingGlow.png"
              alt="Soothing Glow"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Soothing Glow       8s Cooldown
              <br />
              30m Range   2 Charges   Instant Cast
              <br />
              <br />
              Heal for 60% healing every seconds, lasts 8 seconds.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 13 }}>
            <img
              src="clericImages/soothingGlow.png"
              alt="Abundent Soothing Glow"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Abundent Soothing Glow
              <br />
              <br />
              Soothing glow has an aditional charge.
              <br />
              Casting soothing glow on a target already under its effect extends
              its duration by its base duration.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 6, gridRow: 13 }}>
            <img
              src="clericImages/deliverance.png"
              alt="Redemptive Deliverance"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Redemptive Deliverance
              <br />
              <br />
              Deliverance heals more based on the missing health percentage of
              the target.
            </div>
          </div>
          {/* Row 11 skills */}
          <div className="skill" style={{ gridColumn: 9, gridRow: 11 }}>
            <img
              src="clericImages/blessWeapon.png"
              alt="Bless Weapon"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Bless Weapon
              <br />
              30m Range           1s Cast
              <br />
              <br />
              Imbue your target's weapon with radiant light, granting them Bless
              Weapon. Weapon combo finishers deal an additional 5% radiant
              damage and apply Bless Weapon: Mana Regen
              <br />
              Bless Weapon: Mana Regen -Regenerate mana ever 1.5 seconds. Last 6
              seconds per application up to 15 seconds.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 6, gridRow: 11 }}>
            <img
              src="clericImages/blessWeapon.png"
              alt="Bountiful Bless Weapon"
              className="ability-icon circle selected15"
            />
            <div className="skill-tooltip">
              Bountiful Bless Weapon
              <br />
              <br />
              Whenever an ally attacks whose weapon you have blessed, you also
              gain Bless Weapon: Mana Regen
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 11 }}>
            <img
              src="clericImages/blessWeapon.png"
              alt="Righteous Blessed Weapon"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Righteous Bless Weapon
              <br />
              <br />
              While Bless Weapon is active, weapon attacks have a 20% chance to
              proc an additional 20% radiant damage and apply burning.
            </div>
          </div>
          {/* Row 10 skills  */}
          <div className="skill" style={{ gridColumn: 6, gridRow: 10 }}>
            <img
              src="clericImages/divineFlare.png"
              alt="Divine Retribution"
              className="ability-icon selected15 circle"
            />
            <div className="skill-tooltip">
              Divine Retribution  <br />
              <br />
              Divine Flare deals 250% radiant damage an applies Silenced to
              enemies within its area of effect when it detonates. Damage is
              divided amoungst targets hit.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 10 }}>
            <img
              src="clericImages/purify.png"
              alt="Purify"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Purify
              <br />
              30m Range           Instant Cast <br />
              Remove up to 3 dispellable debuffs from an ally.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 9, gridRow: 10 }}>
            <img
              src="clericImages/defiantLight.png"
              alt="Defiant Light"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Defiant Light         30s Cooldown
              <br />
              30m Range         Instant Cast <br />
              Heal target ally for 50% of their max health over 10 seconds. If
              they would recieve fatal damage during this time the effect is
              consumed and they are instead healed for 25% of their max health.{" "}
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 10 }}>
            <img
              src="clericImages/barrier.png"
              alt="Barrier"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Barrier             10s Cooldown
              <br />
              30m Range           Instant Cast <br />
              <br />
              Sacrifice 25% of your max health and apply that much temporary
              health to a target ally for 10 seconds. Does not stack.
            </div>
          </div>
          {/* Row 9 skills  */}
          <div className="skill" style={{ gridColumn: 8, gridRow: 9 }}>
            <img
              src="clericImages/divineFlare.png"
              alt="Devine Flare"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Devine Flare         15s Cooldown
              <br />
              30m Range           Instant Cast <br />
              Place a targeted area of effect on the ground that heals all
              targets after several seconds. Heals for 1000% healing divided
              amoungst each target.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 9, gridRow: 9 }}>
            <img
              src="clericImages/condemn.png"
              alt="Condemn"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Condemn           30s Cooldown
              <br />
              30m Range           1.8s Cast <br />
              Apply Incapcitated for 10 seconds to enemy target. If target is
              Conflagurating, target becomes stunned for 4 seconds instead.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 9 }}>
            <img
              src="clericImages/consecratingWave.png"
              alt="Consecrating Wave"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Consecrating Wave     18s Cooldown
              <br />
              20m Range           Instant Cast
              <br />
              Send forth a wave of radiance that deals 150% radiant damage and
              applies Volatile to all enemies in front of you.
              <br />
              Dispell 1 buff from each target hit that is silenced.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 9 }}>
            <img
              src="clericImages/consecratingWave.png"
              alt="Restorative Consecrating Wave"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Restorative Consecrating Wave
              <br />
              Consecrating Wave additionally heals you and up to 10 allies for
              250% healing.
            </div>
          </div>
          {/* Row 8 skills  */}
          <div className="skill" style={{ gridColumn: 6, gridRow: 8 }}>
            <img
              src="clericImages/divineFlare.png"
              alt="Divine Protection"
              className="ability-icon circle"
            />
            <div className="skill-tooltip">
              Divine Protection
              <br />
              Divine Flare applies Divine Protection to allies inside of its
              area of effect before detonation.
              <br />
              Divine Protection - Magical Mitigation increased by 50% for 5
              seconds.
            </div>
          </div>
          {/* Row 6 skills  */}
          <div className="skill" style={{ gridColumn: 6, gridRow: 6 }}>
            <img
              src="clericImages/wingsofSalvation.png"
              alt="Unyielding Wings of Salvation"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Unyielding Wings of Salvation
              <br />
              Wings of Salvation breaks all disabling effects on the caster.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 8, gridRow: 6 }}>
            <img
              src="clericImages/wingsofSalvation.png"
              alt="Wings of Salvation"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Wings of Salvation   30s Cooldown
              <br />
              30m Range           Instant Cast
              <br />
              Sprout phoenix-like wings and dash to the target ally, granting
              Wings of Salvation to the caster and target on arivial.
              <br />
              Wings of Salvation - Gain a shield for 250% magic power.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 9, gridRow: 6 }}>
            <img
              src="clericImages/communalRestoration.png"
              alt="Communal Restoration"
              className="ability-icon selected15"
            />
            <div className="skill-tooltip">
              Communal Restoration   10s Cooldown
              <br />
              30m Range       2.3s Cast
              <br />
              Restore health equal to 150% healing to all party memebers in
              range and apply Communal Restoration.
              <br />
              Communal Restoration - apply a shield for 10% of targets max
              health and heal for 30% healing every second for 6 seconds.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 10, gridRow: 6 }}>
            <img
              src="clericImages/chainsofRestraint.png"
              alt="Chains of Restraint"
              className="ability-icon selected25"
            />
            <div className="skill-tooltip">
              Chains of Restraint       30s Cooldown
              <br />
              30m Range             2.1s Cast
              <br />
              Conjure a circle of radiant chains at target location for 8
              seconds that deal 40% radiant damage every second and applies
              Snared to targets within area.
              <br />
              Each Weakened target hit by the initial pulse becomes rooted.
            </div>
          </div>
          <div className="skill" style={{ gridColumn: 12, gridRow: 6 }}>
            <img
              src="clericImages/chainsofRestraint.png"
              alt="Binding Chains of Restraint"
              className="ability-icon circle selected25"
            />
            <div className="skill-tooltip">
              Binding Chains of Restraint
              <br />
              Chains of Restraint's final tick applies stunned for 3 seconds.
            </div>
          </div>
        </div>
        <h2>Talent Order:</h2>
        <p>
          <strong>Up to level 15:</strong>
          <br />
          1. Essence Infusion   2. Flash Cure   3. Soothing Glow   4. Judgment  
          5. Bless Weapon   6. Bountiful Bless Weapon 7. Defiant Light   8.
          Consecrating Wave   9. Restorative Consecrating Wave <br /> 10.
          Condemn   11. Communal Restoration   12. Wings of Salvation 13. Divine
          Flare   14. Divine Retribution{" "}
        </p>
        <p>
          <strong>To level 25:</strong>
          <br />
          15. Unyielding Wings of Salvation   16. Deliverance   17. Chains of
          Restraint   18. Binding Chains of Restraint   19. Purify   20.
          Redemptive Deliverance 21. Healing Touch   22. Barrier  <br /> 23.
          Resplendent Beam   24. Righteous Blessed Weapon
        </p>
        <p>
          Note: You will notice that the only difference in build is which
          infusion you take. Right now this is the only choice node cleric has
          so it is the only spell you change. Divine Infusion is a higher skill
          cieling but has better emergency throughput and is better at winning
          1vX fights.
        </p>
      </div>
    </section>
    <section id="items">
      <h2>Gear and Consumables</h2>
      <p>
        <strong>Consumables:</strong>
        <br />
        Food: Fruit Salad
        <br />
        Scroll: Intelligence Scroll
      </p>
      <p>
        <strong>Gear:</strong>
        <br />
        While leveling you should just always prioritize whatever the strongest
        gear you have available to you. Try to focus on using gear with useful
        stats like Int/Mentality/Wisdom but anything is better than an empty
        slot.
        <br />
        For weapons you can get away with anything that has magical power on it.
        The recommended combo would be either a scepter with a focus or shield,
        or 2h spellsword for you melee slots. For ranged the best weapon skills
        for cleric come from wand or spellbook, but you can make use of any
        spellbow as well.
      </p>
      <p>
        <strong>Level 25 Gear:</strong>
      </p>
      <div className="container">
        <div className="image-holder left">
          <div className="gear-wrapper">
            <div className="equipment" style={{ gridColumn: 1, gridRow: 2 }}>
              <img src="clericImages/bloomHead.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/bloomHeadStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 1, gridRow: 3 }}>
              <img src="clericImages/roseChest.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/roseChestStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 1, gridRow: 4 }}>
              <img src="clericImages/roseWrist.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/roseWristStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 1, gridRow: 5 }}>
              <img src="clericImages/bloomGloves.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/bloomGlovesStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 1, gridRow: 6 }}>
              <img src="clericImages/roseBelt.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/roseBeltStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 1, gridRow: 7 }}>
              <img src="clericImages/rosePants.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/rosePantsStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 1, gridRow: 8 }}>
              <img src="clericImages/roseBoots.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/roseBootsStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 2 }}>
              <img src="clericImages/roseShoulder.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/roseShoulderStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 3 }}>
              <img src="clericImages/joevaBack.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/joevaBackStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 4 }}>
              <img src="clericImages/steelbloomEar.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/steelbloomEarStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 5 }}>
              <img src="clericImages/steelbloomEar.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/steelbloomEarStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 6 }}>
              <img src="clericImages/saphNeck.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/saphNeckStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 7 }}>
              <img src="clericImages/rivRing.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/rivRingStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 8 }}>
              <img src="clericImages/rivRing.png" />
              <div className="equipment-tooltip">
                <img
                  className="equipment-image"
                  src="clericImages/rivRingStats.png"
                />
              </div>
            </div>
          </div>
          <div className="weapon-wrapper">
            <div className="equipment" style={{ gridColumn: 4, gridRow: 1 }}>
              <img src="clericImages/spellsword.png" />
              <div className="weapon-tooltip" style={{ textAlign: "center" }}>
                <img
                  className="equipment-image"
                  src="clericImages/steelSpellSword.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 5, gridRow: 1 }}>
              <img src="clericImages/spellsword.png" />
              <div className="weapon-tooltip" style={{ textAlign: "center" }}>
                <img
                  className="equipment-image"
                  src="clericImages/steelSpellSword.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 6, gridRow: 1 }}>
              <img src="clericImages/wand.png" />
              <div className="weapon-tooltip" style={{ textAlign: "center" }}>
                <img
                  className="equipment-image"
                  src="clericImages/wandBriarStats.png"
                />
              </div>
            </div>
            <div className="equipment" style={{ gridColumn: 7, gridRow: 1 }}>
              <img src="clericImages/focus.png" />
              <div className="weapon-tooltip" style={{ textAlign: "center" }}>
                <img
                  className="equipment-image"
                  src="clericImages/focusBruinStats.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Gear Breakdown</h2>
          <p>
            The best setup for gear currently found is two pieces of Bloomwarden
            and six pieces of Rosethorn.
            <br />
            This will give you all of the following set bonuses:
            <br />
          </p>
          <li>2% Base Crit Chance</li>
          <li>2% Movespeed</li>
          <li>0.2 Stamina Regen</li>
          <li>2 Mentality</li>
          <li>7 Armor</li>
          <li>7 Magic Accuarcy</li>
          <li>14 Magic Power</li>
          <li>7 Magic Disable Accuracy</li>
          <li>2 Intelligence</li>
          <li>7 Magic Casting Speed</li>
          <li>7 Magic Crit Chance</li>
          <li>15 Max Health</li>
          <br />
          <p />
          <h2>Stat Priority</h2>
          <p>
            The basic stat priority for cleric is:
            <br />
            <br />
            <strong>
              Intelligence &gt; Magic Power/Healing Power &gt; Constitustion
              &gt; Wisdom = Mentality &gt; Casting Speed
            </strong>
          </p>
        </div>
        &gt;
      </div>
    </section>
    <section id="abilities">
      <h2>Abilities</h2>
      <ul>
        <li>
          <strong>Essence Infusion:</strong> Allows you to spend Divine Power
          instead of mana or health when casting abilities.
        </li>
        <li>
          <strong>Divine Infusion:</strong> Allows you to spend Divine Power to
          instantly finish the cast of an ability.
        </li>
        <li>
          <strong>Divine Power:</strong> Class resource that builds from healing
          or damage. While at high resource levels you chance to crit is
          increased.
        </li>
        <li>
          <strong>Mend:</strong> Launched a slow moving bolt of low healing at
          target.
        </li>
        <li>
          <strong>Resurrect:</strong> Brings ally back from death.
        </li>
        <li>
          <strong>Smite:</strong> Deals a small amount of radiant damage, if the
          target is buring it upgrades the burn to Conflagurate.
        </li>
        <li>
          <strong>Judgment:</strong> Can be cast on either an enemy for a
          moderate amount of damage or on an ally for a very large amount of
          healing. Causes burning on enemies.
        </li>
        <li>
          <strong>Resplendent Beam:</strong> Charged abilty that will heal up to
          five allies based on charge time.
        </li>
        <li>
          <strong>Healing Touch:</strong> Large instant cast heal that must be
          used at melee range.
        </li>
        <li>
          <strong>Flash Cure:</strong> Instant cast spell that heals for a
          moderate amount. Has three charges.
        </li>
        <li>
          <strong>Deliverance:</strong> Charged ability that will up to an
          extremely large amount based on charge time.
        </li>
        <li>
          <strong>Soothing Glow:</strong> Applies a small heal over time to an
          ally for a moderate amount of time, has two charges.
        </li>
        <li>
          <strong>Bless Weapon:</strong> Buff applied to an ally that allows for
          extra damage and mana regeneration.
        </li>
        <li>
          <strong>Defiant Light:</strong> Applies a large heal over time to an
          ally and applies a cheat death affect for its duration.
        </li>
        <li>
          <strong>Barrier:</strong> Sacrafice your own health to apply a shield
          for the same amount to an ally for a small amount of time.
        </li>
        <li>
          <strong>Purify:</strong> Removes up to three debuffs from an ally per
          cast.
        </li>
        <li>
          <strong>Divine Flare:</strong> Places a circle on the ground that
          errupts for healing and damage split between targets.
        </li>
        <li>
          <strong>Condemn:</strong> Applies a long sleep affect on enemies, if
          target is Conflagurating this is instead a four second stun.
        </li>
        <li>
          <strong>Consecrating Wave:</strong> Instant cast ability that causes
          healing and damage in a cone in front of you.
        </li>
        <li>
          <strong>Communal Restoration:</strong> Applies a small heal, a small
          heal over time and a small shield affect to all party memebers within
          range.
        </li>
        <li>
          <strong>Wings of Salvation:</strong> Dashes you to a target ally.
        </li>
        <li>
          <strong>Chains of Restraint:</strong> Places a circle on the ground
          that ticks for damage over time and applies snared. This can be
          upgraded to a stun.
        </li>
      </ul>
    </section>
    <section id="tips">
      <h2>Tips &amp; Tricks</h2>
      <ul>
        <li>
          <strong>Positioning is Key:</strong> Make sure to keep youself in a
          safe spot towards the rear of the group. Wings is your only get out
          jail free card so make sure you have before trying to push to the
          front.
        </li>
        <li>
          <strong>Cooldown Management:</strong> You have quite a few low
          cooldown spells. Knowing when things like Wings or Defiant Light are
          off cooldown is imperative to your survival.
        </li>
        <li>
          <strong>Use Buffs Wisely:</strong> Unless you are told to put Bless
          Weapon on a tank, you should always try to put it on your highest
          geared mage or ranger.
        </li>
        <li>
          <strong>Coordinate with Tanks:</strong> Communicate with your tank to
          ensure you have proper timing on cooldowns so they don't die to spike
          damage.
        </li>
        <li>
          <strong>Keep an Eye on Mana:</strong> Use mana salves when needed and
          use your ranged weapon whenever you can. Refreshing from your weapon
          attacks goes a long way to keeping high mana.
        </li>
      </ul>
      <h1>
        <strong>The Wombo Combo:</strong>
      </h1>
      <p>
        Cleric has a decent combo they can pull off for damage when needed. Its
        not a ton of damage but it can be enough to turn a fight or secure a
        kill.
        <br />
        The combo itself is the same no matter what talents you took, the
        difference is mainly in the timing. With Divine Infusion you will be
        able to instantly cast several spells in the combo. You should instant
        cast Judgment and Condemn if you can.
        <br />
        <strong>The combo:</strong> Judgment &gt; Smite &gt; Condemn &gt; Divine
        Flare &gt; Chains of Restraint &gt; Consecrating Wave{" "}
      </p>
      <div className="video-container">
        <div className="video-item">
          <h1>With Divine Infusion</h1>
          <video width={640} height={480} controls="">
            <source
              src="clericImages/InstantClericCombo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="video-item">
          <h1>Without Divine Infusion</h1>
          <video width={640} height={480} controls="">
            <source src="clericImages/ClericCombo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
    <section id="talent-calculator">
      <h2>Talent Calculator</h2>
      <p>
        <strong>Disclaimer:</strong> This is a work in progress. For now feel
        free to make use of AshesCodex for talent calculators.
      </p>
    </section>
    <button className="scroll-to-top-btn" onclick="scrollToTop()">
      ↑
    </button>
    <p>Written by Lennox</p>
    <p>Last updated 11/5/2024</p>
  </main>
  <footer>
    <p>©2024 Enveus Gaming </p>
  </footer>
</>
