import "../App.css";

export const Contact = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row left">
          <h1>Contact us</h1>
        </div>
      </div>
      <div class="container">
        <div class="row"> <iframe title="Google Maps embed for the Cookhouse Cafe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.730669339143!2d0.5823639303718259!3d50.8593370838658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df1ac40d318ad7%3A0xac0e789eef750ed!2sThe%20Cookhouse%20Caf%C3%A9!5e0!3m2!1sen!2suk!4v1735389418250!5m2!1sen!2suk" width="600px" height="450" style={{ border: 0 }} loading="lazy"></iframe></div>
        <div class="row">
          <div>
            <h2>Address</h2>
            <address>
              <p translate="no">
                79 Queens Road<br />
                Hastings<br />
                TN34 1RL<br />
                United Kingdom
              </p>
            </address>
            <p>Phone: <a href="tel:07379458429">07379458429</a></p>
          </div>
          <div>
            <h2>Opening hour</h2>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Monday">Monday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Tuesday">Tuesday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Wednesday">Wednesday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Thursday">Thursday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Friday">Friday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Saturday">Saturday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div>
            <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
              <span itemprop="dayOfWeek" href="https://schema.org/Sunday">Sunday <time itemprop="opens" content="09:00:00">09:00</time>-<time itemprop="closes" content="17:00:00">17:00</time></span>
            </div></div>
        </div>
      </div>
    </div>
  );
};
