function JoinTeam() {
  return (
    <div className="join-wrapper">
      <div className="join">
        <img src="images/join_image.png" alt="" />
        <div className="join__title">
          <h1>Join our Weekly Digest</h1>
          <span>
            Get exclusive promotions & updates straight to your inbox.
          </span>
        </div>
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
  );
}

export default JoinTeam;
