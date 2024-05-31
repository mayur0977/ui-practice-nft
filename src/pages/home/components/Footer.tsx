function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo footer__section">
          <div className="logo__box">
            <img src="images/logo.svg" className="header__logo" alt="logo" />
            <p>NFT Marketplace</p>
          </div>
          <p>NFT marketplace UI created with Anima and Figma</p>
          <p>join our community</p>
          <div className="footer__social">
            <img src="images/DiscordLogo.svg" alt="Discord" />
            <img src="images/YoutubeLogo.svg" alt="Youtube" />
            <img src="images/TwitterLogo.svg" alt="Twitter" />
            <img src="images/InstagramLogo.svg" alt="Instagram" />
          </div>
        </div>
        <div className="export__section footer__section">
          <h3>Explore</h3>

          <div>
            <p>Marketplace</p>
            <p>Rankings</p>
            <p>Connect a wallet</p>
          </div>
        </div>
        <div className="join__section footer__section">
          <h3>Join Our Weekly Digest</h3>

          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="email_controls">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              id="email"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
