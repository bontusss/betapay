<script setup></script>

<template>
  <div class="container">
    <div class="mr-auto ml-auto text-center">
      <p class="intro-1">
        Simplify team payments with payroll tracking software.
      </p>
    </div>
    <div class="about py-3">
      <p class="text-secondary text-center">
        Ompaya is a wage payment software establishment that aspires to be an
        all round HR(Human resource management) service tool as we proceed.
        Salary or wage in basic term is said to be money you get paid for doing
        a job, it can be paid daily, monthly or yearly. Ompaya is set to make
        the job of the back office staff such as HR, the finance team easy and
        more effective as everything such as payroll will be document for future
        references.
      </p>
      <div class="feature-list text-secondary">
        <h1 class="text-center py-4">Our goals</h1>
        <ol role="list">
          <li>To make salary payment less complicated but easy.</li>
          <li style="--li-bg: #00ff00">
            Improve employee satisfaction - Employees expect the core HR
            operations of their organization to be streamlined and efficient
            without any disruptions. Supporting a variety of employee eccentric
            features as Omapaya will automated and employees will be
            consistently paid on time.
          </li>
          <li style="--li-bg: #00ffff">
            Automatic payroll calculations - The payroll system that you opt for
            should be able to automate activities like calculating gross
            salaries, finalizing net salaries, processing payroll, and
            generating pay slips. Some payroll systems are integrated with HR
            software to automatically import the attendance and leave data
            required to calculate employee’s payroll.
          </li>
          <li style="--li-bg: #ff00ff">
            Save time and less administrative over load - The steps to payroll
            can be stressful; payroll is complex and delicate that the finance
            and HR team have to spend a substantial amount of time correcting
            even the smallest error. As everything is automated, payroll process
            can be initiated within a few minutes. Errors, if there are any, can
            be identified immediately and corrected on the spot. This will help
            in giving the ability to focus on more strategic initiatives that
            can't be automated, like strengthening emp￼Join Waitlist Simplify
            team payments withloyee experience, satisfaction, and morale.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "https://moderncss.dev/totally-custom-list-styles/";
a {
  color: white;
}

p,
li {
  font-size: 20px;
}

.about p {
  font-family: cursive;
}
.feature-list {
  font-family: cursive;
  padding-left: 20px;
}

.feature-list h1 {
  font-size: 40px;
  font-weight: bold;
}

ol {
  --li-bg: white;
  counter-reset: orderedlist;

  li::before {
    // counter-increment: orderedlist;
    // content: counter(orderedlist);
    font-family: "Indie Flower";
    font-size: 0.65em;
    // line-height: 120%;
    width: 1.5rem;
    padding: 0.25rem;
    // text-align: left;
    color: #fff;
    background-color: var(--li-bg);
    border-radius: 0.25em;
  }
}
.container {
  .intro-1 {
    font-size: 60px;
    width: 800px;
    font-weight: bolder;
    margin-right: auto;
    margin-left: auto;
    line-height: 100%;
    padding: 30px 0px;
    background: -webkit-linear-gradient(#eee, rgb(87, 173, 66));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 991px) {
    .intro-1 {
      line-height: 140%;
      font-size: 30px;
      width: 100%;
    }
  }
}
</style>
