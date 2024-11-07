import React from "react";

const Tips = () => (
    <>
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
    <video width={640} height={480} controls>
      <source src="/clericImages/InstantClericCombo.mp4" type="video/mp4" />
      <source src="/clericImages/InstantClericCombo.webm" type="video/webm" />
      <source src="/clericImages/InstantClericCombo.ogv" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="video-item">
    <h1>Without Divine Infusion</h1>
    <video width={640} height={480} controls>
      <source src="/clericImages/ClericCombo.mp4" type="video/mp4" />
      <source src="/clericImages/ClericCombo.webm" type="video/webm" />
      <source src="/clericImages/ClericCombo.ogv" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
    </>
);

export default Tips;
