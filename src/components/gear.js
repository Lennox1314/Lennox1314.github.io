import React from "react";

const Gear = () => (
    <>
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
            <img src="clericImages/roseGloves.png" />
            <div className="equipment-tooltip">
              <img
                className="equipment-image"
                src="clericImages/roselovesStats.png"
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
            <img src="clericImages/bloomShoulder.png" />
            <div className="equipment-tooltip">
              <img
                className="equipment-image"
                src="clericImages/bloomShoulderStats.png"
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
    </>
);

export default Gear;