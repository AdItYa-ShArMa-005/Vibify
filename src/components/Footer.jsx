function Footer() {
    const members = [
        { name: "Aditya Sharma", branch: "CSE-A" },
        { name: "Anjil Tripathi", branch: "CSE-A" },
        { name: "Amrita Kushwaha", branch: "CSE-A" },
        { name: "Arya Shree", branch: "CSE-B" },
    ];

    return (
        <footer className="footer">
            
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">🎵 CodeBeats</span>
                    <p className="footer-tagline">Made with ❤️ by the CodeBeats team</p>
                </div>

                <div className="footer-divider" />

                <div className="footer-team">
                    <p className="footer-team-label">Our Team</p>
                    <div className="footer-members">
                        {members.map((m, i) => (
                            <div className="footer-member" key={i}>
                                <span className="member-name">{m.name}</span>
                                <span className="member-branch">{m.branch}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;