import React from "react";

const EssenceInfusion = () => (
<div className="build-section" id="mana">
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
              30m Range           1.6s Cast <br />
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
);

export default EssenceInfusion;